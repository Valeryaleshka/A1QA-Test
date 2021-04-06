const BasePage = require("./basepage");

class HomePageTask2 extends BasePage {
  constructor() {
    super();
  }

  async dropFile(filePath) {
    const fileInput = await this.driver.findElement(this.By.id("file-upload"));
    await fileInput.sendKeys(filePath);
  }

  async isFileUploaded() {
    this.driver.wait(
      this.webdriver.until.elementLocated(this.webdriver.By.css("h3")),
      20
    );

    const fileUploadedLable = await this.driver.findElement(this.By.css("h3"));
    const fileUploadedLableText = await fileUploadedLable.getAttribute(
      "innerText"
    );
    return new Promise((resolve, reject) => {
      if (fileUploadedLableText == "File Uploaded!") {
        console.log("File Uploaded!");
        resolve();
      } else {
        console.log("File not Uploaded!");
        reject();
      }
    });
  }

  async checkFileName(fileName) {
    this.driver.wait(
      this.webdriver.until.elementLocated(
        this.webdriver.By.id("uploaded-files")
      ),
      20
    );

    const filenameDisplayed = await this.driver.findElement(
      this.By.id("uploaded-files")
    );
    const uploadedfileName = await filenameDisplayed.getAttribute("innerText");

    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (uploadedfileName == fileName) {
          resolve();
        }
        reject();
      }, 1000);
    });
  }
}

module.exports = new HomePageTask2();
