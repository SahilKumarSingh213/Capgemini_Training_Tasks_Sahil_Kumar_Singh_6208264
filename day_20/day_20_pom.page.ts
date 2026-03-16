class example{
    username:string;
    password:string;
    SubmitBtn:any;

    constructor(page){
      this.username=page.locator("#username");
      this.password=page.locator("#password");
      this.SubmitBtn=page.locator("#submit")
    }

    async username_method(name){
        await this.username.fill(name)
    }
    async password_method(pswd){
        await this.password.fill(pswd)
    }
    async submit_method(){
        await this.SubmitBtn.click()
    }

}
export default example