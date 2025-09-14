import { test, expect } from '@playwright/test';

test('Handle Dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("(//select[@class='form-control'])[1]").selectOption({label:'India'})
    
})