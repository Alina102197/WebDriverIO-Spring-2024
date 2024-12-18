class Destinationpage {
  //Locators:
  starRatingLocator = "//label[@for='ShoppingSelectableFilterOption-star-40']";
  sortByDropdownLocator = "#sort-filter-dropdown-sort";
  sortByOptionsLocators = "//select[@id='sort-filter-dropdown-sort']//option";

  //Functions:
  async clickStarRating() {
    await $(this.starRatingLocator).waitForClickable();
    await $(this.starRatingLocator).click();
  }

  async selectFromSortByDropdown(text) {
    await $(this.sortByDropdownLocator).selectByVisibleText(text);
  }
}

module.exports = new Destinationpage();
