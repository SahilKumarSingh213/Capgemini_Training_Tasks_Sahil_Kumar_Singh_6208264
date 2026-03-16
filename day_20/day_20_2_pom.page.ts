class example{
    page:any;
    product:any;
    search:any;

    constructor(page){
      this.page = page;
      this.product = page.locator('#twotabsearchtextbox');
      this.search = page.locator('#nav-search-submit-button');
    }

    async product_name(name){
        await this.product.fill(name)
    }

    async search_btn(){
        await this.search.click()
    }

    async specification(){
        await this.page.locator('//span[text()="10 GB & Above"]').click();
    }

    async product_num(){
        await this.page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').nth(3).click();
    }

async add_to_cart(page){
    await page.locator('#selectQuantity').click();
    await page.locator('(//li[@class="a-dropdown-item a-declarative"])[3]').click();
    await page.locator('[name="submit.add-to-cart"]').last().click();
}
    }

export default example






















// class amazon{
//     searchbox:string;
//     search:any;
//     constructor(page){
//         page.goto('https://www.amazon.in/');
//         this.searchbox=page.locator('#twotabsearchtextbox').first();
//         this.search=page.locator('#nav-search-submit-button');
//     }
//     async searchproduct(product){
//         await this.searchbox.fill(product);
//         await this.search.click();
//     }
//     async select10gbram(page){
//         await page.locator('//span[text()="10 GB & Above"]').click();
//     }
//     async selectproduct(page){
//         await page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').nth(4).click();
//     }
//     async additem(page,num){
//         await page.locator('#selectQuantity').click();
//         await page.locator(`(//li[@class="a-dropdown-item a-declarative"])[${num}]`).click();
//         await page.locator('[name="submit.add-to-cart"]').last().click();
//     }

// }

// export default amazon