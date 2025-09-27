import { test, expect } from "@playwright/test";

test.use({ video: "on" }); // or 'retain-on-failure'

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Academade/);
});

test("go to login page", async ({ page }) => {
  await page.goto("/");

  // Click Sign In link
  await page.getByRole("link", { name: "Sign In" }).click();

  // ✅ Expect URL
  await expect(page).toHaveURL(/\/login/);
});

test("email validation - invalid email shows error", async ({ page }) => {
  await page.goto("/");

  // open login
  await page.getByRole("link", { name: "Sign In" }).click();

  // fill invalid email and submit
  const emailInput = page.locator('input[name="email"]'); // change selector to your input
  await emailInput.fill("not-an-email");
  await page.locator('input[name="password"]').fill("somepassword"); // if required
  await page.getByRole("button", { name: /Login/i }).click();
  await expect(page.getByRole("alert")).toHaveText(
    /Incorrect Password\/Email !/i
  );
});

test("email validation - valid email proceeds to dashboard", async ({
  page,
}) => {
  await page.goto("/");

  // open login
  await page.getByRole("link", { name: "Sign In" }).click();

  // fill valid email and submit
  const emailInput = page.locator('input[name="email"]');
  await emailInput.fill("rehanmaul111@gmail.com"); // use test account
  await page.locator('input[name="password"]').fill("Rehanm123*");
  await page.getByRole("button", { name: /Login/ }).click();
  // assert success: url changed or dashboard heading visible
  await expect(page).toHaveURL(/dashboard/);
  // await expect(page.getByRole('heading', { name: /dashboard|welcome/i })).toBeVisible();
});

test("login fails with invalid email", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Sign In" }).click();

  // fill invalid email
  await page.locator('input[name="email"]').fill("not-an-email");
  await page.locator('input[name="password"]').fill("somepassword");
  await page.getByRole("button", { name: /Login/i }).click();

  // expect toast error
  await expect(page.getByRole("alert")).toHaveText(
    /Incorrect Password\/Email !/i
  );
});

test("login fails with invalid password", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Sign In" }).click();

  // fill valid email but wrong password
  await page.locator('input[name="email"]').fill("rehanmaul111@gmail.com");
  await page.locator('input[name="password"]').fill("wrongpassword123");
  await page.getByRole("button", { name: /Login/i }).click();

  // expect toast error
  await expect(page.getByRole("alert")).toHaveText(
    /Incorrect Password\/Email !/i
  );
});

test("login succeeds with valid email and password", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Sign In" }).click();

  // fill valid credentials
  await page.locator('input[name="email"]').fill("rehanmaul111@gmail.com");
  await page.locator('input[name="password"]').fill("Rehanm123*");
  await page.getByRole("button", { name: /Login/i }).click();

  // expect navigation to dashboard
  await expect(page).toHaveURL(/dashboard/);
  // optionally check heading or welcome message
  // await expect(page.getByRole('heading', { name: /dashboard|welcome/i })).toBeVisible();
});
