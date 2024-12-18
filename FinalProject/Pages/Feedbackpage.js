class Feedbackpage {
  overallSatisfactionLocator = "#page-rating";
  pageRating1Locator = "//label[@for='page-rating-1']";
  pageRating2Locator = "//label[@for='page-rating-3']";
  pageRating3Locator = "//label[@for='page-rating-4']";
  pageRating4Locator = "//label[@for='page-rating-4']";
  pageRating5Locator = "//label[@for='page-rating-5']";

  recommendRatingLocator10 = "//label[@for='nps-10']";
  topicDropdownLocator = "#topic";
  commentLocator = "#verbatim";
  emailAddressLocator = "#email_address";
  submitButtonLocator = "<button>";
  errorMessageLocator = "#required";
  submitFeedbackMessageLocator = "p[class='question-header']";

  async clickSubmitButton() {
    await $(this.submitButtonLocator).click();
  }

  async isErrorMessageDisplayed() {
    await $(this.errorMessageLocator).waitForDisplayed();
    return await $(this.errorMessageLocator).isDisplayed();
  }

  async selectOverallRating1() {
    await $(this.pageRating1Locator).waitForClickable();
    await $(this.pageRating1Locator).click();
  }

  async selectOverallRating4() {
    await $(this.pageRating4Locator).waitForClickable();
    await $(this.pageRating4Locator).click();
  }

  async recommendSite() {
    await $(this.recommendRatingLocator10).click();
  }

  async selectTopic(topic) {
    await $(this.topicDropdownLocator).selectByVisibleText(topic);
  }

  async enterComment(comment) {
    await $(this.commentLocator).setValue(comment);
  }

  async enterEmail(email) {
    await $(this.emailAddressLocator).setValue(email);
  }

  async isSubmitFeedbackMessageDisplayed() {
    await $(this.submitFeedbackMessageLocator).waitForDisplayed();
    return await $(this.submitFeedbackMessageLocator).isDisplayed();
  }
}

module.exports = new Feedbackpage();
