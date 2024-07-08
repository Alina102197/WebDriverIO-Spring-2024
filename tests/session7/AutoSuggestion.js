describe("Autosuggestion Scenario", () => {
  it("Verify user can select value from auto-suggestion", async () => {
    // 1. Launch hotels.com:

    await browser.url("https://www.hotels.com/");
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

    for (const suggestion of allSuggestion) {
      const suggestionText = await suggestion.getAttribute("aria-label");
      if (suggestionText.startsWith("Newport")) {
        await suggestion.click();
        break;
      }
    }
    await browser.pause(3000);
  });
});
