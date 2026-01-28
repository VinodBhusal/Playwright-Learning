const {test, expect} = require('@playwright/test');


test('my fisrt test case', async({browser}) =>
{
    const context=await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.kinship.com/");
    
});

test('2nd TestCase', async({browser, page})=>{
await page.goto("https://www.kinship.com/");

console.log(await page.title());

});

test.only('3rd testCase', async({browser,page})=>{
 //open page
await page.goto("https://demowebshop.tricentis.com/");
//Page has a title
await expect(page).toHaveTitle(await page.title());
//Click on login with css locator
const loginLoactor = await page.locator('.ico-login');
await expect(loginLoactor).toBeVisible();
loginLoactor.click()

await page.locator('#Email').fill("vinodbhusal0@gmail.com");
await page.locator('#Password').fill("mypassword");
});