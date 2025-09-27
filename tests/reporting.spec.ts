import { test, expect } from "@playwright/test";

test("dashboard shows Reporting", async ({ page }) => {
  await page.goto("/dashboard");
  await page.getByRole("link", { name: /^Reporting$/ }).click();
  await expect(page).toHaveURL(/reporting/);
});
