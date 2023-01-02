const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');


const homePage = new HomePage();


When(/^I navigate to "More travel"$/, async function() {
    homePage.clickMoreTravel();
});

When(/^I click gift cards option from dropdown"$/, async function() {
    homePage.chooseGiftCardInDropDown();
});