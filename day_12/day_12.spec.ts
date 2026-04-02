//? //span[text()="Women"] --> only used for visible,full text

//? //span[contains(text(),"Wom")] --> can be used for partial texts, also can be used for other attributes

//! in absolute xpath and css we cannot traverse backwards(from child to parent)

//! we can do this using this syntax --> //section[]/child::div/child::h1[] --> only direct child
//                                                      (:: --> scope)

//! or we can use --> //section[]/descendant::h1[] --> both direct and indirect child

// */    preceding-sibling::label --> for previous element in the same scope

// */    following-sibling::input --> for next elements in the same scope

// */    //input[@id="username"]/parent::div/parent::div --> for going to direct parent

// */    //input[@id="username"]/ancestor::div[@id="form"] --> for going to indirect parent


//?  if we are not able to locate using xpath(like path and svg),use name method --> //*[name()="path"]
//? and to uniquely indentify use -->  //*[local-name()="svg" and contains(@viewbox,....)]


import {test} from "@playwright/test"

test("click",async ({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Phones");
    await page.keyboard.press("Enter");
    await page.locator('//div[@id="p_n_g-1003517064111/36816607011"]/descendant::a[@aria-label="Apply Android 14 filter to narrow results"]/descendant::span[@class="a-size-base a-color-base"]').click();
    await page.screenshot({path:'screenshot/screenshot.png'})
    
}
)
