const { expect } = require("chai");

describe("Advanced XPath locator strategies", () => {
  it("Verify current temp is less than or equals to feel-like temp", async () => {
    // 1. Launch https://www.accuweather.com/
    // 2. Find current temp
    // 3. Verify current-temp is in between 45 and 55

    // 1. Launch https://www.accuweather.com/:
    await browser.url("https://www.accuweather.com/");

    await browser.pause(3000);

    // 2. Verify current-temp is in between 45 and 55:

    const currentTemp = await $("//span[@class='recent-location-temp']"); // webElement
    const currentTemponWeb = await currentTemp.getText();
    const currentTempNumber = parseFloat(currentTemponWeb); // convert the temp into a number

    expect(
      currentTempNumber > 45 && currentTempNumber < 55,
      `current-temp(${currentTemponWeb}) is NOT between 45 and 55`
    ).to.be.true;
  });

  it("Verify error on empty login flow", async () => {
    /**
     * 1. Launch https:www.facebook.com/
     * 2. Click 'Log In' button
     * 3. Verify error msg is displayed
     */

    // 1. Launch https:www.facebook.com/:

    await browser.url("https://www.facebook.com/");
    await browser.pause(3000);

    //Click 'Log In' button:
    const logInBtn = await $("//button[text()='Log In']");

    await logInBtn.click();
    await browser.pause(3000);
    // 3. Verify error msg is displayed:
    const errorMsgDisplayed = $(
      '//div[contains(text(),  " mobile number you entered ")]'
    );
    expect(
      await errorMsgDisplayed.isDisplayed(),
      "Error message is NOT displayed"
    ).to.be.true;

    await browser.pause(3000);
  });

  it.only("Verify the empty messenger login flow", async () => {
    /**
     * 1. Launch https:www.facebook.com/
     * 2. Click on 'Messenger' link
     * 3. Verify 'Keep me signed in' checkbox is NOT selected
     * 4. Click 'Log In' button
     * 5. Verify link -> "Find your account and log in" is displayed
     * 6. Verify 'Continue' button is enabled
     * 7. Verify 'Keep me signed in' checkbox is NOT selected
     * 8. Click 'Keep me signed in' checkbox
     * 9. Verify 'Keep me signed in' checkbox is selected
     */

    //1. Launch https:www.facebook.com/:

    await browser.url("https://www.facebook.com/");

    await browser.maximizeWindow();

    await browser.pause(3000);

    //2. Click on 'Messenger' link:

    const messengerLinkElement = await $("=Messenger");
    await messengerLinkElement.click();

    await browser.pause(3000);

    //3. Verify 'Keep me signed in' checkbox is NOT selected:

    const keepMeSignedCheckbox = await $(
      '//input[@name="persistent"]/following-sibling::span'
    );

    expect(
      await keepMeSignedCheckbox.isSelected(),
      '"Keep me signed in" checkbox is selected'
    ).to.be.false;

    await browser.pause(3000);

    // 4. Click 'Log In' button

    const logInBtn = await $("#loginbutton");
    await logInBtn.click();

    await browser.pause(3000);

    // 5. Verify link -> "Find your account and log in" is displayed

    const findYourAccountAndLogInLink = await $("*=ccount and log in");

    expect(
      await findYourAccountAndLogInLink.isDisplayed(),
      '"Find your account and log in" is displayed'
    ).to.be.true;

    await browser.pause(3000);

    // 6. Verify 'Continue' button is enabled:
    const continueBtn = await $("#loginbutton");

    expect(await continueBtn.isEnabled(), '"Continue" button is NOT enabled').to
      .be.true;

    await browser.pause(3000);

    // 7. Verify 'Keep me signed in' checkbox is NOT selected:

    const keepMeSignedCheckbox1 = await $(
      '//label[@class="uiInputLabelInput"]//input'
    );

    expect(
      await keepMeSignedCheckbox1.isSelected(),
      '"Keep me signed in" checkbox is selected'
    ).to.be.false;

    await browser.pause(3000);

    // 8. Click 'Keep me signed in' checkbox

    await keepMeSignedCheckbox1.click();

    await browser.pause(3000);
    // 9. Verify 'Keep me signed in' checkbox is selected

    const keepMeSignedCheckbox1AfterClick = await $(
      '//label[@class="uiInputLabelInput"]//input'
    );

    expect(
      await keepMeSignedCheckbox1AfterClick.isSelected(),
      '"Keep me signed in" checkbox is NOT selected'
    ).to.be.true;

    await browser.pause(3000);
  });
});
