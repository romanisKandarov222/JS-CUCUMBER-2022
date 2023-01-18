const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on "Sign in link"$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});


When(/^I click on Sign in button$/, async function() {
    await homePage.clickSignInButton();
    await browser.pause(1000);
});


When(/^I enter invalid email address$/, async function() {
    await homePage.enterInvalidEmail();
    await browser.pause(1000);
});

When(/^I enter invalid password$/, async function() {
    await homePage.enterInvalidPwd();
    await browser.pause(1000);
});

When(/^I click on "Sign in" button$/, async function() {
    await homePage.clickSubmitSignIn();
    await browser.pause(5000);
});


Then(/^I verify error "Email and password don't match. Please try again." message is displayed.$/, async function() {
    expect(await homePage.invalidCredentials(), "Error message for invalid credentials is NOT displayed").to.be.true;
});