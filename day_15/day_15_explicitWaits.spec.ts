// import { test } from "@playwright/test";
// test("test", async({page})=>{
// //   await page.goto("https://www.amazon.com/")
// // //  await page.getByTestId('nav_avod_desktop_topnav').click();
// //  await page.waitForTimeout(20000)
// //  await page.getByTestId('nav_cs_5').waitFor({timeout:10000,state:"detached"})
// // // await page.waitForSelector("xpath/css ",{timeout:10000})

// await page.goto('https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
// await page.locator('//div[@class="bLCLBY nr15la"]').first().click()
// Promise.all(page.waitForNavigation(),
//  page.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').allInnerTexts())
// }
// )

// import { test } from "@playwright/test";
// test("",async({browser})=>{
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.flipkart.com/")
//     await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
//     await page.keyboard.press("Enter")
//     
//     let [page2]=await Promise.all([page.waitForNavigation(),page.locator('//img[@class="MZekss"]').first().click()])

//     console.log(await page.url());
//     console.log(await page2.url());
//     } 

// )

