import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { CONTENT_REGISTRY } from "@/content/registry";
import { CONTENT_RELATIONSHIPS } from "@/content/relationships";
import { SITE_URL } from "@/content/site";

const PUBLIC_ROUTES = [
  "/",
  "/portfolio",
  "/design-system",
  "/design-system/theme-lab",
  "/knowledge",
  "/knowledge/building-mykmhub-ai-assisted-development",
  "/toolkit",
  "/about",
  "/frameworks/hcd-operating-model-baseline",
  "/frameworks/accessibility-governance-baseline",
  "/patterns/hcd-engagement-intake-triage",
  "/patterns/hcd-delivery-checkpoints",
  "/templates/hcd-decision-evidence-record",
  "/templates/hcd-outcome-measurement-plan",
  "/templates/hcd-operating-agreement",
  "/templates/hcd-research-evidence-plan",
  "/templates/hcd-operating-model-review",
  "/tools",
  "/tools/evidence-traceability-matrix-builder",
  "/tools/accessible-form-requirements-generator",
  "/tools/ai-image-prompt-wizard",
  "/case-studies/scaling-hcd-through-ai",
  "/case-studies/scaling-automated-hcd-in-navy-hr-modernization",
  "/case-studies/accessible-form-component-and-ux-requirements-generator",
  "/case-studies/ai-image-creation-wizard",
  "/case-studies/doj-site-redesign-accessibility-usability",
  "/case-studies/march-for-science-site-redesign",
  "/case-studies/navy-kpi-dashboard",
  "/case-studies/personal-knowledge-management-system",
  "/methods/evidence-first-synthesis",
] as const;

const INDEXABLE_ROUTES = PUBLIC_ROUTES.filter(
  (route) => route !== "/tools/evidence-traceability-matrix-builder",
);

test("sitemap and robots expose published pages without indexing APIs", () => {
  const sitemapUrls = sitemap()
    .map((entry) => entry.url)
    .sort();
  const publicUrls = INDEXABLE_ROUTES.map((route) =>
    new URL(route, SITE_URL).toString(),
  ).sort();

  expect(sitemapUrls).toEqual(publicUrls);
  expect(robots()).toEqual({
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  });
});

test("content relationships reference valid unique entries", () => {
  const entryIds = new Set(CONTENT_REGISTRY.map((entry) => entry.id));
  const relationshipKeys = new Set<string>();

  for (const relationship of CONTENT_RELATIONSHIPS) {
    expect(entryIds.has(relationship.fromEntryId)).toBe(true);
    expect(entryIds.has(relationship.toEntryId)).toBe(true);
    expect(relationship.fromEntryId).not.toBe(relationship.toEntryId);

    const key = [
      relationship.fromEntryId,
      relationship.toEntryId,
      relationship.type,
    ].join(":");
    expect(relationshipKeys.has(key)).toBe(false);
    relationshipKeys.add(key);
  }

  for (const entry of CONTENT_REGISTRY) {
    for (const relatedEntryId of entry.relatedEntryIds ?? []) {
      expect(entryIds.has(relatedEntryId)).toBe(true);
    }
  }
});

