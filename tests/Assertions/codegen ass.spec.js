import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Forms$/ }).nth(1).click();
  await page.getByRole('listitem').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Navya');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Shree');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('navya@123');
  await page.getByText('Female').click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543222');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('#dateOfBirthInput').press('Tab');
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Chemistry');
  await page.locator('#state svg').click();
  await page.getByText('Haryana', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Panipat', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Reading').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Chemistry');
  await page.getByRole('button', { name: 'Submit' }).click();})