const hotelHomepage = require("../Pages/Hotelhomepage");
const getTheAppPage = require("../Pages/Gettheapppage");
const { expect } = require("chai");
describe("Get the App", () => {
  it("Verify Get the app section", async () => {
    /**
     * 1. Go to hotels.com
     * 2. 2. Click “Get the app“ button
     * 3. Verify “Scan the QR code and download our app” is displayed
     * 4. Verify QR Code is displayed
     */

    //1. Go to hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();

    //2. Click “Get the app“ button
    await hotelHomepage.clickGetTheAppButton();

    //3. Verify “Scan the QR code and download our app” is displayed
    const textDisplayed =
      await getTheAppPage.isScanQRCodeAndDownloadAppDisplayed();

    expect(
      textDisplayed,
      "“Scan the QR code and download our app” is NOT displayed"
    ).to.be.true;

    //4. Verify QR Code is displayed
    expect(await getTheAppPage.isQRCodeDisplayed(), "QR Code is NOT displayed")
      .to.be.true;
  });
  it("Verify Reasons to download our app section", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on “Get the app” button
     * 3. Scroll to Reasons to download our app
     * 4. Verify “Reasons to download our app“ header is displayed
     * 5. Verify icon, header and sub-header for the reasons
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();

    //2. Click on “Get the app” button
    await hotelHomepage.clickGetTheAppButton();

    //3. Scroll to Reasons to download our app
    await getTheAppPage.scrollToReasonsToDownloadApp();

    //4. Verify “Reasons to download our app“ header is displayed
    expect(
      await getTheAppPage.isReasonsToDownloadAppDisplayed(),
      "“Reasons to download our app“ header is NOT displayed"
    ).to.be.true;

    //5. Verify icon, header and sub-header for the reasons
    //-> Verify header for "Stay Informed" is displayed
    expect(
      await getTheAppPage.isStayInformedHeaderDisplayed(),
      'header for "Stay Informed" is NOT displayed'
    ).to.be.true;

    //-> Verify sub-header for "Stay Informed" is displayed
    expect(
      await getTheAppPage.isStayInformedSubHeaderDisplayed(),
      'sub-header for "Stay Informed" is NOT displayed'
    ).to.be.true;

    //-> Verify header for "Save even more" is displayed
    expect(
      await getTheAppPage.isSaveEvenMoreHeaderDisplayed(),
      'header for "Save even more" is displayed'
    ).to.be.true;

    //-> Verify sub-header for "Save even more" is displayed
    expect(
      await getTheAppPage.isSaveEvenMoreSubHeaderDisplayed(),
      'sub-header for "Save even more" is displayed'
    ).to.be.true;

    //-> Verify header for "Plan trips on the go" is displayed
    expect(
      await getTheAppPage.isPlanTripsOnTheGoHeaderDisplayed(),
      'header for "Plan trips on the go" is NOT displayed'
    ).to.be.true;

    //-> Verify sub-header for "Plan trips on the go" is displayed
    expect(
      await getTheAppPage.isPlanTripsOnTheGoSubHeaderDisplayed(),
      'sub-header for "Plan trips on the go" is NOT displayed'
    ).to.be.true;

    //-> Verify header for "Get rewarded" is displayed
    expect(
      await getTheAppPage.isGetRewardedHeaderDisplayed(),
      'header for "Get rewarded" is NOT displayed'
    ).to.be.true;

    //-> Verify sub-header for "Get rewarded" is displayed
    expect(
      await getTheAppPage.isGetRewardedSubHeaderDisplayed(),
      'sub-header for "Get rewarded" is NOT displayed'
    ).to.be.true;
  });
});
