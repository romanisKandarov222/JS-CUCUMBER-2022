const {Given, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');


const homePage = new HomePage();


When(/^I change language to (.+)$/, async function (language) {
    await homePage.clickLanguageButton();
    await homePage.clickLanguageOption();
    await homePage.changeLanguage(language);

});



/* Then(/^I verify language got changed to (.+)$/, async function (language) {
    
    await homePage.changeLanguage(language);
});  */