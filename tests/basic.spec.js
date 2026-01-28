const {test} = require('@playwright/test');


test('my fisrt test case', async({browser}) =>
{
    const context=await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.kinship.com/");
    
});

test.only('2nd TestCase', async({browser, page})=>{
await page.goto("https://www.kinship.com/");

console.log(await page.title());

}

)
