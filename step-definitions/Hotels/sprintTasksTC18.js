const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on "Travelers"$/, async function() {
    await homePage.clickTravelers();
    await browser.pause(1000);
});


When(/^I select "Adults" as (.+)$/, async function(data) {
    await homePage.increaseAdultsTravelers(data);
    await browser.pause(1000);
});

When(/^I select "Children" as (.+)$/, async function(data) {
    await homePage.increaseChildrenTravelers(data);
    await browser.pause(1000);
});

When(/^I select first child age: 4$/, async function () {
    await homePage.setFirstChildAge();
    await browser.pause(1000);
});

When(/^I select second child age: Under 1$/, async function () {
    await homePage.setSecondChildAge();
    await browser.pause(1000);
});

When(/^I select third child age: 7$/, async function () {
    await homePage.setThirdChildAge();
    await browser.pause(1000);
});

When(/^I click done$/, async function () {
    await homePage.clickDoneButton();
    await browser.pause(1000);
});

Then(/^I verify total number of guests in sum of adults and children as same as selected$/, async function() {
    expect(await homePage.totalGuestsNumber(), "Total number of guests in sum of adults and children is NOT same as selected").to.be.true;
});