class LoginErrorPage {


    // Locators for web-Elements on the LoginErrorPage (variables)
    loginErrorMsgLocator = '//div[contains(text(), "connected to an account. ")]';


    // functions to interact with the web-Elements on the LoginErrorPage
    async isLoginErrorDisplayed() {
        return await $(this.loginErrorMsgLocator).isDisplayed();
    }


}
module.exports = LoginErrorPage