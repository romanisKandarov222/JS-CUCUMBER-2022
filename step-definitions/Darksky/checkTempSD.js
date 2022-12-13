const {Given, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const Frontpage = require('../../POM/Darksky/Frontpage');


const frontpage = new Frontpage();


When(/^I verify feel-like-temp is between low and high temp values$/, async function () {
    expect(await frontpage.compareResults(), 'Feel-like-temp is NOT between low and high').to.be.true;
});



