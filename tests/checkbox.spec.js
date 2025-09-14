import { test, expect } from '@playwright/test';

test('Handle checkboxes', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Single checkbox
    await page.locator("(//input[@type='checkbox'])[2]").check();

    expect(await page.locator("(//input[@type='checkbox'])[2]")).toBeChecked();

    await page.locator("(//input[@type='checkbox'])[1]").uncheck();

    expect(await page.locator ("(//input[@type='checkbox'])[1]")).toBeChecked();


    //unselect checkboxes

    await page.locator("(//input[@type='checkbox'])[2]").uncheck()

})










