class Hotelhomepage {
  //Locators of elements on Hotelhomepage:

  getTheAppLocator = "//a[@aria-label='Download the app']";
  languageLocator = "//button[@data-stid='button-type-picker-trigger']";
  listYourPropertyLocator = "=List your property";
  supportLocator = "=Support";

  signInButtonLocator = "button=Sign in";
  signInItsFreeButtonLocator = "*=Sign in, it";
  feedbackLocator = "div=Feedback";

  whereToLocator = "//button[@aria-label='Where to?']";
  enterTextWhereToLocator = "//input[@id='destination_form_field']";
  allAutoSuggestion =
    "//button[@data-stid='destination_form_field-result-item-button']";
  travelersLocator = "//button[@aria-label='Travelers, 2 travelers, 1 room']";
  searchButtonLocator = "#search_button";
  shopTravelLinkLocator = "//button[@title='Shop travel']";
  allShopTravelOptions =
    "//div[contains(@class, 'uitk-layout-flex-item uitk-list uitk-layout')]//a";
  tellUsHowWeCanImproveLocator = "//span[contains(text(),'improve our site')]";
  shareFeedbackButtonLocator = "=Share feedback";

  calendarButtonLocator =
    "//button[@data-testid='uitk-date-selector-input1-default']";

  // Functions to interact with the locators:

  async openPage() {
    await browser.url("https://www.hotels.com/");
  }

  async clickFeedbackButton() {
    await $(this.feedbackLocator).click();
  }

  async clickSignInItsFreeButton() {
    await $(this.signInItsFreeButtonLocator).waitForClickable();
    await $(this.signInItsFreeButtonLocator).click();
  }

  async clickGetTheAppButton() {
    await $(this.getTheAppLocator).waitForClickable();
    await $(this.getTheAppLocator).click();
  }

  async clickLanguageButton() {
    await $(this.languageLocator).waitForClickable();
    await $(this.languageLocator).click();
  }

  async clickListYourPropertyButton() {
    await $(this.listYourPropertyLocator).waitForClickable();
    await $(this.listYourPropertyLocator).click();
  }

  async clickSupportButton() {
    await $(this.supportLocator).waitForClickable();
    await $(this.supportLocator).click();
  }

  async clickSearchButton() {
    await $(this.searchButtonLocator).click();
  }

  async clickTravelersButton() {
    await $(this.travelersLocator).waitForClickable();
    await $(this.travelersLocator).click();
  }

  async getDisplayedLanguageText() {
    const languageText = await $(this.languageLocator);
    return await languageText.getText();
  }

  async clickShopTravelLink() {
    await $(this.shopTravelLinkLocator).waitForClickable();
    await $(this.shopTravelLinkLocator).click();
  }

  async clickWhereTo() {
    await $(this.whereToLocator).waitForClickable();
    await $(this.whereToLocator).click();
  }

  async enterTextInWhereTo(text) {
    await $(this.enterTextWhereToLocator).setValue(text);
  }

  async selectFromAutoSuggestion(text) {
    const allSunggestion = await $$(this.allAutoSuggestion);
    for (const suggestion of allSunggestion) {
      const suggestionText = await suggestion.getAttribute("aria-label");
      if (suggestionText.startsWith(text)) {
        await suggestion.click();
        break;
      }
    }
  }

  async isTellUsHowWeCanImproveDisplayed() {
    await $(this.tellUsHowWeCanImproveLocator).waitForDisplayed();
    return await $(this.tellUsHowWeCanImproveLocator).isDisplayed();
  }

  async isShareFeedbackAfterSearchEnabled() {
    await $(this.shareFeedbackButtonLocator).waitForEnabled();
    return await $(this.shareFeedbackButtonLocator).isEnabled();
  }

  async allShopTravelLinksEnabled() {
    const allShopTravelLinks = await $$(this.allShopTravelOptions);
    let result = false;
    for (const link of allShopTravelLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
    }
    return result;
  }

  async changeWindow(urlKeyWord) {
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
      await browser.switchToWindow(handle);
      const url = await browser.getUrl();
      if (url.includes(urlKeyWord)) {
        break;
      }
    }
  }

  async clickCalendar() {
    await $(this.calendarButtonLocator).waitForClickable();
    await $(this.calendarButtonLocator).click();
  }
}

module.exports = new Hotelhomepage();
