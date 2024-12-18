const { expect } = require("chai");
const moment = require("moment");

class Signinpage {
  emailLocator = "#loginFormEmailInput";
  continueButtonLocator = "#loginFormSubmitButton";
  codeInputLocator = "#verifyOtpFormCodeInput";
  errorCodeInputLocator = "#verifyOtpFormCodeInput-error";
  continueButtonAfterCodeLocator = "#verifyOtpFormSubmitButton";
  invalidCodeMsgLocator = "//div[contains(text(),'Invalid code')]";

  oneKeyRewardsLinkLocator = "#rewardsLoginLink";
  oneKeyTermsAndConditionsHeading =
    "//h1[text()='One Key Terms and Conditions']";
  oneKeyRewardsDateLocator = "//p[contains(text(),'Effective from')]";

  privacyStatementLinkLocator = "#privacyLoginLink";
  privacyStatementHeadingLocator = "//div[@class='singleColumn ']/child::h2";
  privacyStatementDateLocator = "//p[contains(text(),'Last Updated')]";

  async enterEmail(email) {
    await $(this.emailLocator).waitForDisplayed();
    await $(this.emailLocator).setValue(email);
  }

  async clickContinueButton() {
    await $(this.continueButtonLocator).waitForClickable();
    await $(this.continueButtonLocator).click();
  }

  async enterCode(code) {
    await $(this.codeInputLocator).waitForDisplayed();
    await $(this.codeInputLocator).setValue(code);
  }

  async clickContinueButtonAfterCode() {
    await $(this.continueButtonAfterCodeLocator).waitForClickable();
    await $(this.continueButtonAfterCodeLocator).click();
  }

  async isInvalidCodeMsgDisplayed() {
    await browser.pause(5000);
    return await $(this.invalidCodeMsgLocator).isDisplayed();
  }

  async clickOneKeyRewardsLink() {
    await $(this.oneKeyRewardsLinkLocator).waitForClickable();
    await $(this.oneKeyRewardsLinkLocator).click();
  }

  async isOneKeyTermsAndConditionsHeadingDisplayed() {
    await $(this.oneKeyTermsAndConditionsHeading).waitForDisplayed();
    return await $(this.oneKeyTermsAndConditionsHeading).isDisplayed();
  }

  async clickPrivacyStatementLink() {
    await $(this.privacyStatementLinkLocator).waitForClickable();
    await $(this.privacyStatementLinkLocator).click();
  }

  async isPrivacyStatementHeadingDisplayed() {
    await $(this.privacyStatementHeadingLocator).waitForDisplayed();
    return await $(this.privacyStatementHeadingLocator).isDisplayed();
  }

  async verifyPrivacyStatementDateFormat() {
    // const correctFormat = moment().format("MMMM DD, YYYY");
    const currentDateText = await $(this.privacyStatementDateLocator).getText();
    const currentDate = currentDateText.split("Updated: ");
    console.log(currentDate);
    console.log(currentDate[1]);
    const lastUpdatedDate = currentDate[1];
    const regex =
      /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/;
    return regex.test(lastUpdatedDate);
  }

  async verifyOneKeyTermsAndConditionsDateFormat() {
    const currentDateText = await $(this.oneKeyRewardsDateLocator).getText();
    const extractCurrentDate = currentDateText.split("from ");
    const currentDate = extractCurrentDate[1];
    console.log(currentDate);
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(currentDate);
  }
}

module.exports = new Signinpage();
