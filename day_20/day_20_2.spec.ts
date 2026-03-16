import {test} from "@playwright/test"
import example from "./day_20_2_pom.page"
import fs from "fs"
import path from "path"

let user = fs.readFileSync(path.join(__dirname,"day_20_2.json"));
let userfile = JSON.parse(user);

test("amazon", async ({page}) => {

    let amazon = new example(page)

    await page.goto("https://www.amazon.in")

    await amazon.product_name(userfile.product)
    await amazon.search_btn()
    await amazon.specification()

    const [newpage] = await Promise.all([
        page.waitForEvent('popup'),
        amazon.product_num()
    ])

    await amazon.add_to_cart(newpage)
})
















// import {test} from "@playwright/test"
// import path from "path"
// import fs from "fs"
// import amazon from "../../pom/amazon.spec"

// let productsfile=JSON.parse(fs.readFileSync(path.join(__dirname,"../../testdata/amazon_ete.json")))

// test("amazon_ete",async({page})=>{
//     let amazonweb=new amazon(page);
//     for(let product of productsfile.products){
//         console.log(product);
//         await amazonweb.searchproduct(product);
//         await amazonweb.select10gbram(page);
//         let [newpage]=await Promise.all([page.waitForEvent('popup'),amazonweb.selectproduct(page,3)]) ;
//         await amazonweb.additem(newpage,3)

//     }
// })