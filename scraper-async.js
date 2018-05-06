const Nightmare = require("nightmare");
const vo = require("vo");
const nightmare = Nightmare({ show: true });
const password = require("./password");
const fs = require("fs");

var run = function*() {
  yield nightmare
    .goto("https://www.linkedin.com/")
    .type("input#login-email", "leyoncorp@gmail.com")
    .type("input#login-password", password)
    .click("input#login-submit")
    .wait(2000);

  var titles = [];
  for (var i = 0; i < 900; i++) {
    yield nightmare
      .goto(
        `https://www.linkedin.com/search/results/index/?keywords=crypto&origin=GLOBAL_SEARCH_HEADER&page=${i}`
      )
      .wait(2000)
      .scrollTo(5000, 0)
      .wait(2000);
    var title = yield nightmare.evaluate(() => {
      var elements = Array.from(
        document.getElementsByClassName("search-result__info")
      );
      return elements.map(function(element) {
        return {
          name: element.children[0].querySelector(".actor-name").innerText,
          href: element.children[0].href,
          title: element.children[1].innerText
        };
      });
    });
    fs.readFile("linkedin-profiles.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let linkedinArray = JSON.parse(data);
        linkedinArray.push({ ...title, page: i });
        let stringifyData = JSON.stringify(linkedinArray);
        fs.writeFile("linkedin-profiles.json", stringifyData, "utf8", () => {
          console.log("wrote to file");
        });
      }
    });
  }

  return titles;
};

data = [];

vo(run)(function(err, titles) {
  console.dir("done");
});
