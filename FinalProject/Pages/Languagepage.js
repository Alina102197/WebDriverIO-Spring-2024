class Languagepage {
  //Locators:
  languageSelectorLocator = "#language-selector";
  saveButtonLocator = "//button[text()='Save']";
  regionSelectorLocator = "#site-selector";
  saveButtonEspagnol = "//button[text()='Guardar']";

  //Functions:
  async selectDesiredLanguage(language) {
    const selectLanguage = await $(this.languageSelectorLocator);
    await selectLanguage.waitForExist();
    await selectLanguage.selectByVisibleText(language);
  }

  async clickSaveButton() {
    await $(this.saveButtonLocator).waitForClickable();
    await $(this.saveButtonLocator).click();
  }

  async clickGuardarButton() {
    await $(this.saveButtonEspagnol).waitForClickable();
    await $(this.saveButtonEspagnol).click();
  }
}

module.exports = new Languagepage();
