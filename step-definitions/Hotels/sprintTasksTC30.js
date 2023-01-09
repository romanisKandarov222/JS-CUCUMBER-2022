const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I scroll to "Get the app" button$/, async function() {
    await homePage.scrollToGetTheAppButton();
    await browser.pause(1000);
});


When(/^I enter (.+) in Phone number$/, async function(data) {
    await homePage.enterPhoneData(data);
    await browser.pause(1000);
});

When(/^I click on "Get the app" button$/, async function() {
    await homePage.clickGetTheAppButton();
    await browser.pause(1000);
});

Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function() {
    expect(await homePage.isErrorForWrongPhoneNumDisplayed(), 'Error for invalid number is NOT displayed').to.be.true;
});