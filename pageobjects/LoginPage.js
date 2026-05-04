export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.userName=page.locator("//input[@name='username']")
        this.password=page.locator("//input[@name='password']")
        this.loginButton=page.locatorr("//input[@value='Log In']")
    }

    async loginToApplication(username,password)
{
    await this.username.fill(username)
    await this.username.fill(password)
    await this.username.fill(username)
}


}