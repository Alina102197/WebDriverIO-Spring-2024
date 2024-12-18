class Listyourpropertypage {
  //Locators:
  textHeaderLocator = "//p[text()='What would you like to list?']";
  lodingLocator = "#classification_lodging";
  privateResidenceLocator = "//div[@id='classification_privateResidence']";

  step1of3Locator = "#ulx-step-indicator";
  nextButtonLocator = "#propertyInfoNextBtn";

  step2of3Locator = "//div[text()='Step 2 of 3']";
  whereIsYourPlaceLocatedLocator = "//h1[contains(text(),'place located')]";

  addressInputLocator = "#locationTypeAhead";
  addressSuggestionLocators = "//li[@role='menuitem']";

  currentBedroomCountLocator =
    "//span[contains(text(),'bedroom')]/following-sibling::input";
  bedroomMinusButton = "//button[@aria-label='Decrease bedrooms']";
  bedroomPlusButton = "//button[@aria-label='Increase bedrooms']";

  currentBathsCountLocator =
    "//span[contains(text(),'bathroom')]/following-sibling::input";
  bathroomMinusButton = "//button[@aria-label='Decrease bathrooms']";
  bathroomPlusButton = "//button[@aria-label='Increase bathrooms']";

  container = "//div[@class='ot-sdk-container']";
  closeContainer = "//div[@id='onetrust-close-btn-container']//button";

  advertisementContainer = "//div[@class='ulx-property-managment-container']";
  closeAdvertisementContainer = "//span[text()='Close']";

  mapLocator = "//section[@class='map-section location']";
  pinLocator =
    "//img[@src='https://maps.gstatic.com/mapfiles/transparent.png']";
  mapFooterLocator = "//span[@class='map-footer']";

  //Functions:
  async isHeaderDisplayed() {
    await $(this.textHeaderLocator).waitForDisplayed();
    return await $(this.textHeaderLocator).isDisplayed();
  }

  async isLodgingDisplayed() {
    await $(this.lodingLocator).waitForDisplayed();
    return await $(this.lodingLocator).isDisplayed();
  }

  async isPrivateResidenceDisplayed() {
    await $(this.privateResidenceLocator).waitForDisplayed();
    return await $(this.privateResidenceLocator).isDisplayed();
  }

  async clickPrivateResidence() {
    await $(this.privateResidenceLocator).waitForClickable();
    await $(this.privateResidenceLocator).click();
  }

  async isStep1of3Displayed() {
    await $(this.step1of3Locator).waitForDisplayed();
    return await $(this.step1of3Locator).isDisplayed();
  }

  async clickNextButton() {
    await $(this.nextButtonLocator).waitForClickable();
    await $(this.nextButtonLocator).click();
  }

  async isStep2of3Displayed() {
    await $(this.step2of3Locator).waitForDisplayed();
    return await $(this.step2of3Locator).isDisplayed();
  }

  async isWhereIsYourPlaceLocatedDisplayed() {
    await $(this.whereIsYourPlaceLocatedLocator).waitForDisplayed();
    return await $(this.whereIsYourPlaceLocatedLocator).isDisplayed();
  }

  async selectBedroomNr(number) {
    for (let i = 0; i <= 17; i++) {
      const currentBedsCountText = await $(this.currentBedroomCountLocator);
      const currentBedsCount = currentBedsCountText.getAttribute("value");
      if (currentBedsCount < number) {
        await $(this.bedroomPlusButton).click();
      } else if (currentBedsCount > number) {
        await $(this.bedroomMinusButton).click();
      } else {
        break;
      }
    }
  }

  async selectBathroomNr(number) {
    for (let i = 1; i <= 9.5; i++) {
      const currentBedsCountText = await $(this.currentBathsCountLocator);
      const currentBedsCount = currentBedsCountText.getAttribute("value");
      if (currentBedsCount < number) {
        await $(this.bathroomPlusButton).click();
      } else if (currentBedsCount > number) {
        await $(this.bathroomMinusButton).click();
      } else {
        break;
      }
    }
  }

  async enterAddress(address) {
    await $(this.addressInputLocator).setValue(address);
  }

  async chooseAddressFromAutoSuggestion(address) {
    const allSuggestion = await $$(this.addressSuggestionLocators);
    for (const suggestion of allSuggestion) {
      const suggestionText = await suggestion.getText();
      if (suggestionText.startsWith(address)) {
        await suggestion.click();
        break;
      }
    }
  }

  async clickContainer() {
    const containerDisplayed = await $(this.container).isDisplayed();
    if (containerDisplayed) {
      await $(this.closeContainer).click();
    }
  }

  async clickAdvertisementContainer() {
    const containerIsDisplayed = await $(
      this.advertisementContainer
    ).isDisplayed();
    if (containerIsDisplayed) {
      await $(this.closeAdvertisementContainer).click();
    }
  }

  async isMapDisplayed() {
    await $(this.mapLocator).waitForDisplayed();
    return await $(this.mapLocator).isDisplayed();
  }

  async isPinDisplayed() {
    await $(this.pinLocator).waitForDisplayed();
    return await $(this.pinLocator).isDisplayed();
  }

  async isMapFooterDisplayed() {
    await $(this.mapFooterLocator).waitForDisplayed();
    return await $(this.mapFooterLocator).isDisplayed();
  }
}

module.exports = new Listyourpropertypage();
