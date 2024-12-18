const { expect } = require("chai");
const homepage = require("../../session10/Pages/Homepage");
const loginPage = require("../../session10/Pages/Loginpage");

describe("Homepage Testcases", () => {
  it("Verify login fields are enabled", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Verify login email input is enabled
     * 3. Verify login password input is enabled
     * 4. Verify login button is enabled
     */

    await browser.url("https://www.facebook.com/");

    expect(
      await homepage.isLoginEMailEnabled(),
      "Login email field is NOT enabled"
    ).to.be.true;

    expect(
      await homepage.isLoginPasswordEnabled(),
      "Login password field is NOT enabled"
    ).to.be.true;

    expect(await homepage.isLoginButtonEnabled(), "Login button is NOT enabled")
      .to.be.true;
  });

  it.only("Verify error is diplayed for empty login flow", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click login button
     * 3. Verify error is displayed
     */

    // 1. Launch facebook.com:

    await browser.url("https://www.facebook.com/");

    // 2. Click login button:

    await homepage.clickLoginButton();

    // 3. Verify error is displayed

    expect(
      await loginPage.isLoginErrorDisplayed(),
      "Error message is NOT displayed"
    ).to.be.true;
  });
});
