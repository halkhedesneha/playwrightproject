import { LoginPage } from "./LoginPage"

class POManager
{
    constructor(page)
    {
        this.page=page
        this.homepage=new HomePage()
        this.registerpage=new RegistrationPage(this.page)
        this.loginpage =new LoginPage()
    }
    getHomePage()
    {
        return this.homepage
    }
    getRegistrationPage()
    {
        return this.registerpage
    }
    getLoginPage()
    {
        return this.loginpage
    }

}