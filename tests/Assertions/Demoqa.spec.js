import { test, expect } from '@playwright/test';
 test('Testing for assertions', async ({ page })=> {
await page.goto("https://demoqa.com/")
await page.locator("(//div[contains(@class,'card mt-4')])[2]").click()
await expect(page).toHaveURL("https://demoqa.com/forms")
await page.locator("(//li[@id='item-0']//span)[2]").click()
await page.locator("//input[@placeholder='First Name']").fill("Navya")
await page.locator("//input[@placeholder='Last Name']").fill("shree")
})