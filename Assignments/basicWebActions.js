const { expect } = require("chai");

describe("Basic functions of webDriverIO", () => {
  it("Learning basic functions", async () => {
    // 1. Launch https://www.amazon.com/

    await browser.url("https://www.amazon.com/");

    // 2. Verify page title contains "Spend less. Smile more.":

    const getTitle = await browser.getTitle();

    console.log(getTitle);
    expect(getTitle.includes("Amazon"), 'Page title does NOT contain "Amazon"')
      .to.be.true;

    //3. Launch https://www.hotels.com/ :

    await browser.url("https://www.hotels.com/");

    // 4. Verify current url contains "hotels.com"

    const pageUrl = await browser.getUrl();

    expect(
      pageUrl.includes("hotels.com"),
      'Current url does NOT contain "hotels.com" '
    ).to.be.true;

    //5. go back:

    await browser.back();

    const pageUrl1 = await browser.getUrl();

    //6.Verify current url contains "amazon.com"

    expect(
      pageUrl1.includes("amazon.com"),
      'Current url does NOT contain "amazon.com"'
    ).to.be.true;

    //7.Go Forward:

    await browser.forward();

    //8.  Verify page title contains "Deals & Discounts for Hotel Reservations"
    const pageTitle1 = await browser.getTitle();

    expect(pageTitle1.includes("Bot"), 'Page title does NOT contain "Bot"').to
      .be.true;
  });
});
