class Homepage {
  // Locators of elements on Homepage

  loginEmailLocator = "#email";
  loginPwdLocator = "#pass";
  loginBtnLocator = "<button>";
  createNewAccountLocator = "=Create new account";

  //Functions to interact with the elements on Homepage:

  async enterLoginEmail(loginEmail) {
    await $(this.loginEmailLocator).setValue(loginEmail);
  }

  async enterLoginPassword(loginPwd) {
    await $(this.loginPwdLocator).setValue(loginPwd);
  }

  async clickLoginButton() {
    await $(this.loginBtnLocator).click();
  }

  async clickCreateNewAccountButton() {
    await $(this.createNewAccountLocator).click();
  }

  async isLoginEmailEnabled() {
    return await $(this.loginEmailLocator).isEnabled();
  }

  async isLoginPasswordEnabled() {
    return await $(this.loginPwdLocator).isEnabled();
  }

  async isLoginButtonEnabled() {
    return await $(this.loginBtnLocator).isEnabled();
  }
}

module.exports = new Homepage();
