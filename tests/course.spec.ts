import { test, expect } from "@playwright/test";

test("dashboard shows Course", async ({ page }) => {
  await page.goto("https://academade.codeflow.id/dashboard");
  await page.getByRole("link", { name: /^Course$/ }).click();
  await expect(page).toHaveURL(/course/);
});

