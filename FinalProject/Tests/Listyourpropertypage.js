const { expect } = require("chai");
const hotelHomepage = require("../Pages/Hotelhomepage");
const listYourProperty = require("../Pages/Listyourpropertypage");
const privateResidence = require("../Pages/Privateresidencepage");
describe("List your property", () => {
  it('Verify "List your Property" flow', async () => {
    /**
     * 1. Go to hotels.com
     * 2. Click on “List your property”
     * -> Verify “What would you like to list?” is displayed
     * ->Verify “Lodging“ and “Private residence“ options are displayed
     * 3. Click on “Private residence“
     * -> Verify ”Step 1 of 3” is displayed
     * 4. Enter “4“ as bedroom
     * 5. Enter “2.5“ as bathroom
     * 6. Click on “Next” button
     * -> Verify ”Step 2 of 3” is displayed
     * -> Verify “Where is your property located?” is displayed
     * 7. Enter “121” in address
     * 8. Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
     * -> Verify map is displayed
     * -> Verify pin in map is displayed
     * -> Verify “Move the pin to adjust the location of your property.“ is displayed below graph
     */

    //1. Go to hotels.com
    await browser.url("https://www.hotels.com/");
    await browser.maximizeWindow();

    //2. Click on “List your property”
    await hotelHomepage.clickListYourPropertyButton();

    //-> Verify “What would you like to list?” is displayed
    //First switchwindow
    await hotelHomepage.changeWindow("list");

    expect(
      await listYourProperty.isHeaderDisplayed(),
      "“What would you like to list?” NOT is displayed"
    ).to.be.true;

    //->Verify “Lodging“ and “Private residence“ options are displayed
    expect(
      await listYourProperty.isLodgingDisplayed(),
      "Lodging is NOT displayed"
    ).to.be.true;

    expect(
      await listYourProperty.isPrivateResidenceDisplayed(),
      "Private residence is NOT displayed"
    ).to.be.true;

    //close container if displayed:

    await listYourProperty.clickContainer();

    //3. Click on “Private residence“
    await listYourProperty.clickPrivateResidence();

    // -> Verify ”Step 1 of 3” is displayed:
    expect(
      await listYourProperty.isStep1of3Displayed(),
      "”Step 1 of 3” is NOT displayed"
    ).to.be.true;

    //4. Enter “4“ as bedroom

    await browser.pause(7000);
    await listYourProperty.clickContainer();

    //close advertisment :
    await browser.pause(7000);
    await listYourProperty.clickAdvertisementContainer();

    await listYourProperty.selectBedroomNr("4");

    //5. Enter “2.5“ as bathroom
    // await listYourProperty.selectBathroomNr("2.5");

    //6. Click on “Next” button:
    await listYourProperty.clickNextButton();

    //-> Verify ”Step 2 of 3” is displayed
    expect(
      await listYourProperty.isStep2of3Displayed(),
      "”Step 2 of 3” is NOT displayed"
    ).to.be.true;
    //-> Verify “Where is your property located?” is displayed

    expect(
      await listYourProperty.isWhereIsYourPlaceLocatedDisplayed(),
      "“Where is your property located?” is NOT displayed"
    ).to.be.true;

    await browser.pause(10000);

    //7. Enter “121” in address
    await listYourProperty.enterAddress("121");
    await browser.pause(5000);

    //8. Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
    await listYourProperty.chooseAddressFromAutoSuggestion(
      "1215 Commerce Drive"
    );

    await browser.pause(5000);

    //-> Verify map is displayed
    expect(await listYourProperty.isMapDisplayed(), "map is NOT displayed").to
      .be.true;

    //-> Verify pin in map is displayed
    expect(
      await listYourProperty.isPinDisplayed(),
      "pin in map is NOT displayed"
    ).to.be.true;

    //-> Verify “Move the pin to adjust the location of your property.“ is displayed below graph
    expect(
      await listYourProperty.isMapFooterDisplayed(),
      "“Move the pin to adjust the location of your property.“ NOT is displayed"
    ).to.be.true;
  });
});
