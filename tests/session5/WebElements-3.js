const { expect } = require("chai");

describe("Advanced XPath locator strategies", () => {
  it.only("Verify user can select gender on sign up page", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click on "Create new account" link
     * 3. Select "Male" gender
     * 4. Verify male gender is selected
     */

    //1. Launch facebook.com:

    await browser.url("https://www.facebook.com/");

    await browser.pause(3000);

    // 2. Click on "Create new account" link:

    const createNewAccountBtn = await $(
      '//form[@data-testid="royal_login_form"]//a[@data-testid]'
    );

    await createNewAccountBtn.click();
    await browser.pause(3000);

    // 3. Select "Male" gender:

    const selectMaleGender = await $(
      "//label[text()='Male']/following-sibling::input"
    );

    await selectMaleGender.click();
    await browser.pause(3000);

    // 4. Verify male gender is selected:

    const maleGenderAfterClick = await $(
      "//label[text()='Male']/following-sibling::input"
    );
    expect(
      await maleGenderAfterClick.isSelected(),
      "Male gender is not selected"
    ).to.be.true;

    await browser.pause(3000);
  });
});
