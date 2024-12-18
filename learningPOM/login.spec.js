const { expect } = require("chai");

describe("Learning POM", () => {
  it("Login into internet", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");

    const loginElement = await $("#username").setValue("tomsmith");

    const passElement = await $("#password").setValue("SuperSecretPassword!");

    const loginBtnElement = await $("//input[@id='username']").click();

    const loggedInDisplayed = await $("#flash").isDisplayed();

    expect(loggedInDisplayed, "You did not log in").to.be.true;
  });
});
