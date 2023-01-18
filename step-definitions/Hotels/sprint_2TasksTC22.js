const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on SignIn-link$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});


When(/^I click on SignUp-link$/, async function() {
    await homePage.clickSignUp();
    await browser.pause(1000);
});


When(/^I enter invalid (.+) with at least "@" symbol$/, async function(data) {
    await homePage.inputEmail(data);
    await browser.pause(1000);
});

Then(/^I verify invalid pwd error is displayed (.+)$/, async function(data) {
    expect(await homePage.invalidEmailVerificationError(), 'Invalid email error does NOT displayed').to.be.equal(data);
    await browser.pause(1000);
});

When(/^I enter invalid first (.+)$/, async function(data) {
    await homePage.inputFirstName(data);
    await browser.pause(1000);
});

Then(/^I verify fname error is displayed (.+)$/, async function(data) {
    expect(await homePage.invalidFirstNameVerificationError(), 'Invalid first name error does NOT displayed').to.be.equal(data);
    await browser.pause(1000);
});

When(/^I enter invalid last (.+)$/, async function(data) {
    await homePage.inputLastName(data)
    await browser.pause(1000);
});

Then(/^I verify lname error is displayed (.+)$/, async function(data) {
    expect(await homePage.invalidLastNameVerificationError(), 'Invalid last name error does NOT displayed').to.be.equal(data);
    await browser.pause(1000);
});

When(/^I enter pwd (.+)$/, async function(data) {
    await homePage.signUpFormPwd(data);
    await browser.pause(1000);
});

Then(/^I verify "Keep me signed in" checkbox is displayed and enabled$/, async function() {
    expect(await homePage.isSignUpCheckBoxDisplayed(), 'Check box is NOT displayed').to.be.true;
    await browser.pause(1000);
});

Then(/^I verify "Continue" checkbox is displayed but NOT enabled$/, async function() {
    expect(await homePage.isContinueButtonDisplayedAndDisabled(), 'Continue button is NOT displayed and disabled').to.be.true;
    await browser.pause(1000);
});