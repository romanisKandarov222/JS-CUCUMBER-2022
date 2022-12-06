const {Given, When} = require("@wdio/cucumber-framework");
const LoginPage = require('../../POM/Facebook/LoginPage');
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const {expect} = require("chai");

// Glue Code
/**
* GC is a regular expression which helps to map Scenario-steps
*/

const loginPage = new LoginPage();
const loginErrorPage = new LoginErrorPage();

Given(/^I am on facebook$/, async function() {
    await browser.url('https://www.facebook.com');
    await browser.pause(3000);
});

/* When(/^I type '(.*)' as username$/, async function(username) {
    await loginPage.enterLoginEmail(username);
});

When(/^I type '(.*)' as password$/, async function(password) {
    await loginPage.enterLoginPassword(password);
}); */


When(/^I type '(.*)' as (.*)$/, async function(data, field) {
    switch(field.toLowerCase()) {
        case 'username':
            await loginPage.enterLoginEmail(data);
            break;
        case 'password':
            await loginPage.enterLoginPassword(data);
            break;      
        default:
            break;
    }
});


When(/^I click login button$/, async function () {
    await loginPage.clickLoginInButton();
    await browser.pause(2000);
});

When(/^I verify error is displayed$/, async function () {
    expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login page error is NOT displayed').to.be.true;
    await browser.pause(1000);
});