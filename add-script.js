const Nightmare = require("nightmare");
const vo = require("vo");
const nightmare = Nightmare({ show: true });
const password = require("./password");
const fs = require("fs");
const emailList = require("./email-list.js");

var run = function*() {
  yield nightmare
    .goto("https://www.linkedin.com/")
    .type("input#login-email", "anthonytxie@gmail.com")
    .type("input#login-password", password)
    .click("input#login-submit")
    .wait(2000);

  var titles = [];
  for (var i = 0; i <= 200; i++) {
    yield nightmare.goto(emailList[i]).wait(3000);
    try {
      yield nightmare
        .click("button.pv-s-profile-actions--connect")
        .wait(5000)
        .click("button.ml1");
    } catch (e) {
      continue;
    }
  }
};

data = [];

vo(run)(function(err, titles) {
  console.dir("done");
});
