const homepage = require("../pageobjects/homepageTask1");

describe("Test Case - 1. Dynamic Content", function () {
  this.timeout(10000);
  before(async function () {
    const baseurl = "http://the-internet.herokuapp.com/dynamic_content";
    await homepage.go_to_url(baseurl);
  });

  after(async function () {
    // await homepage.quit();
  });

  it("Check is available page", async function () {
    await homepage.check_is_available();
  });

  it("Check the same images", async function () {
    await homepage.checkTheSameImages(2);
  });
});
