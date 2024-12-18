class Supportpage {
  //Locators:
  welcomeHeadingLocator = "//h1[text()='Welcome to Help Center']";

  refundAndChargesLinksLocators =
    "//h3[text()='Refunds & Charges']/../following-sibling::div/button";
  lodgingLinksLocators =
    "//h3[text()='Lodging']/../following-sibling::div/button";
  carLinksLocators = "//h3[text()='Car']/../following-sibling::div/button";
  accountLinksLocators =
    "//h3[text()='Account']/../following-sibling::div/button";
  privacyLinksLocators =
    "//h3[text()='Privacy']/../following-sibling::div/button";
  securityLinksLocators =
    "//h3[text()='Security']/../following-sibling::div/button";
  loyaltyAndRewardsLinksLocators =
    "//h3[text()='Loyalty & Rewards']/../following-sibling::div/button";
  travelAlertsLinksLocators =
    "//h3[text()='Travel Alerts']/../following-sibling::div/button";

  //Functions:
  async isWelcomeHeadingDisplayed() {
    await $(this.welcomeHeadingLocator).waitForDisplayed();
    return await $(this.welcomeHeadingLocator).isDisplayed();
  }

  async allRefundAndChargesLinksEnabled() {
    const refundAndChargesLinks = await $$(this.refundAndChargesLinksLocators);
    let result = false;
    for (const link of refundAndChargesLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allLodgingLinksEnabled() {
    const lodgingLinks = await $$(this.lodgingLinksLocators);
    let result = false;
    for (const link of lodgingLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allCarLinksEnabled() {
    const carLinks = await $$(this.carLinksLocators);
    let result = false;
    for (const link of carLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allAccountLinksEnabled() {
    const accountLinks = await $$(this.accountLinksLocators);
    let result = false;
    for (const link of accountLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allPrivacyLinksEnabled() {
    const privacyLinks = await $$(this.privacyLinksLocators);
    let result = false;
    for (const link of privacyLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allSecurityLinksEnabled() {
    const securityLinks = await $$(this.securityLinksLocators);
    let result = false;
    for (const link of securityLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allLoyaltyAndRewardsLinksEnabled() {
    const loyaltyAndRewardsLinks = await $$(
      this.loyaltyAndRewardsLinksLocators
    );
    let result = false;
    for (const link of loyaltyAndRewardsLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }

  async allTravelAlertsLinksEnabled() {
    const travelAlertsLinks = await $$(this.travelAlertsLinksLocators);
    let result = false;
    for (const link of travelAlertsLinks) {
      result = link.isEnabled();
      if (!result) {
        break;
      }
      return result;
    }
  }
}

module.exports = new Supportpage();
