const { expect } = require("chai");

describe("Multiple webElements", () => {
  it("Verify there are more than 40 links on the facebook.com", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Verify there are more than 40-links
     */

    //1. Launch facebook.com :
    await browser.url("https://www.facebook.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //Verify there are more than 40-links:
    const nrofLinks = await $$("<a>");
    expect(nrofLinks.length > 40, "The nr of links is not as expected").to.be
      .true;
  });

  it.only("Verify number of options in Church Chairs is equals to 7", async () => {
    /**
     *1. Launch https://classroomessentialsonline.com/  
      2. Move mouse to Church Chairs
      3. Verify there are 6-options in Church Chairs
     */

    //1. Launch https://classroomessentialsonline.com/  :
    await browser.url("https://classroomessentialsonline.com/ ");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //2. Move mouse to Church
    const churchOption = await $("//a[text()='Church']");
    await churchOption.moveTo();
    await browser.pause(3000);

    //Verify there are 4-options in Church stack Chairs:
  });
});
