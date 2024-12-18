class PrivateResidencepage {
  //Locators:
  stepLocator = "#ulx-step-indicator";
  nextButtonLocator = "#propertyInfoNextBtn";
  plusBedroomButtonLocator = "//button[@aria-label='Increase bedrooms']";
  minusBedroomButtonLocator = "//button[@aria-label='Decrease bedrooms']";
  plusBathroomButtonLocator = "//button[@aria-label='Increase bathrooms']";
  minusBathroomButtonLocator = "//button[@aria-label='Decrease bathrooms']";

  //Functions:

  async isStep1of3Displayed() {
    await $(this.stepLocator).waitForDisplayed();
    return await $(this.stepLocator).isDisplayed();
  }

  async changeBedroomNumber(number) {}

  async changeBathroomNumber(number) {}
}

module.exports = new PrivateResidencepage();
