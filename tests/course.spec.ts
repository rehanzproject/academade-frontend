import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Course Creation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByRole("link", { name: /^Course$/ }).click();
    await page.getByText("New Course").first().click();
  });

  // ✅ Positive test
  test("should create course with valid data", async ({ page }) => {
    const filePath = path.resolve("tests/fixtures/sample-thumbnail.png");
    await page.locator("#dropzone-file").setInputFiles(filePath);

    await page.locator('input[name="name"]').fill("Capstone Project 11");
    await page.locator('input[name="price"]').fill("10000");
    await page.locator('input[name="coupon"]').fill("coupon1");

    await page
      .locator("textarea#description")
      .fill("This is a sample course description.");

    await page.getByRole("button", { name: /Upload/i }).click();

    // ✅ Expect success toast
    await expect(page.getByRole("alert")).toHaveText(/course created successfully/i);

    // ✅ Expect redirect
    await expect(page).toHaveURL(/course/);
  });

  // 🚫 Negative test: missing thumbnail
  test("should show error if thumbnail is missing", async ({ page }) => {
    await page.locator('input[name="name"]').fill("Course Without Thumbnail");
    await page.locator('input[name="price"]').fill("5000");
    await page.locator('input[name="coupon"]').fill("couponX");
    await page.locator("textarea#description").fill("Description here");

    await page.getByRole("button", { name: /Upload/i }).click();

    await expect(page.getByRole("alert")).toHaveText(/thumbnail is required/i);
  });

  // 🚫 Negative test: missing course name
  test("should show error if course name is empty", async ({ page }) => {
    const filePath = path.resolve("tests/fixtures/sample-thumbnail.png");
    await page.locator("#dropzone-file").setInputFiles(filePath);

    await page.locator('input[name="price"]').fill("10000");
    await page.locator('input[name="coupon"]').fill("coupon1");
    await page
      .locator("textarea#description")
      .fill("This is a sample course description.");

    await page.getByRole("button", { name: /Upload/i }).click();

    await expect(page.getByRole("alert")).toHaveText(/course name is required/i);
  });

  // 🚫 Negative test: missing description
  test("should show error if description is empty", async ({ page }) => {
    const filePath = path.resolve("tests/fixtures/sample-thumbnail.png");
    await page.locator("#dropzone-file").setInputFiles(filePath);

    await page.locator('input[name="name"]').fill("Course Without Description");
    await page.locator('input[name="price"]').fill("15000");
    await page.locator('input[name="coupon"]').fill("coupon2");

    await page.getByRole("button", { name: /Upload/i }).click();

    await expect(page.getByRole("alert")).toHaveText(/description is required/i);
  });

  // 🚫 Negative test: missing price
  test("should show error if price is empty", async ({ page }) => {
    const filePath = path.resolve("tests/fixtures/sample-thumbnail.png");
    await page.locator("#dropzone-file").setInputFiles(filePath);

    await page.locator('input[name="name"]').fill("Course Without Price");
    await page.locator('input[name="coupon"]').fill("coupon3");
    await page.locator("textarea#description").fill("Sample description");

    await page.getByRole("button", { name: /Upload/i }).click();

    await expect(page.getByRole("alert")).toHaveText(/price is required/i);
  });
});
