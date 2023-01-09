const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on Sign In$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});


When(/^I click "Feedback"$/, async function() {
    await homePage.clickFeedbackLink();
    await browser.pause(1000);
});

When(/^I click on Submit button$/, async function() {
    await homePage.switchToDirectWordHandle();
    await homePage.clickSubmitButton();
    await browser.pause(2000);
});

Then(/^I verify error is displayed when user submits the empty feedback form$/, async function() {
    expect(await homePage.isEmptyFeedbackFormErrorDisplayed(), 'Error is NOT displayed when user submits the empty feedback form').to.be.true;
    await browser.pause(2000);
});

Then(/^I verify star boxes section is in a red dotted box$/, async function() {
    expect(await homePage.isErrorRedDotsDisplayed(), 'Star boxes section is NOT in a red dotted box').to.be.true;
    await browser.pause(2000);
});