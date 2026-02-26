const { test, expect } = require('@playwright/test');


test(' DatePicker',async ({page }) => {
await page.goto("https://selenium.qabible.in/date-picker.php")
await page.getByRole('link', { name: 'Date Pickers' }).click();
const dateInput = page.locator('[id="single-input-field"]');
await dateInput.click();
await page.keyboard.type('19/11/2027');
await page.locator('[class="active day"]').click();
const actualDate = await dateInput.inputValue();
await page.locator('#button-one').first().click();
 const expectedDate =await page.locator('#message-one').first().textContent();
await expect("Date : "+actualDate).toEqual(expectedDate);
await page.pause();
});