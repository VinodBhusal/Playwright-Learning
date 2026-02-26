const { test, expect } = require('@playwright/test')

test('homework', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const innerlocator = await page.frameLocator("[name='frame-top']").frameLocator("[name='frame-middle']");
    const middlename =await innerlocator.locator("#content").textContent();
    console.log(middlename);
})

