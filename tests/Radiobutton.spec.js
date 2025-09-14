import { test, expect } from '@playwright/test';

test('Handle Radio button', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Single Radio button
    await page.locator("(//input[@name='gender'])[2]").check();
    expect(await page.locator("(//input[@name='gender'])[2]")).toBeChecked()





})