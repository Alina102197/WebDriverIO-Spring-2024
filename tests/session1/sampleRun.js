//describe refers text suite
describe("Sample test suite", () => {
  //IT refers a test case
  it("Sample testcase", async () => {
    await browser.url("http://google.com");
    await browser.pause(10000);
  });
});
