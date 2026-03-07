import {test} from "@playwright/test"
import { text } from "node:stream/consumers";

test("expath_practice",async({page})=>{
    test.slow();
    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("samsung phones");
    await page.keyboard.press("Enter");
    console.log(await page.locator('//a/h2/span').first().textContent());
    await page.locator('//a/h2/span').nth(1).click();
})
