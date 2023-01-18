const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on Sign in$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});


When(/^I click on Sign up$/, async function() {
    await homePage.clickSignUp();
    await browser.pause(1000);
});


When(/^I type "user@test.com" in Email address$/, async function() {
    await homePage.enterEmail();
    await browser.pause(1000);
});

When(/^I enter fUser in First name$/, async function() {
    await homePage.signUpFormEnterFirstName();
    await browser.pause(1000);
});

When(/^I enter lUser in Last name$/, async function() {
    await homePage.signUpFormEnterLastName();
    await browser.pause(1000);
});

When(/^I type (.+) in Password$/, async function(data) {
    await homePage.signUpFormPwd(data);
    await browser.pause(4000);
});

Then(/^I verify (.+) message is displayed$/, async function(data) {
    expect(await homePage.weakPwdMeterMsg(), "Expected messages are NOT displayed").to.be.equal(data);
    browser.pause(1000);
});

Then(/^I verify (.+) text is displayed$/, async function(data) {
    expect(await homePage.weakPwdMeterMsgSecond(), "Expected messages are NOT displayed").to.be.equal(data);
    browser.pause(1000);
});

