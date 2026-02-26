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

test('3rd testCase', async({browser,page})=>{
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
await page.locator(".login-button").click();

await page.locator('.list li a').nth(3).click();


// all gives the list of webelements
 const listofClothes= await page.locator('.product-title a').all();

// gives the text of all item list
const listofTex= await page.locator('.product-title a').allTextContents();
console.log(listofTex);
console.log(listofClothes.length);

//   for (const vinod of listofClothes) {
//         if (await vinod.textContent() === 'Blue Jeans') {
//             await vinod.click();
//             break;
//         }
//     }
    //wait for all api call in network tab to complete 
    await page.waitForLoadState('networkidle');

     //another way without use of forloop
   await page.locator('.product-title a').filter({hasText:'Blue Jeans'}).click();

const title=  page.locator('[itemprop="description"] p');
console.log(title.textContent());

 await expect(title).toHaveText('Stylish Jeans');

//await page.pause();
});
