const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on "English" language$/, async function() {
    await homePage.clickLanguageButton();
    await browser.pause(1000);
});

When(/^I select "Español" in Language dropdown$/, async function() {
    await homePage.clickLanguageOption();
    await browser.pause(1000);
});

When(/^I click on "Save" button$/, async function() {
    await homePage.clickLangSaveButton();
    await browser.pause(2000);
});

Then(/^I verify "Español" is displayed$/, async function() {
    expect(await homePage.isEspanolLangDisplayed(), '“Español” language is NOT displayed').to.be.true;
    await browser.pause(2000);
});




When(/^I click on "Español" language$/, async function() {
    await homePage.clickEspanolLanguageButton();
    await browser.pause(1000);
});

When(/^I select "English" in Language dropdown$/, async function() {
    await homePage.clickLanguageOptionEnglish();
    await browser.pause(1000);
});

When(/^I click on "Guardar" button$/, async function() {
    await homePage.clickLangGuardarButton();
    await browser.pause(2000);
});

Then(/^I verify "English" is displayed$/, async function() {
    expect(await homePage.isEnglishLangDisplayed(), '"English" language is NOT displayed').to.be.true;
    await browser.pause(2000);
});