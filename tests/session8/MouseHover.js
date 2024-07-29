const { expect } = require("chai");

describe("mouseHover Scenarios", () => {
  it("Verify if 'create account' is displayed when mouseHover on sign up on weather.com", async () => {
    /**
     * 1. Launch https://weather.com/
     * 2. move mouse on sign up icon
     * 3. Verify 'create account' is displayed
     */

    //1. Launch weather.com:

    await browser.url("https://weather.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //2. Move mouse on sign up Icon:
    /**
     * a. Find the webElement
     * b. use moveTo() on webElement
     */

    const signUpIcon = await $(
      "//div[@class='AccountLinks--desktopLoginButton--2SZAl']"
    );
    await signUpIcon.moveTo();

    await browser.pause(3000);

    const isCreateAccountDisplayed = await $(
      "//div[text()='Create Account']"
    ).isDisplayed();

    expect(isCreateAccountDisplayed, '"Create account is not displayed"').to.be
      .true;
  });
});
