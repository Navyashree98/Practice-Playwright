import { test, expect } from '@playwright/test';

test('Recruitment workflow automation', async ({ page }) => {
  // 1. Navigate to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Enter username
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  // 3. Enter password
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  // 4. Click login
  await page.getByRole('button', { name: 'Login' }).click();

  // 5. Click on Recruitment
  await page.getByRole('link', { name: 'Recruitment' }).click();

  // 6. Click on Candidates
  await page.getByRole('link', { name: 'Candidates' }).click();

});
