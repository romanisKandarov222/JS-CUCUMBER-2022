const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');
const moment = require("moment/moment");

const homePage = new HomePage();

When(/^I click Sign in link$/, async function() {
    await homePage.clickSignIn();
    await browser.pause(1000);
});

When(/^I click Sign up link$/, async function() {
    await homePage.clickSignUp();
    await browser.pause(1000);
});

When(/^I click "Terms and Conditions" link$/, async function() {
    await homePage.clickTermsLink();
    await browser.pause(1000);
    await homePage.switchToDirectWordHandle();
});

Then(/^I verify "Terms and Conditions" page opens in new tab$/, async function() {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'Terms and Conditions does NOT opened in new tab').to.be.equal(2);
    expect(await homePage.verifyTermsOpenedInNewPage(), 'Terms and Conditions title does NOT displayed').to.be.true;
    await browser.pause(1000);
});

Then(/^I verify "Last revised" date format as expected: MM\/DD\/\YY$/, async function() {
    expect(await homePage.isLastRevisedDateFormatAsExpected(), 'Last revised element has NOT expected date format').to.be.true;
    await browser.pause(1000);
    
});

When(/^I click "Privacy Statement" link$/, async function() {
    await homePage.switchToCreateAnAccount();
    await browser.pause(1000);
    await homePage.clickPrivacyLink();
    await browser.pause(1000);
    await homePage.switchToPrivacyStatement();
});

Then(/^I verify "Privacy Statement" page opens in new tab$/, async function() {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'Privacy Statement does NOT opened in new tab').to.be.equal(3);
    expect(await homePage.verifyPrivacyOpenedInNewTab(), 'Privacy Statement title does NOT displayed').to.be.true;
    await browser.pause(1000);
});


Then(/^I verify "Last Updated" date format: expected format: dd MMMM, yyyy$/, async function() {
    expect(await homePage.isLastUpdatedFormatAsExpected(), 'Last Updated element has NOT expected date format').to.be.true;
    await browser.pause(1000);
});

