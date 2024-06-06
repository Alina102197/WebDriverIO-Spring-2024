const { expect } = require("chai");

/**
 * url()  is used to launch a webpage (or webUrl) on a browser window
 * input: url-address as a string
 * EXAMPLE :
 */
describe("Basic functions of webDriverIO", () => {
  it("To launch a webpage", async () => {
    /**
     * 1. Launch weather.com
     */
    await browser.url("https://www.weather.com/");
    /**
     * pause() function is used to pause the execution for x-milliseconds
     * input: milliseconds (as a number) for which the execution should pause
     */
    await browser.pause(5000); // 5000 = 5 seconds
  });

  it("Learning maximizeWindow, getTitle, getUrl", async () => {
    /**
     * 1.Launch facebook.com
     * 2. Maximize the window
     * 3. Get the page title
     * 4. Verify page title starts with "facebook"
     * 5. get current Url
     * 6. Verifty current Url contains "book.co"
     */

    // 1.Launch facebook.com

    await browser.url("https://www.facebook.com/");
    await browser.pause(5000);

    // 2. Maximize the window

    await browser.maximizeWindow();
    await browser.pause(5000);
    // 3. Get the page title:

    const getTitle = await browser.getTitle();

    // 4. Verify page title starts with "facebook":

    expect(
      getTitle.startsWith("Facebook"),
      'Page title does not start with "Facebook"'
    ).to.be.true;

    // 5. get current Url:

    const pageUrl = await browser.getUrl();

    // 6. Verifty current Url contains "book.co"
    expect(
      pageUrl.includes("book.co"),
      'Current url does not contain "book.co"'
    ).to.be.true;
  });

  it.only("Learning getWindowhandle, back, forward, refresh functions", async () => {
    /**
     * 1. Launch weather.com
     * 2. Get the windowHandle
     * 3. Verify windowhandle length is greater than 0
     * 4. Launch Facebook.com
     * 5. Launch amazon.com
     * 6. Go back
     * 7. Go back
     * 8. Launch scholastic.com
     * 9. Go back
     * 10. Go forward
     * 11. Launch zillow.com
     * 12. Refresh the webpage
     */

    //1. Launch weather.com:

    await browser.url("https://www.google.com/");

    // 2. Get the windowHandle:

    const handle = await browser.getWindowHandle();

    //3. Verify windowhandle length is greater than 0:

    expect(handle.length > 0, "Window handle length is NOT greater than 0").to
      .be.true;

    //4. Launch Facebook.com:

    await browser.url("https://www.facebook.com/");

    //5. Launch amazon.com:

    await browser.url("https://www.amazon.com/");

    //6. Go back
    //7. Go back
    await browser.back();

    await browser.back();

    //8. Launch scholastic.com:

    await browser.url("https://www.scholastic.com/");

    //9. Go back:

    await browser.back();

    //10. Go forward:

    await browser.forward();

    //11. Launch zillow.com:

    await browser.url("https://www.zillow.com/");

    //12. Refresh the webpage:

    await browser.refresh();
  });
});
