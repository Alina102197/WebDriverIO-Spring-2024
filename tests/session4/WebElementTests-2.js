const { expect } = require("chai");

describe("Basic XPath locator strategies", () => {
  it.only("Verify forgot password on messenger takes user to find your account", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click on messenger link
     * 3. Click on forgot your password
     * 4. Verify user lands on "Find your account" page
     */

    //1. Launch facebook.com:

    await browser.url("https://www.facebook.com/");

    await browser.pause(3000);

    // 2. Click on messenger link:

    const messengerLinkElement = await $("//a[@title='Check out Messenger.']");
    await messengerLinkElement.click();

    await browser.pause(3000);

    //3. Click on forgot your password:

    const fypLinkElement = await $("//span[text()='Forgotten your password?']");
    await fypLinkElement.click();

    //4. Verify user lands on "Find your account" page:

    const findYourAccountLinkElement = await $(
      "//span [contains(text(), 'using the Messenger')]"
    );

    const findYourAccountHeaderDisplayed =
      findYourAccountLinkElement.isDisplayed();

    expect(
      findYourAccountHeaderDisplayed,
      "Find your account Header is not displayed"
    ).to.be.true;

    await browser.pause(10000);
  });

  it("Verify empty log in for", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Verify login-email field is enabled
     * 3. Verify login-password field is enabled
     * 4. Verify login-button is enabled
     */

    //1. Launch facebook.com:

    await browser.url("https://www.facebook.com/");

    await browser.pause(3000);

    //2. Verify login-email field is enabled:

    const loginEmailField = $("//input[contains(@data-testid, 'l_email')]");

    const isLoginEMailFieldEnabled = await loginEmailField.isEnabled();

    expect(isLoginEMailFieldEnabled, "Login email field is NOT enabled").to.be
      .true;

    //3. Verify login-password field is enabled:

    const loginPassField = await $('//input[@aria-label="Password"]');

    const isLoginPassFieldEnabled = await loginPassField.isEnabled();

    expect(isLoginPassFieldEnabled, "Login passweord field is NOT enabledd").to
      .be.true;

    //4. Verify login-button is enabled:

    const logInButton = $('//button[contains(text(), "g In")]');

    const isLogInButtonEnabled = await logInButton.isEnabled();

    expect(isLogInButtonEnabled, "Log In button is NOT enabled").to.be.true;
  });
});
