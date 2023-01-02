const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');


const homePage = new HomePage();


When(/^I change language to (.+)$/, async function (languageOption) {
    await homePage.changeLanguage(languageOption);
});


Then(/^I verify language got changed to (.+)$/, async function (updatedLanguage) {
    const languageOnWeb = await homePage.getWebLanguage();
    expect(languageOnWeb, 'Actual web language is NOT updated').to.equal(updatedLanguage);
});  