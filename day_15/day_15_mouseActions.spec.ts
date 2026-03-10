// import { test } from "@playwright/test";
// test("test",async({page})=>{
//     // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    
//     // await page.locator("#btn_a").click({button:"right",clickCount:2,force:true})

//     //  await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")

//     //  await page.locator('//img[@src="/assets/message-hint-nbRmWGWf.png"]').hover();
//     //  await page.waitForTimeout(3000)

//     // await page.locator("#btn_a").hover()
//     // await page.mouse.down()
//     // await page.mouse.up()

//     await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")

//     await page.locator('//div[@class="zoom-button "]').hover()
//     await page.mouse.down()
//     await page.waitForTimeout(3000)


// }

// )



// test("mouse_action",async ({page})=>{
//     // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2');
//     // await page.locator('//button[@id="btn_a"]').click({clickCount:2});   //-->if disabled you can use force:true
//     // await page.locator('//button[@id="btn_a"]').dblclick();
//     //diff bw dblclick and click is that dblclick dont have clickcount

//     // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0');
//     // await page.locator('//div[@id="circle"]').hover();
//     // await page.mouse.down();
//     // await page.waitForTimeout(3000);
//     // await page.mouse.up();


//     // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
//     // await page.locator('//img[@src="/assets/message-hint-nbRmWGWf.png"]').hover();

//     await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4');
//     await page.locator('//input[@id="submit"]').click({force:true});
//     // await page.locator('//input[@id="submit"]').dispatchEvent("click");
//     await page.waitForTimeout(3000);
// })




// import { test } from "@playwright/test";
// test("test",async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3")
// await page.locator('//div[@id="dragElement1"]').click()
// // await page.locator('//div[@id="dragElement1"]').hover()
// await page.mouse.down();
// await page.locator('//div[@id="dropZone1"]').hover()
// await page.mouse.up();
// await page.waitForTimeout(3000)

// // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3")
// await page.locator('//div[@id="dragElement4"]').click()
// // await page.locator('//div[@id="dragElement1"]').hover()
// await page.mouse.down();
// await page.locator('//div[@id="dropZone2"]').hover()
// await page.mouse.up();
// await page.waitForTimeout(3000)
// })

// dispatchEvent

import { test } from "@playwright/test";
test("test",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3")
//  await page.locator('//div[@id="dragElement1"]').click();
//  await page.locator('//div[@id="dragElement1"]').dragTo(page.locator('//div[@id="dropZone2"]'));
//   await page.locator('//div[@id="dragElement2"]').click();
//  await page.locator('//div[@id="dragElement2"]').dragTo(page.locator('//div[@id="dropZone1"]'));
//   await page.locator('//div[@id="dragElement3"]').click();
//  await page.locator('//div[@id="dragElement3"]').dragTo(page.locator('//div[@id="dropZone1"]'));
//   await page.locator('//div[@id="dragElement4"]').click();
//  await page.locator('//div[@id="dragElement4"]').dragTo(page.locator('//div[@id="dropZone2"]'));


await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
await page.locator('//input').scrollIntoViewIfNeeded();
// await page.locator('//input').click()
await page.locator('//input').check()
await page.locator('//button').scrollIntoViewIfNeeded
await page.locator('//button').click()
await page.waitForTimeout(3000)
})