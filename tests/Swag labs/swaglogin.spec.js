// @ts-check
import { test, expect } from '@playwright/test';

test('Swaglabloginverification', async ({ page }) => {
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("//input[@placeholder='Username']").fill("standard_user")
await page.locator("//input[@type='password']").fill("secret_sauce")
await page.locator("//input[@value='LOGIN']").click()
await expect (page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
await expect(page.locator("//div[@class='header_label']//div[1]")).toBeVisible
await expect(page.locator("//button[normalize-space(text())='Open Menu']")).toBeVisible
await page.locator("//button[normalize-space(text())='Open Menu']").click()
await page.locator("(//a[@class='bm-item menu-item'])[1]").click()
await (page.locator("//div[normalize-space(text())='Products']")).toBevisible


})