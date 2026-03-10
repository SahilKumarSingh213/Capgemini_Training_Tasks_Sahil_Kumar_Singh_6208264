import { test } from "@playwright/test";

test("test",async({page})=>{
 await page.goto("https://demoapps.qspiders.com/ui")
 await page.locator('//input[@id="name"]').click()
  await page.keyboard.insertText("Sahil Kumar Singh")
  await page.keyboard.press('Tab')
  await page.keyboard.type("Sahil@123")
  await page.keyboard.press('Control+A')
  await page.keyboard.press('Control+C')
  await page.keyboard.press('Tab')
   await page.keyboard.type("Control+V")
   await page.keyboard.press('Enter')
 
   await page.waitForTimeout(3000)

}

)