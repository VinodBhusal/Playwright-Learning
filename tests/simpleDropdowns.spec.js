const { test, expect } = require('@playwright/test');


test(' Text', async ({page }) => {
await page.goto("https://vinothqaacademy.com/drop-down/");
//page.pause();
const dropdownText=page.locator("//h2[text() = 'Simple Dropdown']")
await expect(dropdownText).toHaveText('Simple Dropdown');

//await page.locator(".select2-selection__rendered").click();

const simpleDropdown = page.locator('span.select2-selection__rendered',{ hasText: 'Choose A City' });
await simpleDropdown.click();

await page.locator("li.select2-results__option",{ hasText: 'Mumbai' }).click();
//console.log(listOfDropdowns);
//await page.locator(listOfDropdowns,{ hasText: 'Mumbai' }).click();


await page.pause();

});