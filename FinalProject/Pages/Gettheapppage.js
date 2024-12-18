class Gettheapppage {
  //Locators:
  scanQRCodeAndDownloadAppLocator = "#marquee-title";
  qrCodeLocator = "//img[@alt='Scan the QR code']";
  reasonsToDownloadAppLocator = "//div[@id='editorial-7']";

  stayInformedIconLocator = "";
  stayInformedHeaderLocator = "//span[text()='Stay informed']";
  stayInformedSubHeaderLocator =
    "//span[contains(text(),'Conveniently access')]";

  saveEvenMoreIconLocator = "";
  saveEvenMoreHeaderLocator = "//span[text()='Save even more']";
  saveEvenMoreSubHeaderLocator = "//span[contains(text(),'Receive discounts')]";

  planTripsOnTheGoIconLocator = "";
  planTripsOnTheGoHeaderLocator = "//span[contains(text(),'Plan trips')]";
  planTripsOnTheGoSubHeaderLocator = "//span[contains(text(),'Book anytime')]";

  getRewardedIconLocator = "";
  getRewardedHeaderLocator = "//span[contains(text(),'rewarded')]";
  getRewardedSubHeaderLocator = "//span[contains(text(),'perks for members')]";

  //functions:

  async isScanQRCodeAndDownloadAppDisplayed() {
    await $(this.scanQRCodeAndDownloadAppLocator).waitForDisplayed();
    return await $(this.scanQRCodeAndDownloadAppLocator).isDisplayed();
  }

  async isQRCodeDisplayed() {
    await $(this.qrCodeLocator).waitForDisplayed();
    return await $(this.qrCodeLocator).isDisplayed();
  }

  async scrollToReasonsToDownloadApp() {
    await $(this.reasonsToDownloadAppLocator).scrollIntoView(true);
  }

  async isReasonsToDownloadAppDisplayed() {
    await $(this.reasonsToDownloadAppLocator).waitForDisplayed();
    return await $(this.reasonsToDownloadAppLocator).isDisplayed();
  }

  async isStayInformedHeaderDisplayed() {
    await $(this.stayInformedHeaderLocator).waitForDisplayed();
    return await $(this.stayInformedHeaderLocator).isDisplayed();
  }

  async isStayInformedSubHeaderDisplayed() {
    await $(this.stayInformedSubHeaderLocator).waitForDisplayed();
    return await $(this.stayInformedSubHeaderLocator).isDisplayed();
  }

  async isSaveEvenMoreHeaderDisplayed() {
    return await $(this.saveEvenMoreHeaderLocator).isDisplayed();
  }

  async isSaveEvenMoreSubHeaderDisplayed() {
    return await $(this.saveEvenMoreSubHeaderLocator).isDisplayed();
  }

  async isPlanTripsOnTheGoHeaderDisplayed() {
    return await $(this.planTripsOnTheGoHeaderLocator).isDisplayed();
  }

  async isPlanTripsOnTheGoSubHeaderDisplayed() {
    return await $(this.planTripsOnTheGoSubHeaderLocator).isDisplayed();
  }

  async isGetRewardedHeaderDisplayed() {
    return await $(this.getRewardedHeaderLocator).isDisplayed();
  }

  async isGetRewardedSubHeaderDisplayed() {
    return await $(this.getRewardedSubHeaderLocator).isDisplayed();
  }
}

module.exports = new Gettheapppage();
