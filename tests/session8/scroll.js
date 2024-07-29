describe("Scroll scenario", () => {
  it("User can scroll up to a specific webElement", async () => {
    /**
     * 1. Launch hotels.com
     * 2. find the webElement "Top destinations"
     * 3. use scrollIntoView()
     */

    //1.Launch hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

    //2. find the webElement "Top destinations":

    const topDestinationsHeading = await $("//h3[text()='Top destinations']");

    topDestinationsHeading.scrollIntoView(false);

    await browser.pause(5000);
  });
});
