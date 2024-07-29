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

    const allJulyDates = await $$(
      "//span[text()='July 2024']/following-sibling::table//div[@role='button' and @aria-disabled='false']"
    );

    // the part :"and @aria-disabled='false']" is for being able to access only available dates(from current day)!!!

    for (const JulyDate of allJulyDates) {
      const dateValue = await JulyDate.getText();
      if (dateValue.localeCompare("23") === 0) {
        await JulyDate.click();
        break;
      }
    }

    await browser.pause(3000);

    //5. Pick check-out date July-28

    for (const JulyDate of allJulyDates) {
      const dateValue = await JulyDate.getText();
      if (dateValue.localeCompare("28") === 0) {
        await JulyDate.click();
        break;
      }
    }

    //6. Click done button:

    const doneButton = await $("//button[@data-stid='apply-date-selector']");

    await browser.pause(3000);
  });
});
