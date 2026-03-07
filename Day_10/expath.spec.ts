// import { test } from "@playwright/test";

// test("ex path", async ({ page }) => {

//   await page.goto("https://practicetestautomation.com/practice-test-login/");

//   await page.locator('/html/body/div/div/section/section/div/div/input[@type="text"]').fill("student");

// });

// import { test } from "@playwright/test";

// test("absolute xpath username", async ({ page }) => {

//   await page.goto("https://practicetestautomation.com/practice-test-login/");

//   await page.locator("xpath=/html/body/div/div/section/section/div/div[1]/input") // ---> indexing
//     .fill("student");

// });


// import { test } from "@playwright/test";

// test("ex path", async ({ page }) => {

//   await page.goto("https://practicetestautomation.com/practice-test-login/");

//   await page.locator('//button[text()="START"]')

// });

import { test } from "@playwright/test";

test("ex path", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator('//div/input[@id="name"]').fill("sahil")

});