// import { test } from "@playwright/test";
//  test("css selector",async({page})=>{
//     await page.goto(`https://www.amazon.in/`)
//     // await page.locator("input#username").fill("student");
//     // await page.locator('[name="username"]').fill("student");
//     await page.locator('#twotabsearchtextbox[type="text"]').fill("watches");
//     // await page.locator("input#password").fill("Password123");
//     // await page.locator("button#submit").click()
//     await page.locator("#nav-search-submit-button").click()
//     // await page.locator("a.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click();
//  }
// )

import { test } from "@playwright/test";
 test("css selector",async({page})=>{
    await page.goto(`https://techbeamers.com/practice-test-login/`)
    await page.locator('#username[type="text"]').fill("testuser");
    await page.locator("input#password").fill("password123");
    await page.locator('button[type="submit"]').click()
 }
)

