const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on "Sign In"$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});


When(/^I click Feedback$/, async function() {
    await homePage.clickFeedbackLink();
    await browser.pause(1000);
});

When(/^I select "3-star" rating$/, async function() {
    await homePage.switchToDirectWordHandle();
    await browser.pause(1000);
    await homePage.chooseRating();
    await browser.pause(1000);
});

When(/^I enter "Excellent service" comment$/, async function() {
    await homePage.enterComment();
    await browser.pause(1000);
});


When(/^I select "(.+)" for "(.+)"$/, async function(data, field) {
    await homePage.selectDataInField(data, field);
    await browser.pause(1000);
});


When(/^I click Submit button$/, async function() {
    await homePage.clickSubmitButton();
    await browser.pause(1000);
});

Then(/^I verify "THANK YOU FOR YOUR FEEDBACK." is displayed$/, async function() {
    expect(await homePage.isSuccessfullySubmittedFdbDisplayed(), 'Msg for submitted feedback is NOT displayed').to.be.true;
    await browser.pause(1000);
});