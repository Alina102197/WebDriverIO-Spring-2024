describe(" ", () => {
  it("Multiple Windows", async () => {
    /**
     * 1. Launch facebook.com
     * 2. Click on Meta Pay
     * 3. Click Meta Store
     * 4. Click Meta AI
     * 5. Click Instagram
     * 6. Verify on Instagram Window: Instagram Heading is displayed
     */

    // 1. Launch facebook.com:

    await browser.url("https://www.facebook.com/");

    await browser.pause(3000);

    // Click on Meta Pay:

    await $("=Meta Pay").click();

    await browser.pause(3000);

    // 3. Click Meta Store:

    await $("=Meta Store").click();

    await browser.pause(3000);

    // 4. Click Meta AI

    await $("=Meta AI").click();

    await browser.pause(3000);

    // 5. Click Instagram:

    await $("=Instagram']").click();

    await browser.pause(3000);

    /**
     * getWindowHandles()
     *  this function return ALL window handles opened by automation code
     *
     * switchToWindow()
     *  input of this function: handle
     *  the function links the browser with the new handle
     */

    const allHandles = await browser.getWindowHandles();

    /** Now we will check the windows one by one, and as soon as I connect with the needed window (Instagram)
     * we will stop the loop
     */

    for (const handle of allHandles) {
      await browser.switchToWindow(handle);
      const title = await browser.getTitle();
      if (title.localeCompare("Instagram") === 0) {
        break;
      }
    }

    console.log(await browser.getUrl()); // just to see that we are on the right window

    await browser.pause(3000);
  });
});
