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

    await browser.pause(4000);

    //2. enter abcd@text.com as login email

    const loginEmailElement = await $("#email");

    loginEmailElement.setValue("abcd@text.com");

    await browser.pause(4000);

    //3.enter test@1234 as passwords:
    const loginPassElement = await $("input[name=pass]");
    loginPassElement.setValue("test@1234");

    await browser.pause(4000);

    //4.click 'Log In ' button:
    const logInButtonElement = await $("button=Log In");
    logInButtonElement.click();

    await browser.pause(30000);
  });

  it.only("Verify forgot password on messenger takes user to find your account", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click on messenger link
     * 3. Click on forgot your password
     * 4. Verify user lands on "Find your account" page
     */

    //1. Launch facebook.com:

    await browser.url("https://www.facebook.com/");

    await browser.pause(3000);

    // 2. Click on messenger link:

    const messengerLinkElement = await $("=Messenger");
    await messengerLinkElement.click();

    await browser.pause(3000);

    //3. Click on forgot your password:

    const fypLinkElement = await $("span[dir=auto]");
    await fypLinkElement.click();

    await browser.pause(3000);

    //4. Verify user lands on "Find your account" page:

    // const findYourAccountLinkElement = await $("<h2>");
  });
});
