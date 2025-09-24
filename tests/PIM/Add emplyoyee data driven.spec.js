import { test, expect } from '@playwright/test';


  const Addemployees = {
      emp1: {
          firstname: "Navya",
          lastname: "Shree"
      },
      emp2: {
          firstname: "Angel",
          lastname: "Priya"
      },
      emp3: {
          firstname: "Namratha",
          lastname: "gowda"
      },
      emp4: {
          firstname: "Gowri",
          lastname: "Shankar"
      }
      
  };
  
  
   for (let EMPAdd in Addemployees) {
  
                                 
      test(`Verify Add employee - ${EMPAdd} `, async ({ page }) => {
  
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.locator("//a[normalize-space(text())='Add Employee']").click()
        await page.getByPlaceholder('First Name').fill(Addemployees[EMPAdd].firstname);
        await page.getByPlaceholder('Last Name').fill(Addemployees[EMPAdd].lastname);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
        await page.locator("//li[contains(.,'Employee List')]").click()

});

   }