const { test, expect } = require('@playwright/test');
const { eventNames } = require('node:cluster');
test('Child', async({browser,page})=>{
await page.goto('https://the-internet.herokuapp.com/windows')
const textContent= page.locator("//h3[text() = 'Opening a new window']");
await expect(textContent).toHaveText("Opening a new window");
await expect(page.locator("//a[text() = 'Elemental Selenium']")).toHaveText("Elemental Selenium");
 



});