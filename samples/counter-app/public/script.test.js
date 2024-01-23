const expect = require("chai").expect;
const describe = require("mocha").describe;
const it = require("mocha").it;
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
global.document = new JSDOM().window.document;
const { counterValue } = require('./script');

describe("Unit testing", function () {
  it("Intialization", async function () {
    expect(counterValue).to.eq(0);
  });
});