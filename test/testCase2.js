const homepage = require("../pageobjects/homepageTask2");
const fileName = "base.png";

describe("Test Case 2. Upload Image ", function () {
  this.timeout(10000);

  before(async function () {
    let baseurl = "http://the-internet.herokuapp.com/upload";
    await homepage.go_to_url(baseurl);
  });

  after(async function () {
    await homepage.quit();
  });

  it("Check is available page", async function () {
    await homepage.check_is_available();
  });

  it("Check Drop File", async function () {
    const filePath = "C:\\" + fileName; // Prescribe absolute PATH to file from assents folder
    await homepage.dropFile(filePath);
    await homepage.clickById("file-submit");
  });

  it("File Uploaded!", async function () {
    await homepage.isFileUploaded();
  });

  it("Check File Name on screen", async function () {
    await homepage.checkFileName(fileName);
  });
});
