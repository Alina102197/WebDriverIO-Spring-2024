const { expect } = require("chai");

describe("Dropdown learning", () => {
  it.only("Select June 20, 2000 as birthday ", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click on "Create new account" link
     * 3. Select June 20,2000, as birthday
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

    // 3. Select June 20,2000, as birthday:
    const mothDropdownElement = await $("#month");
    mothDropdownElement.selectByIndex(5);

    await browser.pause(3000);

    const dayDropdownElement = await $("#day");
    dayDropdownElement.selectByAttribute("value", "20");

    await browser.pause(3000);

    const yearDropdownElement = await $("#year");
    yearDropdownElement.selectByVisibleText("2000");

    await browser.pause(3000);
  });
});
