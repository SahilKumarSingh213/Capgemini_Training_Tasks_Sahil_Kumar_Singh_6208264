
// ! annotation

// ? we are adding some extra label

// **
// skip
// only
// fixme
// fail
// describe
// slow
// sellement*/

// test.skip("test1",async()=>{
//     console.log("test1")
// })


// test.fixme("test2",async()=>{
//     console.log("test2")
// })


// test.slow("test3",async()=>{
//     console.log("test3")
// })


// test.only("test3",async()=>{
//     console.log("test3")
// })


// test("test2",async()=>{
//     test.slow()
//     console.log("test2")
// })


// test.describe("test3", () => {   
//   console.log("test3");          

//   test("A", async ({ page }) => {
//     await page.goto("https://www.google.com/");
//   });

//   test("B", async () => {});

//   test("C", async () => {});
// });



// import { test } from '@playwright/test'; test("test1", async () => { console.log("test1"); }); test("test2", async () => { console.log("test2"); }); test.describe("test3", () => { console.log("test3"); test("A", async ({ page }) => { await page.goto("https://www.google.com/"); }); test("B", async () => {}); test("C", async () => {}); }); test("test4", async () => { console.log("test4"); });


// import { test, expect } from '@playwright/test';

// /* -------------------- test1 -------------------- */
// test("test1", async () => {
//   console.log("test1");
// });

// /* -------------------- test2 -------------------- */
// test("test2", async () => {
//   console.log("test2");
// });

// /* -------------------- describe block -------------------- */
// test.describe("test3", () => {

//   test.beforeAll(() => {
//     console.log("test3 (runs once per worker)");
//   });

//   test("A - open google", async ({ page }) => {
//     await page.goto("https://www.google.com/");
//     await expect(page).toHaveTitle(/Google/);
//   });

//   test("B", async () => {
//     console.log("test B running");
//   });

//   test("C", async () => {
//     console.log("test C running");
//   });
// });

// /* -------------------- multi page test -------------------- */
// test("multi page amazon + flipkart", async ({ browser }) => {

//   const context = await browser.newContext();

//   const page1 = await context.newPage();
//   const page2 = await context.newPage();

//   await page1.goto("https://www.amazon.in/");
//   await page2.goto("https://www.flipkart.com/");
//    //await page2.fill("#yschp","watches")   ---->#yschp is for yahoo ---> different for different browser ----> locator ke bina search
//    //await page2.keyboard.press("Enter")
//   console.log("Both pages opened");

// });

// /* -------------------- test4 -------------------- */
// test("test4", async () => {
//   console.log("test4");
// });

// /* -------------------- test5 -------------------- */
// test("test5", async () => {
//   console.log("test5");
// });


// npx playwright test --project=firefox
// npx playwright test -g "test1"
// npx playwright test tests/annotation.spec.ts --debug 

// npx playwright show-report --port=9999 ----> if show report is not working

