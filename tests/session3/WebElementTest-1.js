describe("Basic locator strategies", () => {
  it("Verify if user can enter login credenatials and click login button", async () => {
    /***
     * 1. launch facebook.com
     * 2.enter abcd@text.com as login email
     * 3.enter test@1234 as passwords
     * 4.click 'Log In ' button
     */

    //1. launch facebook.com

    await browser.url("https://www.facebook.com/");

    //2. enter abcd@text.com as login email

    const loginEmailElement = await $("email");
    loginEmailElement.setValue("abcd@text.com");
  });
});
