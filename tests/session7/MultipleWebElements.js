const { expect } = require("chai");

describe("Multiple WebElements", () => {
  /** Verify there are 48 links on the facebook.com:
   * 1. Launch facebook.com
   * 2. Verify the number of links
   */
  it("Verify there are 48 links on the facebook.com", async () => {
    //1. Launch facebook.com:
    await browser.url("https://www.facebook.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //2.Verify the number of links is 48:

    const allLinks = await $$("<a>"); // the length of this array should be 48;
    expect(allLinks.length, "Number of links is not as expected").to.equal(48);
  });

  /**Verify there are 7 navigation-heading on https://classroomessentialsonline.com/ */
  it.only("Verify there are 11 navigation-heading on https://classroomessentialsonline.com/", async () => {
    /**
     * 1. Launch https://classroomessentialsonline.com/
     * 2. Verify there are 11 navigation-heading
     */

    // 1. Launch https://classroomessentialsonline.com/:

    await browser.url("https://classroomessentialsonline.com/");
    await browser.pause();

    // 2. Verify there are 7 navigation-heading:
    const navHeadings = await $$("");
  });

  /**Verify correct nr of otpions/data in month and date dropdown */
  it("Verify correct nr of otpions/data in month and date dropdown", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click create new account button
     * 3. Verify that there are 12 options in the month-dropdown
     * 4. Verify that there are 31 options in the date-dropdown
     */

    //1. Launch facebook.com:
    await browser.url("https://www.facebook.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //2. Click create new account button:
    const createNewAccountBtn = await $("//a[text()='Create new account']");
    await createNewAccountBtn.click();
    await browser.pause(3000);

    // 3. Verify that there are 12 options in the month-dropdown
    const monthOption = await $$("//select[@id='month']//option");
    expect(monthOption.length, "Month options is not equal to 12").to.equal(12);

    // 4. Verify that there are 31 options in the date-dropdown:
    const dateOption = await $$("//select[@id='day']//option");
    expect(
      dateOption.length,
      "Number of option id date-dropdown is not as expected"
    ).to.equal(31);
  });
});
