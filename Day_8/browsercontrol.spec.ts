import { test } from "@playwright/test";

// test("browser controls",async({page})=>{
//     // let size=await page.viewportSize();
//     // console.log(size);
//     // await page.setViewportSize({width:500,height:500})
//     // console.log(await page.viewportSize());
//     // await page.setViewportSize({width:1280,height:720})
//     // console.log(await page.viewportSize());
//     //?
//     await page.goto("https://www.amazon.com/")
//     console.log( await page.title());
//     console.log( await page.url());

// }
// )


test("browser controls",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    let page2 = await context.newPage()
    await page.goto("https://www.amazon.com/")
    await page2.goto("https://www.flipkart.com/")
    // let time = new Date().getTime()
    // await page.screenshot({path:`tests/${time}.png`})
    // console.log( await page.url());
    console.log(await context.cookies());
    await browser.close()
}
)