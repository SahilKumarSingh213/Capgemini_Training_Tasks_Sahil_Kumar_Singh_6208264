import { test } from "@playwright/test";

test("get by methods",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username").fill("student")   // --> checks partial text,true also for User
   // await page.getByLabel("User",{exact:true}).fill("student")  --> now gives false(timeout)
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByRole("button",{name:'Submit'}).click();
    // await page.getByText("Submit").first().click();
    // await page.getByRole("textbox",{name:"username",exact:true}).fill("abcd")
    // await page.getByPlaceholder("Enter your name")
    // await page.getByAltText("DevPlaced Logo")
}
)

// truthy and falsy valsues