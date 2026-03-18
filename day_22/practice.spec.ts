import { test } from "@playwright/test";
test("practice",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("Fastrack Vyb Watches for men")
    await page.getByPlaceholder("Search Amazon.in").press('Enter')
    await page.getByText("₹1,500 - ₹1,900").click()
    
})
