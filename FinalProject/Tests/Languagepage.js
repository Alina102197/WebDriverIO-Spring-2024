const { expect } = require("chai");
const hotelHomepage = require("../Pages/Hotelhomepage");
const language = require("../Pages/Languagepage");
describe("Language", () => {
  it("Verify language can be changed successfully", async () => {
    /**
     * 1. Go to hotels.com
     * 2. Click on “English“ language
     * 3. Select language other than English (in my case Español (Estados Unidos)) in Language dropdown
     * 4. Click on “Save“ button
     * 5. Verify the selected language is displayed on Homepage (in my case “Español”)
     * 6. Click on selected language (in my case “Español”)
     * 7. Select “English” in Language dropdown
     * 8. Click on Save button of other language
     * 9. Verify “English” is displayed on Homepage
     *
     */

    // 1. Go to hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();

    //2. Click on “English“ language
    await hotelHomepage.clickLanguageButton();
    await browser.pause(5000);

    //3. Select language other than English (in my case Español (Estados Unidos)) in Language dropdown
    await language.selectDesiredLanguage("Español (Estados Unidos)");
    await browser.pause(5000);

    //4. Click on “Save“ button:
    await language.clickSaveButton();
    await browser.pause(5000);

    //5.Verify the selected language is displayed on Homepage (in my case “Español”)
    expect(
      await hotelHomepage.getDisplayedLanguageText(),
      "Español is not displayed on Homepage"
    ).to.equal("Español");

    //6. Click on selected language (in my case “Español”)
    await hotelHomepage.clickLanguageButton();
    await browser.pause(5000);

    //7. Select “English” in Language dropdown
    await language.selectDesiredLanguage("English (United States)");
    await browser.pause(5000);

    //8. Click on Save button of other language
    await language.clickGuardarButton();
    await browser.pause(5000);

    //9. Verify “English” is displayed on Homepage
    expect(
      await hotelHomepage.getDisplayedLanguageText(),
      "English is not displayed on Homepage"
    ).to.equal("English");
  });
});
