const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: 5000 });

class BasePage {
  constructor() {
    this.webdriver = webdriver;
    this.driver = driver;
    this.By = By;
  }

  async go_to_url(theURL) {
    await this.driver.get(theURL);
  }

  async quit() {
    await this.driver.quit();
  }

  async check_is_available() {
    const title = await this.driver.getTitle();
    return new Promise((resolve, reject) => {
      if (title) {
        console.log("Page is available");
        resolve();
      } else {
        console.log("Page is not available");
        reject();
      }
    });
  }

  async clickById(id) {
    await driver.findElement(By.id(id)).click();
  }
}

module.exports = BasePage;
