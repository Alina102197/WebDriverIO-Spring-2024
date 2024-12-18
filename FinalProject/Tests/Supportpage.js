const { expect } = require("chai");
const hotelHomepage = require("../Pages/Hotelhomepage");
const supportPage = require("../Pages/Supportpage");

describe("Support", () => {
  it("Verify the Links on Support screen", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on “Support” link
     * 3. Verify “Welcome to Help Center” heading is displayed
     * 4. Verify all links under “Refunds and Charges” heading are enabled
     * 5. Verify all links under “Lodging” heading are enabled
     * 6. Verify all links under “Car” heading are enabled
     * 7. Verify all links under “Account” heading are enabled
     * 8. Verify all links under “Privacy” heading are enabled
     * 9. Verify all links under “Security” heading are enabled
     * 10. Verify all links under “Travel Alerts” heading are enabled
     * 11. Verify all links under “Loyalty & Rewards” heading are enabled
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await $("//a[@href='/Hotels']").click(); // to avoid sign up page

    //2. Click on “Support” link
    await hotelHomepage.clickSupportButton();

    //3. Verify “Welcome to Help Center” heading is displayed
    expect(
      await supportPage.isWelcomeHeadingDisplayed(),
      "“Welcome to Help Center” heading is NOT displayed"
    ).to.be.true;

    //4. Verify all links under “Refunds and Charges” heading are enabled
    expect(
      await supportPage.allRefundAndChargesLinksEnabled(),
      " all links under “Refunds and Charges” heading are NOT enabled"
    ).to.be.true;

    //5. Verify all links under “Lodging” heading are enabled
    expect(
      await supportPage.allLodgingLinksEnabled(),
      "all links under “Lodging” heading are NOT enabled"
    ).to.be.true;

    //6. Verify all links under “Car” heading are enabled
    expect(
      await supportPage.allCarLinksEnabled(),
      "all links under “Car” heading are NOT enabled"
    ).to.be.true;

    //7. Verify all links under “Account” heading are enabled
    expect(
      await supportPage.allAccountLinksEnabled(),
      "all links under “Account” heading are NOT enabled"
    ).to.be.true;

    //8. Verify all links under “Privacy” heading are enabled
    expect(
      await supportPage.allPrivacyLinksEnabled(),
      "all links under “Privacy” heading are NOT enabled"
    ).to.be.true;

    //9. Verify all links under “Security” heading are enabled
    expect(
      await supportPage.allSecurityLinksEnabled(),
      "all links under “Security” heading are NOT enabled"
    ).to.be.true;

    //10. Verify all links under “Travel Alerts” heading are enabled
    expect(
      await supportPage.allTravelAlertsLinksEnabled(),
      "all links under “Travel Alerts” heading are NOT enabled"
    ).to.be.true;

    //11. Verify all links under “Loyalty & Rewards” heading are enabled
    expect(
      await supportPage.allLoyaltyAndRewardsLinksEnabled(),
      "all links under “Loyalty & Rewards” heading are enabled"
    ).to.be.true;
  });
});
