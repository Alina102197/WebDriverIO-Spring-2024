class Locationpage {
  //Locators:
  stepLocator = "#ulx-step-indicator";
  textHeaderLocator = "//div[@id='ulx-step-indicator']/following-sibling::h1";
  enterAddressLocator = "#locationTypeAhead";
  unitNrLocator = "#address2";
  nextButtonLocator = "#locationTypeAheadNextBtn";
  suggestionLocator = "//li[@class='typeahead-prediction-item fds-list-item']";
  mapLocator = "//div[@aria-label='Map']";
  pinTextLocator = "//span[@class='map-footer']";

  //Functions:

  async isStep2of3Displayed() {
    await $(this.stepLocator).waitForDisplayed();
    return await $(this.stepLocator).isDisplayed();
  }

  async isHeaderDisplayed() {
    return await $(this.textHeaderLocator).isDisplayed();
  }

  async enterAddress(address) {
    await $(this.enterAddressLocator).setValue(address);
  }

  async selectFromAutoSuggestion(text) {
    const allSuggestion = await $$(this.suggestionLocator);
    for (const suggestion of allSuggestion) {
      const suggestionText = await suggestion.getText();
      if (suggestionText.startsWith(text)) {
        await suggestion.click();
        break;
      }
    }
  }

  async isMapDisplayed() {
    await $(this.mapLocator).waitForDisplayed();
    return await $(this.mapLocator).isDisplayed();
  }

  async moveThePinTextDisplayed() {
    await $(this.pinTextLocator).waitForDisplayed();
    return await $(this.pinTextLocator).isDisplayed();
  }
}
