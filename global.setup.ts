import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://academade.codeflow.id');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('input[name="email"]').fill('rehanmaul111@gmail.com');
  await page.locator('input[name="password"]').fill('Rehanm123*');
  await page.getByRole('button', { name: /Login/i }).click();
  await page.waitForURL(/dashboard/);

  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;
