import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PUBLIC_ROUTES = [
  "/",
  "/portfolio",
  "/tools",
  "/tools/evidence-traceability-matrix-builder",
  "/case-studies/scaling-hcd-through-ai",
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
});
