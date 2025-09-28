import { test, expect } from "@playwright/test";

test.describe("Reporting", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByRole("link", { name: /^Reporting$/ }).click();
  });
  test("dashboard shows Reporting", async ({ page }) => {
    await expect(page).toHaveURL(/reporting/);
  });
});
