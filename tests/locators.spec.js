const {test, expect} = require('@playwright/test');


test('Test locators', async({page}) =>
{await page.goto("https://demowebshop.tricentis.com/");    
    const imageText =page.getByAltText('Tricentis Demo Web Shop').click();
   page.getByRole('link', { name: 'Log in' }).click();
   page.pause();
});