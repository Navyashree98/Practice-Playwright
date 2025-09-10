import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//log in url
    await page.locator("//input[@placeholder='Username']").fill ("Admin") //filling username 
    await page.locator("//input[@type='password']").fill ("admin123") //filling password
    await page.locator ("//button[@type='submit']").click() //click the log in button
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator ("//span[text()='PIM']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    await page.locator("//li[contains(.,'Add Employee')]").click()
    await page.locator("//input[@placeholder='First Name']").fill ("navya")
    await page.locator("//input[@placeholder='Middle Name']").fill("p")
    await page.locator("//input[@placeholder='Last Name']").fill ("shree")
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("990019")

    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    await page.locator("//span[contains(.,'Dashboard Hari')]").click()
    await page.locator("//a[normalize-space(text())='Logout']").click()
   



})
// just for reference
