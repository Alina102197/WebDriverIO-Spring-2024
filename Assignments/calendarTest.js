describe("Autosuggestion Scenario", () => {
  it("Verify user can select value from auto-suggestion", async () => {
    // 1. Launch hotels.com:

    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //2. Enter "new" inthe destination

    await $("//button[@aria-label='Where to?']").click();
    await browser.pause(3000);

    await $("//input[@id='destination_form_field']").setValue("new");
    await browser.pause(3000);

    //3. select "Newport" from auto suggestion

    // First we create a locator to get all auto-suggestion elements
    //Then we use $$(<findElement>) to get all auto-suggestion-elements in an array

    const allSuggestion = await $$(
      '//button[@data-stid="destination_form_field-result-item-button"]'
    );

    // Then we use loop (for-of):
    //!!!!! city-vales are present as attribute values!!!

    for (const suggestion of allSuggestion) {
      const suggestionText = await suggestion.getAttribute("aria-label");
      if (suggestionText.startsWith("Newport")) {
        await suggestion.click();
        break;
      }
    }
    await browser.pause(3000);

    //4. Pick Check-in date ar July-23

    //!!!! Date-vales are present as text values!!!

    await $(
      "//button[@data-testid='uitk-date-selector-input1-default']"
    ).click(); // we click on calendar button

    const today = new Date();
    const targetDate = new Date();
    targetDate.setDate(today.getDate() + 37);

    console.log(targetDate);

    // Extract day, month, and year from the target date
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString("default", { month: "long" }); // e.g., "January"
    const targetYear = targetDate.getFullYear();

    // Navigate to the correct month and year
    while (true) {
      const currentMonthYear = await $(
        "//span[text()='December 2024']"
      ).getText(); // Replace with your calendar header selector
      if (
        currentMonthYear.includes(targetMonth) &&
        currentMonthYear.includes(targetYear.toString())
      ) {
        break;
      }
    }

    // Select the target day
    const dayElement = await $(
      `//td[contains(@class, 'day') and text()="${targetDay}"]`
    ); // Replace with your day cell selector
    await dayElement.click();

    await browser.pause(5000);

    const doneButton = await $("//button[@data-stid='apply-date-selector']");
    await browser.pause(5000);
  });
});
