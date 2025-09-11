import { test, expect } from '@playwright/test';

test('login by codegen', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.locator ("//a[normalize-space(text())='Add Employee']").click();
  await page.locator("//input[@placeholder='First Name']").click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Navya');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('shree');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('PN');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox').nth(4).fill('99065');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});