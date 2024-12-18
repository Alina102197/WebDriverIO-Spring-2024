class Calendarpage {
  //Locators:

  pastDatesLocators =
    "//div[@class='uitk-day-button' and @aria-disabled='true']";
  backButtonLocator =
    "//button[@data-stid='uitk-calendar-navigation-controls-previous-button']";

  doneButtonLocator = "//button[@data-stid='apply-date-selector']";

  allCalendarDaysDisplayedLocators =
    "//div[contains(@class,'uitk-date-number')]";

  //Functions:

  async isBackButtonEnabled() {
    const backButton = await $(this.backButtonLocator);
    const isBackButtonDisabled = await backButton.getAttribute("disabled");
    return isBackButtonDisabled !== null;
  }

  async clickCalendarDoneButton() {
    await $(this.doneButtonLocator).waitForClickable();
    await $(this.doneButtonLocator).click();
  }

  async arePastDatesDisabled() {
    const pastDates = await $$(this.pastDatesLocators);
    for (const day of pastDates) {
      const isPast = await day.getAttribute("aria-disabled");
      if (isPast !== "true") {
        return false;
      }
    }
    return true;
  }

  async selectDate(daysFromToday) {
    // Calculate the target date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromToday);
    const targetDay = targetDate.getDate();
    console.log(targetDate);

    // Select the target day
    const days = await $$(this.allCalendarDaysDisplayedLocators);
    for (const day of days) {
      const dayText = await day.getText();
      if (parseInt(dayText, 10) === targetDay) {
        await day.waitForClickable();
        await day.click();
        break;
      }
    }
  }

  async clickon20() {
    await $(this.Locator20).waitForClickable();
    await $(this.Locator20).click();
  }
}
module.exports = new Calendarpage();
