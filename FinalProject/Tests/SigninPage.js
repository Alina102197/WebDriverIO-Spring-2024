const { expect } = require("chai");
const hotelHomepage = require("../Pages/Hotelhomepage");
const signInPage = require("../Pages/Signinpage");
describe("Sign In", () => {
  it("Verify error for invalid sign in credentials", async () => {
    /**
     * 1.Launch hotels.com
     * 2.Click on Sign in, it’s free button:
     * 3.Enter invalid email (abcd@test.com)
     * 4.Click Continue button
     * 5.Enter invalid 6-digit code (123456)
     * 6.Verify error (Invalid code, please try again) is displayed
     */

    // 1.Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();

    //2. Click on Sign in, it’s free button:
    await hotelHomepage.clickSignInItsFreeButton();

    //3. Enter invalid email (abcd@test.com)
    await signInPage.enterEmail("abcd@test.com");

    //4. Click Continue button:
    await signInPage.clickContinueButton();
    await browser.pause(5000);

    //5. Enter invalid 6-digit code (123456)
    await signInPage.enterCode("123456");
    await signInPage.clickContinueButtonAfterCode();
    await browser.pause(5000);

    //6. Verify error (Invalid code, please try again) is displayed:

    expect(
      await signInPage.isInvalidCodeMsgDisplayed(),
      "error (Invalid code, please try again) is NOT displayed"
    ).to.be.true;
  });

  it("Verify RewardsTermsAndCondition and PrivacyStatement link open correct pages", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click Sign in, it’s free button
     * 3. Click on One Key Rewards Terms & Conditions link
     * 4. Verify One Key Terms and Conditions heading is displayed
     * 5. Verify Effective date format is in correct format (expected format: MMMM d, yyyy)
     * 6. Click on Privacy Statement link
     * 7. Verify Privacy Statement heading is displayed
     * 8. Verify Last Updated format is in correct format (expected format: MMMM d, yyyy)
     */

    // 1.Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();

    //2. Click on Sign in, it’s free button:
    await hotelHomepage.clickSignInItsFreeButton();

    //3. Click on One Key Rewards Terms & Conditions link
    await signInPage.clickOneKeyRewardsLink();

    //-> Switch to One Key Rewards Terms & Conditions Window:
    await hotelHomepage.changeWindow("one-key");

    //4. Verify One Key Terms and Conditions heading is displayed
    expect(
      await signInPage.isOneKeyTermsAndConditionsHeadingDisplayed(),
      "One Key Terms and Conditions heading is NOT displayed"
    ).to.be.true;
    //5. Verify Effective date format is in correct format (expected format: MM-DD-YYYY):
    expect(await signInPage.verifyOneKeyTermsAndConditionsDateFormat(), "").to
      .be.true;

    //6. Click on Privacy Statement link
    //-> go back to sign in window
    await hotelHomepage.changeWindow("login");
    await signInPage.clickPrivacyStatementLink();
    await hotelHomepage.changeWindow("customer");

    //7. Verify Privacy Statement heading is displayed
    expect(
      await signInPage.isPrivacyStatementHeadingDisplayed(),
      "Privacy Statement heading is NOT displayed"
    ).to.be.true;

    //8. Verify Last Updated format is in correct format (expected format: MMMM d, yyyy)
    // expect(await signInPage.verifyPrivacyStatementDateFormat(), "").to.be.true;
    expect(await signInPage.verifyPrivacyStatementDateFormat(), "").to.be.true;
  });
});
