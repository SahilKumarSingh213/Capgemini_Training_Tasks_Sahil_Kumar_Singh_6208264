// import { test } from "@playwright/test";
// test("testId", async({page})=>{
//   await page.goto("https://practicetestautomation.com/practice-test-login/")
//  await page.getByRole('textbox', { name: 'Username' }).type("student");
// //   await page.getByRole('textbox', { name: 'Username' }).type("student1"); //--> if we use type again it will be written afterthe first fill,not override, also letters are filled one by one
//  await page.getByRole('textbox', { name: 'Password' }).fill("Password123") //--> if we use fill again it will overwrite also what is written inside fill is filled in oneshot
//   await page.getByRole('textbox', { name: 'Password' }).fill("Password1234") //--> if we use fill again it will overwrite also what is written inside fill is filled in oneshot
//  await page.getByRole('button', { name: 'Submit' }).click();
// console.log(await page.getByRole('textbox', { name: 'Username' }).innerText());
// console.log(await page.getByRole('textbox', { name: 'Username' }).innerHTML());
// console.log(await page.getByRole('textbox', { name: 'Username' }).textContent()); all three will not work because it is not stored in DOM(read about it)
// console.log(await page.getByRole('textbox', { name: 'Username' }).inputValue()); 
// console.log(await page.getByRole('textbox', { name: 'Username' }).isVisible()); 
// console.log(await page.getByRole('textbox', { name: 'Username' }).isEnabled()); 
// console.log(await page.getByRole('textbox', { name: 'Username' }).isEditable());  

//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]

// await page.goto("https://www.amazon.in/s?k=shoes&crid=3A74FS2YOETXP&sprefix=shoes%2Caps%2C419&ref=nb_sb_noss_2")
// const a = await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]').all()
// if not working use .nth(64).waitFor()


// console.log(a);


//! some ways to change timeout of assertion 

//? 1.
import { test } from "@playwright/test";
test("testId", async({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/")
 await page.getByRole('textbox', { name: 'Password' }).fill("Password123",{timeout:8000})
}

)

//? 2.
import { test } from "@playwright/test";
test.use({actionTimeout:8000}) //--> it will change the timeout of all the actions in this test to 8 sec, if we use it in config file it will change the timeout of all the actions in all the tests to 8 sec
test("testId", async({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/")
 await page.getByRole('textbox', { name: 'Password' }).fill("Password123")
}
)

//? 3.
import { test } from "@playwright/test";
test("test", async({page})=>{
await page.setDefaultTimeout(8000) //--> it will change the timeout of all the actions in this test to 8 sec, if we use it in config file it will change the timeout of all the actions in all the tests to 8 sec
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.getByRole('textbox', { name: 'Password' }).fill("Password123")
}
)

//? 4. --> for hardcode timeout in assertion
import { test } from "@playwright/test";
test("test", async({page})=>{
await page.waitForTimeout(8000) //--> it will change the timeout of all the actions in this test to 8 sec, if we use it in config file it will change the timeout of all the actions in all the tests to 8 sec
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.getByRole('textbox', { name: 'Password' }).fill("Password123")
}
)