var loginPage = function () {

    const signInButton = $("button[type=submit]");
    const emailTextfield = $("#loginEmail");
    const passwordTextfield = $("input[name='password']");

    this.get = async function () {
        await browser.get("http://someUrl/login");
    };

    this.enterEmail = async function (email) {
        return await emailTextfield.sendKeys(email);
    };

    this.enterPassword = async function (password) {
        return await passwordTextfield.sendKeys(password);
    };

    this.clickSignInButton = async function () {
        return await signInButton.click();
    };

    this.login = async function (email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignInButton();
        return this;
    };
};
module.exports = new loginPage();