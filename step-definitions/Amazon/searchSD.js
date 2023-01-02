const {Given, When, Then} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const AmazonHomePage = require("../../POM/Amazon/AmazonHomePage");


const amzHomePage = new AmazonHomePage();



When(/^I type '(.+)' in search bar$/, async function (data) {
    await amzHomePage.searchItem(data);
    await amzHomePage.clickSearchButton();
});      


When(/^I sort result by (.+)$/, async function (sortOption) {
    await amzHomePage.clickSortButton();
    await amzHomePage.selectSortOption(sortOption);
    await browser.pause(3000);
});  

Then(/^I verify prices are sorted as expected$/, async function () {
    expect(await amzHomePage.isResultInIncreasingOrder(), 'Sorting is NOT in increasing order').to.be.true;
});  