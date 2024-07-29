const { expect } = require("chai");
const moment = require("moment");

describe("Dropdown learning", () => {
  it("Verify the current date is selected by default in Sign Up dropdown ", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click on "Create new account" link
     * 3. Verify current date is displayed in the birthdate dropdowns.
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

    // 3. Verify current date is displayed in the birthdate dropdowns:

    /**find the locator of month-option where selected =1
     * using the locator find webElement
     * find the text of webElement(July)
     */
    //check if the month is selected by default:

    let currentMonth = moment().format("MMM");
    const selectedmonthElement = await $(
      '//select[@id="month"]/option[@selected]'
    );
    const selectedMonthOnWeb = await selectedmonthElement.getText();
    expect(
      selectedMonthOnWeb,
      "Current month is not selected in Fb Sign In form"
    ).to.equals(currentMonth);

    //check if day is selected by default:

    let currentDate = moment().format("D");
    const selectedDateElement = await $(
      "//select[@id='day']/option[@selected]"
    );
    const selectedDateOnWeb = await selectedDateElement.getText();

    expect(
      selectedDateOnWeb,
      "Current date is not selected in Fb Sign In form"
    ).to.equals(currentDate);

    //check is the year is selected by default:

    let currentYear = moment().format("YYYY");
    const selectedYearElement = await $(
      "//select[@id='year']/option[@selected]"
    );
    const selectedYearOnWeb = await selectedYearElement.getText();

    expect(
      selectedYearOnWeb,
      "Current date is not selected in Fb Sign In form"
    ).to.equals(currentYear);
  });

  it.only("Verify the travelers count on homepage", async () => {
    /**
     *1. Launch hotels.com 
      2. Make Adults=4 in Room-1
      3. Click Add another room
      4. Make Adults=3 in Room-2
      5. Click on Done button
      6. Verify total-travalers is equals to the number of adults mentioned in rooms
     */

    //1. Launch hotels.com :

    await browser.url("https://www.hotels.com/");

    await browser.maximizeWindow();

    await browser.pause(3000);

    await $("//a[@href='/Hotels']").click();

    //2. Make Adults=4 in Room-1

    const travelersButton = await $('//button[@data-stid="open-room-picker"]');

    await travelersButton.click();
    await browser.pause(10000);

    //const plusButton = await $("(//button[@type='button'])[9]");
    const plusButton = await $(
      '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button'
    );

    // const minusButton = await $("(//button[@type='button'])[8]");
    const minusButton = await $(
      '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button'
    );

    /** In order to click multiple times on the plus button for adults we need to write a loop:
     * Loop:
     *    get the currentAdultCount
     *    if (currentAdultCount < desiredCount) {
     *      click + button
     *    } else if (currentAdultCount > desiredCount) {
     *      click - button
     *    } else {
     *      break
     *    }
     */

    const desiredCount = 4;

    // find the webElement for the currentCount:

    for (let i = 1; i <= 14; i++) {
      const currentAdultCount = await $(
        "//input[@id='traveler_selector_adult_step_input-0']"
      );
      // get the value of the currentCount:
      const currentAdultNr = await currentAdultCount.getAttribute("value");

      if (currentAdultNr < desiredCount) {
        await plusButton.click();
        await browser.pause(2000);
      } else if (currentAdultNr > desiredCount) {
        await minusButton.click();
        await browser.pause(2000);
      } else {
        break;
      }
    }
    await browser.pause(3000);

    //3. Click Add another room:

    const travelersDoneButton = await $("#traveler_selector_done_button");
    const isTravelersWindowOpen = await travelersDoneButton.isDisplayed();
    if (!isTravelersWindowOpen) {
      await travelersButton.click();
      await browser.pause(2000);
    }

    const addAnotherRoomBtn = await $("#traveler_selector_add_room");

    await addAnotherRoomBtn.click();
    await browser.pause(3000);

    // //4. Make Adults=3 in Room-2:

    const desiredCountRoom2 = 3;
    const plusButtonRoom2 = await $(
      "//input[@id='traveler_selector_adult_step_input-1']/following-sibling::button"
    );

    for (let i = 1; i <= 14; i++) {
      const currentAdultsNr2 = await $(
        "//input[@id='traveler_selector_adult_step_input-1']"
      ).getAttribute("value");

      if (currentAdultsNr2 < desiredCountRoom2) {
        await plusButtonRoom2.click();
      } else {
        break;
      }
    }

    await browser.pause(3000);

    //5. Click on Done button:

    const doneButton = await $("//button[@id='traveler_selector_done_button']");

    await doneButton.click();
    await browser.pause(3000);

    //6. Verify total-travalers is equals to the number of adults mentioned in rooms:
  });
});
