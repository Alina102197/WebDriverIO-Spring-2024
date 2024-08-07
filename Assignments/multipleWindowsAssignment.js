const { expect } = require("chai");

describe("Multiple windows", () => {
  it("Verify user can open multiple links from facebook homepage", async () => {
    /**
         *  1. Launch facebook.com  
            2. Click Meta Pay
            3. Click Meta Store
            4. Click Instagram
            5. Click Meta AI
            6. Close all tabs except Instagram
            7. Click 'sign up' on Instagram
            8. Verify "Have an account? Log in" is displayed
         */

    //1. Launch facebook.com :

    await browser.url("https://www.facebook.com/");
    await browser.pause(3000);

    //2. Click Meta Pay:

    await $("=Meta Pay").click();
    await browser.pause(3000);

    //3. Click Meta Store:

    await $("=Meta Store").click();
    await browser.pause(3000);

    //4. Click Instagram:

    await $("=Instagram").click();
    await browser.pause(3000);

    //5. Click Meta AI:

    await $("=Meta AI").click();
    await browser.pause(3000);

    //6. Close all tabs except Instagram

    //7. Click 'sign up' on Instagram

    const allHandles = await browser.getWindowHandles();

    for (const handle of allHandles) {
      await browser.switchToWindow(handle);
      const title = await browser.getTitle();
      console.log(title);
      if (title.localeCompare("Instagram") !== 0) {
        await browser.closeWindow();
      }
    }

    const instagramHandle = await browser.getWindowHandles(); ///will print an array. eg: instagramHandle = ['111']
    await browser.switchToWindow(instagramHandle[0]);

    console.log(await browser.getUrl()); // just to see that we are on the right window

    await browser.pause(3000);

    await $("//span[text()='Sign up']").click();
    await browser.pause(3000);

    //8. Verify "Have an account? Log in" is displayed

    const haveAnAccount = await $("//p[@class='_ab25']");
    expect(
      await haveAnAccount.isDisplayed(),
      '"Have an account? Log in" is NOT displayed'
    ).to.be.true;

    await browser.pause(3000);
  });
});
