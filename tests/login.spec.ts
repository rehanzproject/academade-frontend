import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should display correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Academade/);
  });

  test("navigating to Sign In opens login page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page).toHaveURL(/\/login/);
  });
});

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sign In" }).click();
  });

  test("should show error when email is invalid format", async ({ page }) => {
    await page.locator('input[name="email"]').fill("not-an-email");
    await page.locator('input[name="password"]').fill("somepassword");
    await page.getByRole("button", { name: /Login/i }).click();
    await expect(page.getByRole("alert")).toHaveText(/Incorrect Password\/Email !/i);
  });

  test("should show error when password is wrong", async ({ page }) => {
    await page.locator('input[name="email"]').fill("rehanmaul111@gmail.com");
    await page.locator('input[name="password"]').fill("wrongpassword123");
    await page.getByRole("button", { name: /Login/i }).click();
    await expect(page.getByRole("alert")).toHaveText(/Incorrect Password\/Email !/i);
  });

  test("should allow login with valid credentials", async ({ page }) => {
    await page.locator('input[name="email"]').fill("rehanmaul111@gmail.com");
    await page.locator('input[name="password"]').fill("Rehanm123*");
    await page.getByRole("button", { name: /Login/i }).click();
    await expect(page).toHaveURL(/dashboard/);
  });
});
