const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I search "(.+)" as a destination$/, async function(data) {
    await homePage.enterDestination(data);
    await browser.pause(2000);
    await homePage.selectFromSuggestedDestinations(data);
});


When(/^I enter Check-in date as Feb-10-2023$/, async function() {
    await homePage.chooseCheckInDate();
    await browser.pause(1000);
});

When(/^I enter Check-out date as Feb-16-2023$/, async function() {
    await homePage.chooseCheckOutDate();
    await browser.pause(1000);
});


When(/^I click on Search button$/, async function() {
    await homePage.clickSearchButton();
    await browser.pause(5000);
});

When(/^I click on 5\* from star-rating filter$/, async function() {
    await homePage.selectFiveStarRating();
    await browser.pause(5000);
});

Then(/^I verify all hotels in search results are \*-rated as selected in above step$/, async function() {
    expect(await homePage.verifyFiveStarRating(), '5-star filter doesn\'t work as expected').to.be.true;  
});

When(/^I select "(.+)" from sort-by dropdown$/, async function(data) {
    await homePage.selectPriceSorting(data);
    await browser.pause(1000);
});

Then(/^I verify all hotels are listed in increasing price order$/, async function() {
    expect(await homePage.verifyPriceSorting(), 'Price (low to high) filter doesn\'t work as expected').to.be.true;  
});


