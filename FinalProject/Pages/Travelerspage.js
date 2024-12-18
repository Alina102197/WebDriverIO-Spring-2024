class Travelerspage {
  //Locators:
  childrenPlusButton =
    "//input[@aria-label='Children,Ages 0 to 17']/following-sibling::button";
  childrenMinusButton =
    "//input[@aria-label='Children,Ages 0 to 17']/preceding-sibling::button";
  currentChildrenCount = "//input[@aria-label='Children,Ages 0 to 17']";

  adultsPlusButton =
    "//input[@id='traveler_selector_adult_step_input-0']/following-sibling::button";
  adultsMinusButton =
    "//input[@id='traveler_selector_adult_step_input-0']/preceding-sibling::button";
  currentAdultCount = "//input[@id='traveler_selector_adult_step_input-0']";

  travelersDoneButton = "#traveler_selector_done_button";
  addAnotherRoomButton = "#traveler_selector_add_room";

  child1AgeLocator = "//select[@aria-label='Child 1 age']";
  child2AgeLocator = "//select[@aria-label='Child 2 age']";
  child3AgeLocator = "//select[@aria-label='Child 3 age']";

  travelersNrLocator = "//button[@data-stid='open-room-picker']";

  //Functions:

  async isChildrenMinusBtnEnabled() {
    await $(this.childrenMinusButton).waitForEnabled();
    return await $(this.childrenMinusButton).isEnabled();
  }

  async isChildrenPlusBtnEnabled() {
    await $(this.childrenPlusButton).waitForEnabled();
    return await $(this.childrenPlusButton).isEnabled();
  }

  async isChildrenPlusBtnDisabled() {
    return !(await $(this.childrenPlusButton).isEnabled());
  }

  async isChildrenMinusBtnDisbaled() {
    return !(await $(this.childrenMinusButton).isEnabled());
  }

  async selectChildrenNr(number) {
    for (let i = 0; i <= 17; i++) {
      const childrenCountNr = await $(this.currentChildrenCount).getAttribute(
        "value"
      );
      if (childrenCountNr < number) {
        await $(this.childrenPlusButton).click();
      } else if (childrenCountNr > number) {
        await $(this.childrenMinusButton).click();
      } else {
        break;
      }
    }
  }

  async selectAdultsNr(number) {
    for (let i = 2; i <= 17; i++) {
      const adultCountNr = await $(this.currentAdultCount).getAttribute(
        "value"
      );
      if (adultCountNr < number) {
        await $(this.adultsPlusButton).click();
      } else if (adultCountNr > number) {
        await $(this.adultsMinusButton).click();
      } else {
        break;
      }
    }
  }

  async selectChild1Age(age) {
    await $(this.child1AgeLocator).selectByVisibleText(age);
  }

  async selectChild2Age(age) {
    await $(this.child2AgeLocator).selectByVisibleText(age);
  }

  async selectChild3Age(age) {
    await $(this.child3AgeLocator).selectByVisibleText(age);
  }

  async clickTravelersDoneButton() {
    await $(this.travelersDoneButton).waitForClickable();
    await $(this.travelersDoneButton).click();
  }

  async sumOfAdultsAndChildren() {
    const adultsCount = await $(this.currentAdultCount).getAttribute("value");
    const childrenCount = await $(this.currentChildrenCount).getAttribute(
      "value"
    );
    const adultNr = parseFloat(adultsCount);
    const childrenNr = parseFloat(childrenCount);
    const sum = adultNr + childrenNr;
    return sum;
  }

  async getTravelersNr() {
    const travelersText = await $(this.travelersNrLocator).getText(); //"2 travelers, 1 room"
    const travelersTextSplit = travelersText.split(" ");
    const travelersNumber = travelersTextSplit[0]; // "9"
    const travelersNr = parseFloat(travelersNumber); //converted into number
    return travelersNr;
  }
}

module.exports = new Travelerspage();
