const BasePage = require("./basepage");

class HomePageTask1 extends BasePage {
  constructor() {
    super();
  }

  async checkTheSameImages(theSamePicturesNumber) {
    const content = await this.driver.findElement(this.By.id("content"));
    const images = await content.findElements(this.By.css("img"));
    const imagessrc = [];
    for (let i = 0; i < images.length; i++) {
      imagessrc.push(await images[i].getAttribute("src"));
    }
    const max = this.getTheSameCountOfItems(imagessrc);

    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (max >= theSamePicturesNumber) {
          console.log(
            "Page got minimum " + theSamePicturesNumber + " identical pictures"
          );
          resolve();
        } else {
          console.log("No identical pictures");
          reject();
        }
      }, 2000); // SetTimeout for human visual control;
    });
  }

  getTheSameCountOfItems = (arr) => {
    const temp = [];
    let prev;

    arr.sort();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        temp.push(1);
      } else {
        temp[temp.length - 1]++;
      }
      prev = arr[i];
    }

    return this.getMaxOfArray(temp);
  };

  getMaxOfArray = (numArray) => {
    return Math.max.apply(null, numArray);
  };
}
module.exports = new HomePageTask1();
