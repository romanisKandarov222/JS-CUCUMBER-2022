const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on Dates$/, async function() {
    await homePage.openCalendar();
    await browser.pause(1000);
});


When(/^I go to current month if not displayed$/, async function() {
    await homePage.checkIsCurrentMonth();
    await browser.pause(1000);
});


Then(/^I verify For current month past dates and back button are disabled$/, async function() {
    expect(await homePage.isPastDatesInCalendarEnabled(), 'Past dates are NOT disabled').to.be.false;
    await browser.pause(1000);

    expect(await homePage.isBackArrowInCalendarEnabled(), 'Back-arrow button is NOT disabled').to.be.false;
    await browser.pause(1000);
});