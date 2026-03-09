// import { test,expect } from "@playwright/test";

// test("assertion",async({page}) =>{
    // await page.goto("https://www.amazon.in/")
// await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toBeAttached() //--> it will check if the element is in the DOM or not, if it is not in the DOM it will throw an error, if it is in the DOM but not visible it will not throw an error
// await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toBeVisible() //--> it will check if the element is visible or not, if it is not visible it will throw an error, if it is visible it will not throw an error
// await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toBeEnabled() //--> it will check if the element is enabled or not, if it is not enabled it will throw an error, if it is enabled it will not throw an error
// await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toBeEditable() //--> it will check if the element is editable or not, if it is not editable it will throw an error, if it is editable it will not throw an error  
// await expect(page).toHaveScreenshot() //--> it will check if the element has the attribute name with the value field-keywords or not, if it has the attribute with the value it will not throw an error, if it does not have the attribute with the value it will throw an error 
// const value = 'Sahil.K.Singh';
// expect(value).toContain('.');
// const value2 = [1, 2, 3];
// expect(value2).toContain(2);
// const locator = page.locator('//h2//span').first();
// await expect(locator).toContainText('55');

// change expect and assertions timeout in config from 5sec to 10 sec, also see acionTimeout in use block
// --> agar dono action aur assertion me timout de diya to slower timeout will work, agar action me 10 sec aur assertion me 5 sec diya to 10 sec ka timeout work karega, agar action me 5 sec aur assertion me 10 sec diya to 10 sec ka timeout work karega, agar dono me 5 sec diya to 5 sec ka timeout work karega, agar dono me 10 sec diya to 10 sec ka timeout work karega

// await page.locator('sahil').click()

// const value = 0;
// expect(value).not.toEqual(0);


// Make a few checks that will not stop the test when failed...
// await page.goto("https://www.amazon.in/")

// const locator = page.locator('//h2[@class="a-color-base headline truncate-2line"]').first().innerText
// expect.soft(locator).toBe('Joh');
// expect.soft(locator).toBe('3');

// // ... and continue the test to check more things.
// expect.soft(locator).toBe('a-color-base headline truncate-2line');

// })
