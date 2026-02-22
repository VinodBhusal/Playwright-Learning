const { test, expect, request } = require('@playwright/test');


const loginURL = "https://api.demoblaze.com/login";
const addToCartURL = "https://api.demoblaze.com/addtocart";
const deleteURL = "https://api.demoblaze.com/deleteitem";

test.beforeAll(async () => {
    const apiRequest = await request.newContext();
    const response = await apiRequest.post(loginURL, {
        data: {
            username: "vinodbhusal@gmail.com",
            password: "cXdlcnR5MTIz"
        }
    })

    const Auth_token = (await response.text()).split(":")[1].trim().replace('"', "");
    console.log(Auth_token);

    for (const key in productMap) {
        const cartCall = await apiRequest.post(addToCartURL, {
            data: await cartPayload(productMap[key],key, Auth_token)
        })
    }
  const deleteProduct =await apiRequest.post(deleteURL,{
    data: {id: "fc8f1a60-6756-2aba-49ad-67fdde73438b"}
  })

})
test.only('learn api Intergartion', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
});

async function cartPayload(id, prod_id, cookie) {
    return {
        cookie: cookie,
        flag: true,
        id: id,
        prod_id: prod_id
    }
}
const productMap = {
    1: "9bfecde4-f389-cffa-cbd4-bbe8c19cfd964",
    8: "fc8f1a60-6756-2aba-49ad-67fdde73438b"

}