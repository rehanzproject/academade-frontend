import { test, expect } from "@playwright/test";

test.describe("Profile", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByText("admin").click();
    await page.getByText(/^My Profile$/).click();
  });
  test("dashboard shows Profile", async ({ page }) => {
    await expect(page).toHaveURL(/profile/);
  });

  test("dashboard shows Profile My Course", async ({ page }) => {
    await page.getByText(/Lainnya/).click();
    await expect(page).toHaveURL(/profile\/mycourse/);
  });
});
