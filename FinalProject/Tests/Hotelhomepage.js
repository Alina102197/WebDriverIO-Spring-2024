const { expect } = require("chai");
const hotelHomepage = require("../Pages/Hotelhomepage");
const travelers = require("../Pages/Travelerspage");
const calendarPage = require("../Pages/Calendarpage");
const destinationPage = require("../Pages/Destinationpage");
describe("Homepage", () => {
  it("Verify Child-age dropdowns are same as number of Children selected", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on Travelers
     * 3. Select “Children” as 2
     * 4. Verify Children-age dropdown are 2
     * 5. Verify minus-button is enabled
     * 6. Select “Children” as 6
     * 7. Verify Children-age dropdown are 6
     * 8. Verify Plus button is disabled
     * 9. Verify minus-button is enabled
     * 10. Select “Children” as 5
     * 11. Verify Children-age dropdown are 5
     * 12. Verify Plus button is enabled
     * 13. Verify minus-button is enabled
     * 14. Select “Children” as 0
     * 15. Verify Children-age dropdown is NOT displayed
     * 16. Verify Plus button is enabled
     * 17. Verify minus-button is disabled
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await $("//a[@href='/Hotels']").click(); // to avoid sign up page

    //2. Click on Travelers
    await hotelHomepage.clickTravelersButton();

    //3. Select “Children” as 2????
    await travelers.selectChildrenNr("2");
    await browser.pause(5000);

    //5. Verify minus-button is enabled
    expect(
      await travelers.isChildrenMinusBtnEnabled(),
      "Minus Button is NOT enabled"
    ).to.be.true;

    //6. Select “Children” as 6
    await travelers.selectChildrenNr("6");
    await browser.pause(5000);

    //7. Verify Children-age dropdown are 6
    //8. Verify Plus button is disabled
    expect(
      await travelers.isChildrenPlusBtnDisabled(),
      "Plus button is NOT disabled"
    ).to.be.true;

    //9. Verify minus-button is enabled
    expect(
      await travelers.isChildrenMinusBtnEnabled(),
      "Minus Button is NOT enabled"
    ).to.be.true;

    //10. Select “Children” as 5
    await travelers.selectChildrenNr("5");
    await browser.pause(5000);

    //11. Verify Children-age dropdown are 5
    //12. Verify Plus button is enabled
    expect(await travelers.isChildrenPlusBtnEnabled(), "Plus button is enabled")
      .to.be.true;

    //13. Verify minus-button is enabled
    expect(
      await travelers.isChildrenMinusBtnEnabled(),
      "Minus Button is NOT enabled"
    ).to.be.true;

    //14. Select “Children” as 0
    await travelers.selectChildrenNr("0");
    await browser.pause(5000);

    //15. Verify Children-age dropdown is NOT displayed
    //16. Verify Plus button is enabled
    expect(await travelers.isChildrenPlusBtnEnabled(), "Plus button is enabled")
      .to.be.true;

    //17. Verify minus-button is disabled
    expect(
      await travelers.isChildrenMinusBtnDisbaled(),
      "Minus button is NOT disabled"
    ).to.be.true;
  });
  it("Verify user can filter and sort search results", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Enter “hol“ in search box
     * 3. Select “Isla Holbox, Quintana Roo, Mexico“ from auto-suggestions
     * 4. Select check-in date which is 37 days from current date
     * 5. Select check-out date which is 7 days from check-in date
     * 6. Click Done button
     * 7. Click Search button
     * 8. Click on star-rating filter (example: 5*)
     * 9. Select “Price - to Low to High“ from sort-by dropdown
     * 10. Verify all hotels in search results are *-rated as selected in above step
     * 11. Verify all hotels are listed in increasing order (price)
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");

    //2. Enter “hol“ in search box
    await hotelHomepage.clickWhereTo();
    await hotelHomepage.enterTextInWhereTo("hol");
    await browser.pause(3000);

    //3. Select “Isla Holbox, Quintana Roo, Mexico“ from auto-suggestions
    await hotelHomepage.selectFromAutoSuggestion("Isla Holbox");
    await browser.pause(5000);

    //4. Select check-in date which is 37 days from current date
    //-> click Calendar button:
    await hotelHomepage.clickCalendar();
    await browser.pause(3000);

    //-> Select check-in date:
    // await calendarPage.selectDate(37);
    // await browser.pause(3000);

    //5. Select check-out date which is 7 days from check-in date

    //6. Click Done button
    await calendarPage.clickCalendarDoneButton();

    //7. Click Search button
    await hotelHomepage.clickSearchButton();
    await browser.pause(3000);

    //8. Click on star-rating filter (example: 5*)
    await destinationPage.clickStarRating();
    await browser.pause(3000);

    // //9. Select “Price - to Low to High“ from sort-by dropdown
    await destinationPage.selectFromSortByDropdown("Price: low to high");
    await browser.pause(3000);

    //10. Verify all hotels in search results are *-rated as selected in above step
    //11. Verify all hotels are listed in increasing order (price)
  });

  it("Verify user can update number of guests on home page", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on Travelers section
     * 3. Select “Adults” to any number (example: 6)
     * 4. Select “Children” to any number (example: 3)
     * 5. Select any values for children ages
     * 6. Click Done button
     * 7. Verify the number of travelers is the sum of adults and children selected on step 3&4
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await $("//a[@href='/Hotels']").click(); // to avoid sign up page

    //2. Click on Travelers section
    await hotelHomepage.clickTravelersButton();
    await browser.pause(5000);

    //3. Select “Adults” to any number (example: 6)
    await travelers.selectAdultsNr("6");

    //4. Select “Children” to any number (example: 3)
    await travelers.selectChildrenNr("3");
    await browser.pause(5000);

    //5. Select any values for children ages:

    await travelers.selectChild1Age("3");
    await travelers.selectChild2Age("7");
    await travelers.selectChild3Age("1");
    await browser.pause(3000);

    //6. Click Done button
    await travelers.clickTravelersDoneButton();
    await browser.pause(3000);

    //7. Verify the number of travelers is the sum of adults and children selected on step 3&4

    const travelersNr = await travelers.getTravelersNr();
    const sumOfAdultsAndChildren = await travelers.sumOfAdultsAndChildren();

    expect(travelersNr).to.equal(sumOfAdultsAndChildren, "");
  });

  it("Verify Past dates and back button on current month's calendar are disabled", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not displayed, go to current month’s calendar
     * 4. Verify past dates and back button on current month's calendar are disabled
     */

    //1. Launch hotels.com
    await hotelHomepage.openPage();

    //2. Click on Dates section:
    await hotelHomepage.clickCalendar();

    //3. If not displayed, go to current month’s calendar -> IT IS DISPLAYED!
    //4. Verify past dates and back button on current month's calendar are disabled
    expect(
      await calendarPage.isBackButtonEnabled(),
      "Back button on current month's calendar is NOT disabled"
    ).to.be.true;

    expect(
      await calendarPage.arePastDatesDisabled(),
      "Past dates on current month's calendar are NOT disabled"
    ).to.be.true;
  });

  it("Verify Shop Travel options are enabled", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on “Shop travel” link
     * 3. Verify all options are under Shop Travel are enabled
     */

    //1. Launch hotels.com
    await hotelHomepage.openPage();

    //2. Click on “Shop travel” link
    await hotelHomepage.clickShopTravelLink();

    //3. Verify all options are under Shop Travel are enabled
    expect(
      await hotelHomepage.allShopTravelLinksEnabled(),
      "all options are under Shop Travel are NOT enabled"
    ).to.be.true;
  });

  it("Verify Share Feedback button is displayed at the end of search results", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Enter “bora” in destination
     * 3. Select “Bora Bora, Leeward Islands, French Polynesia“ from auto-suggestions
     * 4. Click Search button
     * 5. Verify at the end of search results:
     * -> Text: Tell us how we can improve our site is displayed
     * -> Button: Share Feedback is enabled
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await $("//a[@href='/Hotels']").click(); // to avoid sign up page

    //2. Enter “bora” in destination
    await hotelHomepage.clickWhereTo();
    await browser.pause(5000);
    await hotelHomepage.enterTextInWhereTo("bora");
    await browser.pause(3000);

    //3. Select “Bora Bora, Leeward Islands, French Polynesia“ from auto-suggestions
    await hotelHomepage.selectFromAutoSuggestion("Bora Bora");

    //4. Click Search button
    await hotelHomepage.clickSearchButton();
    await browser.pause(5000);

    //5. Verify at the end of search results:
    //-> Text: Tell us how we can improve our site is displayed
    expect(
      await hotelHomepage.isTellUsHowWeCanImproveDisplayed(),
      "Tell us how we can improve our site is NOT displayed"
    ).to.be.true;
    //-> Button: Share Feedback is enabled
    expect(
      await hotelHomepage.isShareFeedbackAfterSearchEnabled(),
      "Share Feedback is NOT enabled"
    ).to.be.true;
  });
});
