import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PUBLIC_ROUTES = [
  "/",
  "/portfolio",
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
  await expect(
    page.getByRole("heading", { name: "This is a proof of concept" }),
  ).toBeVisible();
  await expect(page.locator("details.version-notes")).not.toHaveAttribute(
    "open",
    "",
  );
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
  await page.getByRole("textbox", { name: "Primary subject" }).fill(
    "An accessibility researcher",
  );

  const preview = page.getByRole("textbox", { name: "Engine-ready prompt" });
  await expect(preview).toContainText("An accessibility researcher");
  await expect(preview).toContainText("Photography");
  await expect(preview).toContainText("Avoid");

  await page
    .getByRole("button", { name: "4. Technical engine parameters" })
    .click();
  await expect(
    page.getByRole("button", { name: "1. Subject and environment" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Parameter breakdown" }),
  ).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "OpenAI API key" }),
  ).toHaveAttribute("type", "password");

  await page.getByRole("button", { name: "Target engine" }).click();
  await page.getByRole("option", { name: "Google Gemini" }).click();
  await expect(
    page.getByRole("textbox", { name: "Google Gemini API key" }),
  ).toHaveAttribute("type", "password");
  await expect(page.getByRole("textbox", { name: "OpenAI API key" })).toHaveCount(0);

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
