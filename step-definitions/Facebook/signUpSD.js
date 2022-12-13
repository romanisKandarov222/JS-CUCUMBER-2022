const {Given, When, Then} = require("@wdio/cucumber-framework");
const SignUpPage = require('../../POM/Facebook/SignUpPage');
const LoginPage = require('../../POM/Facebook/LoginPage');
const Dates = require("../../Utils/Dates");
const {expect} = require("chai");

const signUpPage = new SignUpPage();
const loginPage = new LoginPage();


When(/^I click on Create New Account$/, async function() {
    await loginPage.clickCreateNewAccountButton();
    await browser.pause(2000);
});

Then(/^I verify current date is displayed in birth-date dropdown$/, async function() {
    const actualSelectedDate = await signUpPage.getDefaultSelectedDate();  
    const expectedSelectedDate = Dates.getCurrentDate();

    const actualSelectedMonth = await signUpPage.getDefaultSelectedMonth();
    const expectedSelectedMonth = Dates.getCurrentMonthNameInShort();

    const actualSelectedYear = await signUpPage.getDefaultSelectedYear();
    const expectedSelectedYear = Dates.getCurrentYearInYYYY();

    expect(actualSelectedDate, 'Default date in dropdown is NOT current date').to.be.equal(expectedSelectedDate);
    expect(actualSelectedMonth, 'Default month in dropdown is NOT current month').to.be.equal(expectedSelectedMonth);
    expect(actualSelectedYear, 'Default year in dropdown is NOT current year').to.be.equal(expectedSelectedYear);
});