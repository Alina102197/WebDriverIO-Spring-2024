class Signuppage {
  fNameLocator = "input[name=firstname]";
  lNameLocator = "input[name=lastname]";
  mobileOrEmailLocator = "input[name=reg_email__]";
  newPwdLocator = "#password_step_input";

  birthMonthLocator = "#month";
  birthDayLocator = "#day";
  birthYearLocator = "#year";

  femaleGenderLocator = "//label[text()='Female']/following-sibling::input";
  maleGenderLocator = "//label[text()='Male']/following-sibling::input";
  customGenderLocator = "//label[text()='Custom']/following-sibling::input";
  signUpBtnLocator = "button[name='websubmit']";

  async enterFirstName(fName) {
    await $(this.fNameLocator).setValue(fName);
  }

  async enterLastName(lName) {
    await $(this.lNameLocator).setValue(lName);
  }

  async enterMobileOrPhone(mobileOrPhone) {
    await $(this.mobileOrEmailLocator).setValue(mobileOrPhone);
  }

  async enterNewPassword(newPassword) {
    await $(this.newPwdLocator).setValue(newPassword);
  }

  async selectBirthMonth(monthAbbr) {
    const monthDropdown = await $(this.birthMonthLocator);
    await monthDropdown.selectByVisibleText(monthAbbr);
  }

  async selectBirthDay(day) {
    const dayDropdown = await $(this.birthDayLocator);
    await dayDropdown.selectByVisibleText(day);
  }

  async selectBirthYear(year) {
    const yearDropdown = await $(this.birthYearLocator);
    await yearDropdown.selectByVisibleText(year);
  }

  async selectFemaleGender() {
    await $(this.femaleGenderLocator).click();
  }

  async selectMaleGender() {
    await $(this.maleGenderLocator).click();
  }

  async selectCustomGender() {
    await $(this.customGenderLocator).click();
  }

  async clickSignUpBtn() {
    await $(this.signUpBtnLocator).click();
  }
}

module.exports = new Signuppage();
