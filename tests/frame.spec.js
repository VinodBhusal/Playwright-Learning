const { test, expect } = require('@playwright/test');

test('frame', async({page})=>{
await page.goto('https://vinothqaacademy.com/iframe/');

//By using frame name 
const frame =page.frame('employeetable');
await frame.locator("input[placeholder='Name']").fill('Hello Vaibhav')

// By using frame attribute/locator
// const framLocator=await page.frameLocator("input[placeholder='Name']");
// const framLocators =await page.locator("//h3[text() = 'Registration Form']").textContent();
// console.log(framLocators);
// await framLocator.locator("//input[@id='vfb-5']").fill('Vinod');
});