for (const route of PUBLIC_ROUTES) {
  test(`${route} has no automatically detectable WCAG A or AA violations`, async ({
    page,
  }) => {
    await page.goto(route);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}

test("skip navigation moves focus to the main content", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("accessibility preferences are keyboard reachable and persistent", async ({
  page,
}) => {
  await page.goto("/");

  const preferences = page.getByText("Accessibility", { exact: true });
  await preferences.click();

  const contrast = page.getByRole("switch", { name: "Increased contrast" });
  await contrast.press("Space");
  await expect(contrast).toBeChecked();

  await page.reload();
  await preferences.click();
  await expect(
    page.getByRole("switch", { name: "Increased contrast" }),
  ).toBeChecked();
});

test("draft evidence log is clearly identified", async ({ page }) => {
  await page.goto("/tools/evidence-traceability-matrix-builder");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
  await expect(page.getByText(
    "Status: Working proof of concept · Low priority",
  )).toBeVisible();
  await expect(page.getByRole("heading", {
    name: "Use sanitized information only",
  })).toBeVisible();
  await expect(page.locator("details.version-notes")).not.toHaveAttribute(
    "open",
    "",
  );
});

test("working tool pages use the compact shared header", async ({ page }) => {
  for (const route of [
    "/tools/accessible-form-requirements-generator",
    "/tools/ai-image-prompt-wizard",
    "/tools/evidence-traceability-matrix-builder",
  ]) {
    await page.goto(route);
    await expect(page.getByRole("button", { name: "More description" })).toBeVisible();
    await expect(page.getByText("Instructions:", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Current scope" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Beta scope" })).toHaveCount(0);
    await expect(page.getByText("Context", { exact: true })).toHaveCount(0);
  }
});

test("Theme Lab previews and persists a guarded local draft", async ({ page }) => {
  await page.goto("/design-system/theme-lab");
  await expect(page.getByText(
    "Live preview and optional site application",
  )).toBeVisible();
  await expect(page.getByRole("heading", {
    name: "Preview hierarchy without changing the site",
  })).toBeVisible();
  await expect(page.getByText("Passes the 3:1 preview guardrail.")).toBeVisible();
  await expect(page.getByText("Persistent focus preview", { exact: true })).toBeVisible();
  await expect(page.getByLabel("Persistent focus style preview")).toContainText(
    "Light canvas",
  );
  await expect(page.getByLabel("Persistent focus style preview")).toContainText(
    "Dark canvas",
  );
  await expect(page.getByText("Passes the 4.5:1 text and link guardrail.")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Spectrum background level" }),
  ).toHaveCount(0);

  const themePreset = page.getByRole("button", { name: "Theme preset" });
  await themePreset.click();
  await page.getByRole("option", { name: "Aged Paper" }).click();
  await expect(page.getByRole("textbox", { name: "Light page background" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Dark page background" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Canvas edge treatment" }),
  ).toContainText("Soft paper vignette");
  await expect(page.locator(".theme-preview")).toHaveAttribute(
    "data-canvas-effect",
    "paper-vignette",
  );
  await expect(page.locator("body")).toHaveCSS(
    "background-image",
    /radial-gradient/,
  );
  await expect(page.getByRole("button", { name: "Focus color" })).toContainText(
    "Spectrum blue",
  );
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(249, 246, 240)",
  );
  await expect(page.locator(".theme-preview")).toHaveCSS(
    "background-color",
    "rgb(253, 251, 247)",
  );
  await page.getByText("Accessibility", { exact: true }).click();
  const appearance = page.getByRole("button", { name: "Appearance" });
  await appearance.click();
  await page.getByRole("option", { name: "Dark" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(36, 35, 32)",
  );
  await expect(page.locator("body")).toHaveCSS(
    "color",
    "rgb(243, 238, 228)",
  );
  await appearance.click();
  await page.getByRole("option", { name: "Light" }).click();
  await page
    .getByRole("textbox", { name: "Light page background" })
    .fill("#f8f5ef");
  await expect(themePreset).toContainText("Modified draft");
  await expect(page.locator(".theme-preview")).toHaveAttribute(
    "data-canvas-effect",
    "paper-vignette",
  );
  await expect(page.locator("html")).toHaveAttribute(
    "data-canvas-effect",
    "paper-vignette",
  );
  await themePreset.click();
  await page.getByRole("option", { name: "Spectrum default" }).click();

  const headingScale = page.getByRole("button", { name: "Type scale preset" });
  await headingScale.click();
  await page.getByRole("option", { name: "Compact · 16px / 1.200" }).click();
  await page.getByRole("button", { name: "Save local draft" }).click();
  await page.reload();
  await expect(headingScale).toContainText("Compact · 16px / 1.200");

  await page.getByRole("button", { name: "Apply to site" }).click();
  await expect(page.getByText("Custom browser theme active")).toBeVisible();
  await expect.poll(() =>
    page.evaluate(() => ({
      state: document.documentElement.dataset.customTheme,
      h1: document.documentElement.style.getPropertyValue("--site-h1-size"),
    })),
  ).toEqual({
    state: "active",
    h1: "clamp(2.074rem, 6vw, 2.488rem)",
  });

  await page.goto("/portfolio");
  await expect.poll(() =>
    page.evaluate(() => document.documentElement.dataset.customTheme),
  ).toBe("active");

  await page.goto("/design-system/theme-lab");
  await page.getByRole("button", { name: "Restore site default" }).click();
  await expect(page.getByText("MyKMHub default")).toBeVisible();
  await expect.poll(() =>
    page.evaluate(() =>
      window.localStorage.getItem("mykmhub-active-site-theme"),
    ),
  ).toBeNull();

  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(headingScale).toContainText("Balanced · 17px / 1.250");
  await page.goto("/portfolio");
  await expect.poll(() =>
    page.evaluate(() => document.documentElement.dataset.customTheme),
  ).toBeUndefined();
});

test("Theme Lab remains contained on a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/design-system/theme-lab");
  const dimensions = await page.evaluate(() => ({
    pageWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
});

test("Knowledge remains contained with its published navigation item", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/knowledge/building-mykmhub-ai-assisted-development");
  await expect(page.getByRole("link", { name: "Knowledge", exact: true })).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    pageWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
});

test("Toolkit exposes connected leadership pathways", async ({ page }) => {
  await page.goto("/toolkit");
  await expect(
    page.getByRole("heading", {
      name: "Start with the work you need to move forward",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Use the evidence-first synthesis method" }),
  ).toHaveAttribute("href", "/methods/evidence-first-synthesis");
  await expect(
    page.getByRole("link", { name: "Open the accessible form generator" }),
  ).toHaveAttribute("href", "/tools/accessible-form-requirements-generator");
});

test("Toolkit discovery searches shared content metadata", async ({ page }) => {
  await page.goto("/toolkit");

  const search = page.getByRole("searchbox", { name: "Search resources" });
  await search.fill("accessibility");

  await expect(page.getByText(/\d+ resources? found/)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Accessibility governance baseline" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Navy KPI Dashboard" }),
  ).toBeHidden();

  await search.fill("a phrase with no matching resource");
  await expect(
    page.getByRole("heading", { name: "No matching resources" }),
  ).toBeVisible();
  await expect(page.getByText("0 resources found")).toBeVisible();
});

test("About explains the public site and its future boundary", async ({
  page,
}) => {
  await page.goto("/about");
  await expect(
    page.getByRole("heading", { name: "A working resource, not just a portfolio" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Public foundation, deliberately evolving",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Use the HCD Director Toolkit" }),
  ).toHaveAttribute("href", "/toolkit");
});

test("HCD operating model provides a usable governance baseline", async ({
  page,
}) => {
  await page.goto("/frameworks/hcd-operating-model-baseline");
  await expect(
    page.getByRole("heading", { name: "Seven capabilities that must connect" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Create a minimum operating agreement" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Questions for a Director-level review" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "HCD Director Toolkit",
    }),
  ).toHaveAttribute("href", "/toolkit");
});

test("accessibility governance baseline defines accountable lifecycle controls", async ({
  page,
}) => {
  await page.goto("/frameworks/accessibility-governance-baseline");
  await expect(
    page.getByRole("heading", {
      name: "Define a commitment teams can act on",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Govern accessibility across the lifecycle",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Do not let exceptions become silent policy",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "HCD delivery checkpoints" }),
  ).toHaveAttribute("href", "/patterns/hcd-delivery-checkpoints");
});

test("accessibility journey connects governance, tool, and case-study evidence", async ({
  page,
}) => {
  await page.goto("/frameworks/accessibility-governance-baseline");
  await expect(
    page.getByRole("link", {
      name: "Accessible Form Component & UX Requirements Generator",
    }),
  ).toHaveAttribute(
    "href",
    "/tools/accessible-form-requirements-generator",
  );

  await page.goto("/tools/accessible-form-requirements-generator");
  await expect(
    page.locator(
      'a[href="/case-studies/accessible-form-component-and-ux-requirements-generator"]',
    ),
  ).toHaveText("Accessible Form Component & UX Requirements Generator");

  await page.goto(
    "/case-studies/accessible-form-component-and-ux-requirements-generator",
  );
  await expect(
    page.locator(
      '.related-content a[href="/tools/accessible-form-requirements-generator"]',
    ),
  ).toHaveText("Accessible Form Component & UX Requirements Generator");
});

test("HCD intake pattern provides transparent triage and routing", async ({
  page,
}) => {
  await page.goto("/patterns/hcd-engagement-intake-triage");
  await expect(
    page.getByRole("heading", { name: "Capture a minimum intake record" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Compare demand across six dimensions" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "End triage with an explicit outcome" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "HCD operating model baseline" }),
  ).toHaveAttribute("href", "/frameworks/hcd-operating-model-baseline");
});

test("HCD delivery checkpoints connect evidence to release and learning", async ({
  page,
}) => {
  await page.goto("/patterns/hcd-delivery-checkpoints");
  await expect(
    page.getByRole("heading", { name: "Establish a minimum delivery contract" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Use six connected checkpoints" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Make exceptions explicit and temporary",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "HCD decision and evidence record" }),
  ).toHaveAttribute("href", "/templates/hcd-decision-evidence-record");
});

test("HCD decision record exposes a reusable accessible template", async ({
  page,
}) => {
  await page.goto("/templates/hcd-decision-evidence-record");
  await expect(
    page.getByRole("heading", { name: "Record six connected parts" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Copy Markdown template" }),
  ).toBeVisible();
  await expect(page.locator(".template-code")).toContainText(
    "## Decision and rationale",
  );
  await expect(
    page.getByRole("heading", {
      name: "Quality checks before closing the record",
    }),
  ).toBeVisible();
});

test("HCD measurement plan separates activity from validated outcomes", async ({
  page,
}) => {
  await page.goto("/templates/hcd-outcome-measurement-plan");
  await expect(
    page.getByRole("heading", {
      name: "Build an outcome chain before selecting metrics",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Use six dimensions without forcing every metric",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Copy Markdown template" }),
  ).toBeVisible();
  await expect(page.locator(".template-code")).toContainText(
    "## Balanced measures",
  );
});

test("HCD operating agreement exposes a copy-ready governed artifact", async ({
  page,
}) => {
  await page.goto("/templates/hcd-operating-agreement");
  await expect(
    page.getByRole("heading", {
      name: "Build it with the people who must act on it",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Connect seven operating sections" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Copy Markdown template" }),
  ).toBeVisible();
  await expect(page.locator(".template-code")).toContainText(
    "## Accessibility and responsible practice",
  );
});

test("HCD research plan connects inclusive evidence to a decision handoff", async ({
  page,
}) => {
  await page.goto("/templates/hcd-research-evidence-plan");
  await expect(
    page.getByRole("heading", { name: "Define what the evidence must change" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Plan participation without treating access as an exception",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Copy Markdown template" }),
  ).toBeVisible();
  await expect(page.locator(".template-code")).toContainText(
    "## Privacy, safety, and stewardship",
  );
  await expect(
    page.getByRole("link", { name: "Evidence-first Synthesis" }),
  ).toHaveAttribute("href", "/methods/evidence-first-synthesis");
});

test("HCD operating-model review turns evidence into bounded improvements", async ({
  page,
}) => {
  await page.goto("/templates/hcd-operating-model-review");
  await expect(
    page.getByRole("heading", {
      name: "Review five areas as one operating system",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Look for conditions, not maturity theater",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Copy Markdown template" }),
  ).toBeVisible();
  await expect(page.locator(".template-code")).toContainText(
    "## Improvement decisions",
  );
  await expect(
    page.getByRole("link", { name: "Minimum HCD operating agreement" }),
  ).toHaveAttribute("href", "/templates/hcd-operating-agreement");
});

test("tool directory exposes status and verification context", async ({
  page,
}) => {
  await page.goto("/tools");
  const row = page.getByRole("row", {
    name: "Evidence Traceability Matrix Builder HCD research synthesis and team alignment",
    exact: false,
  });
  await expect(row).toContainText("Working proof of concept");
  await expect(row).toContainText("Jul 28, 2026");
});

test("tool table scrolls within its region without widening the mobile page", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/tools");

  const dimensions = await page.evaluate(() => {
    const region = document.querySelector<HTMLElement>(".tool-directory");
    return {
      pageWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      regionWidth: region?.clientWidth ?? 0,
      regionScrollWidth: region?.scrollWidth ?? 0,
    };
  });

  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
  expect(dimensions.regionScrollWidth).toBeGreaterThan(dimensions.regionWidth);
});

test("case study identifies its shared effort", async ({ page }) => {
  await page.goto("/case-studies/scaling-hcd-through-ai");
  await expect(
    page.getByRole("heading", {
      name: "Navy HR modernization through human-centered design",
    }),
  ).toBeVisible();
});

test("portfolio lists both perspectives on the Navy modernization effort", async ({
  page,
}) => {
  await page.goto("/portfolio");
  await expect(
    page.getByRole("heading", {
      name: "Scaling Automated HCD in Navy HR Modernization",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Scaling HCD Through AI: Transforming Research Synthesis into Strategic Decision Support",
    }),
  ).toBeVisible();
});

test("portfolio orders case studies from newest to oldest", async ({ page }) => {
  await page.goto("/portfolio");
  const titles = await page.locator(".portfolio-card h2").allTextContents();
  expect(titles).toEqual([
    "AI Image Creation Wizard",
    "Navy KPI Dashboard",
    "Accessible Form Component & UX Requirements Generator",
    "Scaling Automated HCD in Navy HR Modernization",
    "Scaling HCD Through AI: Transforming Research Synthesis into Strategic Decision Support",
    "DOJ Application Redesign for Accessibility and Usability",
    "March for Science Site Redesign",
    "RAVeN Personal Knowledge Management System",
  ]);
});

test("DOJ redesign case study preserves its three original comparison figures", async ({
  page,
}) => {
  await page.goto("/case-studies/doj-site-redesign-accessibility-usability");
  await expect(
    page.getByRole("heading", {
      name: "DOJ Application Redesign for Accessibility and Usability",
    }),
  ).toBeVisible();
  await expect(page.locator("figure")).toHaveCount(3);

  const brokenImages = await page.evaluate(
    () =>
      Array.from(document.images).filter(
        (image) => image.complete && image.naturalWidth === 0,
      ).length,
  );
  expect(brokenImages).toBe(0);
});

test("March for Science case study preserves its four original design figures", async ({
  page,
}) => {
  await page.goto("/case-studies/march-for-science-site-redesign");
  await expect(
    page.getByRole("heading", { name: "March for Science Site Redesign" }),
  ).toBeVisible();
  await expect(page.locator("figure")).toHaveCount(4);
  await expect(
    page.getByRole("heading", {
      name: "A one-stop source for current news and reusable resources",
    }),
  ).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    brokenImages: Array.from(document.images).filter(
      (image) => image.complete && image.naturalWidth === 0,
    ).length,
    pageWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.brokenImages).toBe(0);
  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
});

test("Navy KPI Dashboard identifies its values as illustrative concept data", async ({
  page,
}) => {
  await page.goto("/case-studies/navy-kpi-dashboard");
  await expect(
    page.getByRole("heading", { name: "Navy KPI Dashboard" }),
  ).toBeVisible();
  await expect(page.locator("figure")).toHaveCount(1);
  await expect(
    page.getByText(
      "The values demonstrate the proposed information model; they are not presented as verified operational results.",
      { exact: false },
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "A concept requiring operational and accessibility validation",
    }),
  ).toBeVisible();

  const brokenImages = await page.evaluate(
    () =>
      Array.from(document.images).filter(
        (image) => image.complete && image.naturalWidth === 0,
      ).length,
  );
  expect(brokenImages).toBe(0);
});

test("personal knowledge system uses the corrected 2008 date and preserves three figures", async ({
  page,
}) => {
  await page.goto("/case-studies/personal-knowledge-management-system");
  await expect(
    page.getByRole("heading", {
      name: "RAVeN Personal Knowledge Management System",
    }),
  ).toBeVisible();
  await expect(page.getByText("Case study · 2008")).toBeVisible();
  await expect(page.locator("figure")).toHaveCount(3);
  await expect(
    page.getByRole("heading", {
      name: "A private MyKMHub personal knowledge workspace",
    }),
  ).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    brokenImages: Array.from(document.images).filter(
      (image) => image.complete && image.naturalWidth === 0,
    ).length,
    pageWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.brokenImages).toBe(0);
  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
});

test("Navy modernization case study contains its media and contained data table", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(
    "/case-studies/scaling-automated-hcd-in-navy-hr-modernization",
  );

  await expect(page.locator("figure")).toHaveCount(6);
  const dimensions = await page.evaluate(() => {
    const region = document.querySelector<HTMLElement>(
      ".portfolio-data-table",
    );
    return {
      pageWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      regionWidth: region?.clientWidth ?? 0,
      regionScrollWidth: region?.scrollWidth ?? 0,
      brokenImages: Array.from(document.images).filter(
        (image) => image.complete && image.naturalWidth === 0,
      ).length,
    };
  });

  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
  expect(dimensions.regionScrollWidth).toBeGreaterThan(dimensions.regionWidth);
  expect(dimensions.brokenImages).toBe(0);
});

test("accessible form generator creates a preview and semantic output", async ({
  page,
}) => {
  await page.goto("/tools/accessible-form-requirements-generator");
  await page.getByRole("button", { name: "Generate pattern" }).click();

  await expect(
    page.getByRole("heading", { name: "Live component preview" }),
  ).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Generated HTML" }),
  ).toContainText('label for="generated-text"');

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("form generator omits required markup and wording when Required is off", async ({
  page,
}) => {
  await page.goto("/tools/accessible-form-requirements-generator");
  await page.getByRole("switch", { name: "Required" }).press("Space");
  await page.getByRole("button", { name: "Generate pattern" }).click();

  const instructions = page.getByRole("textbox", {
    name: "Generated instruction set",
  });
  const html = page.getByRole("textbox", { name: "Generated HTML" });
  await expect(instructions).toContainText(
    "Do not add required, aria-required, or a required indicator",
  );
  await expect(instructions).not.toContainText("(required)");
  await expect(html).not.toContainText(" required");
});

test("form generator populates combobox suggestions in preview and copied HTML", async ({
  page,
}) => {
  await page.goto("/tools/accessible-form-requirements-generator");
  await page
    .getByRole("button", { name: "Text input Form component" })
    .click();
  await page
    .getByRole("option", { name: "Combobox or autocomplete" })
    .click();
  await page.getByRole("button", { name: "Generate pattern" }).click();

  await expect(page.locator("datalist option")).toHaveCount(3);
  const html = page.getByRole("textbox", { name: "Generated HTML" });
  await expect(html).toContainText('list="generated-combobox-options"');
  await expect(html).toContainText('<option value="Email"></option>');
});

test("form generator exports JavaScript that matches an interactive switch", async ({
  page,
}) => {
  await page.goto("/tools/accessible-form-requirements-generator");
  await page
    .getByRole("button", { name: "Text input Form component" })
    .click();
  await page.getByRole("option", { name: "Switch or toggle" }).click();
  await page.getByRole("button", { name: "Generate pattern" }).click();

  const javascript = page.getByRole("textbox", {
    name: "Generated JavaScript",
  });
  await expect(javascript).toContainText('setAttribute("aria-checked"');
  await expect(javascript).toContainText(
    'control.textContent = nextState ? "On" : "Off"',
  );
});

test("AI image prompt architect translates selections and supports manual override", async ({
  page,
}) => {
  await page.goto("/tools/ai-image-prompt-wizard");
  await expect(page.getByRole("heading", {
    level: 1,
    name: "AI Image Prompt Architect & Generator",
  })).toBeVisible();
  await expect(page.getByText("Status: Version 1.0")).toBeVisible();
  await expect(page.getByRole("button", { name: "More description" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Current scope" })).toHaveCount(0);
  await expect(page.getByText("Context", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Prompt architect", { exact: true })).toHaveCount(0);
  await expect(page.getByText(
    "Start with the subject, then disclose only the controls needed for the target engine.",
  )).toHaveCount(0);
  await page.getByRole("textbox", { name: "Primary subject" }).fill(
    "An accessibility researcher",
  );

  const preview = page.getByRole("textbox", { name: "Engine-ready prompt" });
  await expect(preview).toContainText("An accessibility researcher");
  await expect(preview).toContainText("Photography");
  await expect(preview).toContainText("Avoid");
  await expect(
    page.getByRole("radio", { name: "Google Gemini" }),
  ).toBeChecked();
  await expect(
    page.getByRole("textbox", { name: "Google Gemini API key" }),
  ).toHaveAttribute("type", "password");
  const previewOutput = page.getByRole("button", { name: "Preview output" });
  await expect(previewOutput).toContainText("Low · 512");
  await expect(page.getByRole("button", { name: "Resolution" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Preview quality" })).toHaveCount(0);
  await previewOutput.click();
  await page.getByRole("option", { name: "Medium · 1K" }).click();
  await expect(previewOutput).toContainText("Medium · 1K");

  await page
    .getByRole("button", { name: "4. Technical engine parameters" })
    .click();
  await expect(
    page.getByRole("button", { name: "1. Subject and environment" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Parameter breakdown" }),
  ).toBeVisible();

  await page.getByRole("radio", { name: "OpenAI GPT Image" }).press("Space");
  await expect(
    page.getByRole("textbox", { name: "OpenAI API key" }),
  ).toHaveAttribute("type", "password");
  await expect(page.getByRole("textbox", { name: "Google Gemini API key" })).toHaveCount(0);

  await preview.fill("A manually refined image prompt");
  await expect(
    page.getByRole("button", { name: "Restore generated prompt" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Restore generated prompt" }).click();
  await expect(preview).toContainText("An accessibility researcher");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("image generation endpoint requests a key when none is supplied or configured", async ({
  request,
}) => {
  const response = await request.post("/api/tools/ai-image/generate", {
    data: {
      prompt: "A clear accessible diagram",
      aspectRatio: "1:1",
      quality: "low",
    },
  });
  expect(response.status()).toBe(401);
  await expect(response.json()).resolves.toMatchObject({
    error: expect.stringContaining("selected provider"),
  });
});

test("Gemini image generation requests its supported output format and size", async () => {
  const routeSource = await import("node:fs/promises").then(({ readFile }) =>
    readFile("src/app/api/tools/ai-image/generate/route.ts", "utf8"),
  );
  expect(routeSource).toContain('mime_type: "image/jpeg"');
  expect(routeSource).not.toContain('mime_type: "image/png"');
  expect(routeSource).toContain('image_size: resolution');
  expect(routeSource).toContain('["512", "1K", "2K", "4K"]');
  expect(routeSource).not.toContain('"512px"');
  expect(routeSource).toContain('step?.type !== "model_output"');
  expect(routeSource).toContain('content?.type === "image" && content.data');
});

test("AI image provider keys are cached only when session caching is enabled", async ({
  page,
}) => {
  await page.goto("/tools/ai-image-prompt-wizard");
  const keyField = page.getByRole("textbox", { name: "Google Gemini API key" });
  const rememberKeys = page.getByRole("switch", {
    name: "Remember provider API keys for this browser session",
  });

  await keyField.fill("test-session-key");
  await rememberKeys.press("Space");
  await page.reload();
  await expect(keyField).toHaveValue("test-session-key");
  await expect(rememberKeys).toBeChecked();

  await rememberKeys.press("Space");
  await page.reload();
  await expect(keyField).toHaveValue("");
  await expect(rememberKeys).not.toBeChecked();
});

test("AI image prompt wizard does not widen the mobile page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/tools/ai-image-prompt-wizard");

  const dimensions = await page.evaluate(() => ({
    pageWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.pageWidth).toBe(dimensions.clientWidth);
});

test("portfolio project facts use a compact label and value layout", async ({
  page,
}) => {
  await page.goto(
    "/case-studies/scaling-automated-hcd-in-navy-hr-modernization",
  );
  const facts = page.locator(".project-facts");
  await expect(facts).toContainText(
    "ClientU.S. Navy N16 — Personnel and Training",
  );

  const layout = await facts.locator("div").first().evaluate((item) => ({
    display: window.getComputedStyle(item).display,
    alignItems: window.getComputedStyle(item).alignItems,
    padding: window.getComputedStyle(item).padding,
    valueMargin: window.getComputedStyle(
      item.querySelector("dd") as HTMLElement,
    ).margin,
  }));
  expect(layout.display).toBe("flex");
  expect(layout.alignItems).toBe("baseline");
  expect(layout.padding).toBe("0px");
  expect(layout.valueMargin).toBe("0px");
});

test("portfolio effort context has a restrained complete boundary", async ({
  page,
}) => {
  await page.goto(
    "/case-studies/accessible-form-component-and-ux-requirements-generator",
  );
  const border = await page.locator(".effort-context").evaluate((item) => {
    const style = window.getComputedStyle(item);
    return {
      top: style.borderTopWidth,
      right: style.borderRightWidth,
      bottom: style.borderBottomWidth,
      left: style.borderLeftWidth,
      radius: style.borderRadius,
    };
  });
  expect(border).toEqual({
    top: "1px",
    right: "1px",
    bottom: "1px",
    left: "1px",
    radius: "8px",
  });
});

test("404 page is readable and accessible in explicit dark mode", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => {
    window.localStorage.setItem(
      "mykmhub-accessibility-preferences",
      JSON.stringify({
        colorScheme: "dark",
        textSize: "default",
        increasedContrast: false,
        reducedMotion: false,
        underlinedLinks: false,
      }),
    );
  });

  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This page could not be found" }),
  ).toBeVisible();

  const colors = await page.locator("body").evaluate((body) => {
    const style = window.getComputedStyle(body);
    return {
      background: style.backgroundColor,
      text: style.color,
      colorScheme: style.colorScheme,
    };
  });
  expect(colors.colorScheme).toContain("dark");
  expect(colors.background).not.toBe(colors.text);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
