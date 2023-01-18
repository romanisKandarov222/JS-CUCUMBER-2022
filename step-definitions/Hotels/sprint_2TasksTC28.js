const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on Travelers$/, async function() {
    await homePage.clickTravelers();
    await browser.pause(1000);
});


When(/^I select Children as (.+)$/, async function(data) {
    await homePage.increaseChildCount(data);
    await browser.pause(1000);
});


Then(/^I verify Children-age dropdown are (.+)$/, async function(data) {
    expect(await homePage.verifyChildDropdown(), "Children-age dropdown are NOT " + (data)).to.be.true;
});

Then(/^I verify plus-button is (.+)$/, async function(data) {
    expect(await homePage.verifyPlusButtonState(), "Plus-button is " + data).to.be.true;
});


Then(/^I verify minus-button is (.+)$/, async function(data) {
    expect(await homePage.verifyMinusButtonState(), "Minus-button is " + data).to.be.true;
});