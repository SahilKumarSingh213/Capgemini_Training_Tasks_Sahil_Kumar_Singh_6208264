import {test} from "@playwright/test"
import example from "./day_20_pom.page"
import fs from "fs"
import path from "path"

let user=fs.readFileSync(path.join(__dirname,"../test data/user.json"));
let userfile=JSON.parse(user);

test("pom",async({page})=>{
   await this.SubmitBtn
    let examplepage=new example(page);
    for(let u of userfile){
        await page.goto(u.url);
        await examplepage.username_method(u.username);
        await examplepage.password_method(u.password);
        await examplepage.submit_method();
        await page.waitForTimeout(1000);
    }
})