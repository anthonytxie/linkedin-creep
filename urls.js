const orgs = require("./orgs");

pages = [];
for (var i = 0; i < orgs.length; i++) {
  for (var x = 1; x <= 10; x++) {
    var url =
      "https://www.linkedin.com/search/results/index/?keywords=crypto&origin=GLOBAL_SEARCH_HEADER&page=" +
      i;
    pages.push(url);
  }
}

module.exports = pages;
