const { expect } = require("chai");
const feedbackPage = require("../Pages/Feedbackpage");
const hotelHomepage = require("../Pages/Hotelhomepage");
describe("Feedback", () => {
  it("Verify error is displayed when user submits the empty feedback form", async () => {
    /**
     * 1. Launch hotels.com
     * 2. Click on Feedback
     * -> switch to feedback window
     * 3. Click on Submit button
     * 4. Verify “Please fill in the required
     * information highlighted below.” error is displayed.
     */

    //1. Launch hotels.com
    await browser.url("https://www.hotels.com/");

    //2. Click on Feedback
    await hotelHomepage.clickFeedbackButton();

    //-> switch to feedback window
    await hotelHomepage.changeWindow("survey");
    //3. Click on Submit button
    await feedbackPage.clickSubmitButton();

    //4.Verify “Please fill in the required information highlighted below.” error is displayed.

    expect(
      await feedbackPage.isErrorMessageDisplayed(),
      "“Please fill in the required information highlighted below.” error is NOT displayed"
    ).to.be.true;
  });

  it.only("Verify user can submit feedback after completing the feedback form", async () => {
    /**
     * 1.Launch Hotels.com
     * 2. Click on Feedback
     * -> switch to feedback window
     * 3.Select any OVERALL rating:
     * 4.Select any rating to "recommend Hotels.com to a friend or colleague?":
     * 5.Select any Topic
     * 6.Enter any comment
     * 7.Enter email address
     * 8. Click submit form
     * 9. Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed
     */

    await browser.url("https://www.hotels.com/");

    await hotelHomepage.clickFeedbackButton();

    await hotelHomepage.changeWindow("survey");

    await feedbackPage.selectOverallRating4();

    await feedbackPage.recommendSite();

    await feedbackPage.selectTopic("Compliment");

    await feedbackPage.enterComment("Amazing site");

    await feedbackPage.enterEmail("abcd@test.com");

    await feedbackPage.clickSubmitButton();

    expect(
      await feedbackPage.isSubmitFeedbackMessageDisplayed(),
      "“THANK YOU FOR YOUR FEEDBACK.“ is NOT displayed"
    ).to.be.true;
  });
});
