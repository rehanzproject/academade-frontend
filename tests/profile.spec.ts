import { test, expect } from "@playwright/test";

test("dashboard shows Profile", async ({ page }) => {
  await page.goto("/dashboard");
  await page.getByText("rehanMaulana").click();
  await page.getByText(/^My Profile$/).click();
  await expect(page).toHaveURL(/profile/);
});

test("dashboard shows Profile My Course", async ({ page }) => {
  await page.goto("/dashboard");
  await page.getByText("rehanMaulana").click();
  await page.getByText(/^My Profile$/).click();
  await expect(page).toHaveURL(/profile/);
  await page.getByText(/Lainnya/).click();
  await expect(page).toHaveURL(/profile\/mycourse/);
});
