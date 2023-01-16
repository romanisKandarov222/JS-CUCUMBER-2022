const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on Sign-in$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});


When(/^I click on Sign-up$/, async function() {
    await homePage.clickSignUp();
    await browser.pause(1000);
});


When(/^I type "user@test.com" in Email$/, async function() {
    await homePage.enterEmail();
    await browser.pause(1000);
});

When(/^I enter fUser in First-name$/, async function() {
    await homePage.signUpFormEnterFirstName();
    await browser.pause(1000);
});

When(/^I enter lUser in Last-name$/, async function() {
    await homePage.signUpFormEnterLastName();
    await browser.pause(1000);
});

When(/^I type (.+) in Password-field$/, async function(data) {
    await homePage.signUpFormPwd(data);
    await browser.pause(1000);
});

Then(/^I verify Password strength bar is (.+) filled$/, async function(data) {
    expect(await homePage.verifyPwdStrengthBarProgress(), "Password strength bar filled as expected").to.be.equal(data);
    browser.pause(1000);
});

Then(/^I verify Password strength message is (.+)$/, async function(data) {
    expect(await homePage.verifyPwdStrengthMsg(), "Password strength message is NOT as expected").to.be.equal(data);
    browser.pause(1000);
});