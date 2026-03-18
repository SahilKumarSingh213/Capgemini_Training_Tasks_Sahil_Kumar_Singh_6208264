import { test } from "@playwright/test";

test("kabaddi",async({page})=>{

    await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent")
    // let divs = await page.locator('(//div[@class="fixtures-element"])[1]/div').allTextContents()
    let match = await page.locator('(//div[@class="fixt[1]//div[@class="element element1" or @class="element element2" or @class="element element3"]').allTextContents();
    for(let i of match){
        console.log(i);
        console.log("");
    }
})