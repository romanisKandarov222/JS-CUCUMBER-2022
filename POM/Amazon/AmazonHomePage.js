const Commands = require("../Commands");

class AmazonHomePage {

    commands = new Commands();


    searchBarLocator = '//input[@id="twotabsearchtextbox"]';
    searchButton = '//input[@id="nav-search-submit-button"]';
    sortOptionByPriceLowToHigh = '//a[text()="Price: Low to High"]';
    sortOptionByPriceHighToLow = '//a[text()="Price: High to Low"]';
    sortOptionByAvgCustomerReview = '//a[text()="Avg. Customer Review"]';
    sortOptionByNewestArrivals = '//a[text()="Newest Arrivals"]';
    sortButtonLocator = '//span[@class="a-button-inner"]';
    wholePrice = '//div[contains(@cel_widget_id, "MAIN-SEARCH_RESULTS")]//span[@class="a-price-whole"]';
    fractionPrice = '//div[contains(@cel_widget_id, "MAIN-SEARCH_RESULTS")]//span[@class="a-price-fraction"]';



    async searchItem(item) {
        await this.commands.typeInWebElement(this.searchBarLocator, item);
    }

    async clickSearchButton() {
        await this.commands.clickWebElement(this.searchButton);
    }

    async clickSortButton() {
        await this.commands.clickWebElement(this.sortButtonLocator);
    }

    async selectSortOption(option) {
        switch (option) {
            case 'Featured':
                await this.commands.clickWebElement(this.sortOptionByFeatured);
                break;  
            case 'Price: Low to High':
                await this.commands.clickWebElement(this.sortOptionByPriceLowToHigh);
                break;
            case 'Price: High to Low':
                await this.commands.clickWebElement(this.sortOptionByPriceHighToLow);
                break;
            case 'Avg. Customer Review':
                await this.commands.clickWebElement(this.sortOptionByAvgCustomerReview);
                break;
            case 'Newest Arrivals':
                await this.commands.clickWebElement(this.sortOptionByNewestArrivals);
                break;        
            default:
                break;
        }
    }

    async isResultInIncreasingOrder() {
        const priceTagWhole = await this.commands.findAllWebElements(this.wholePrice);
        const priceTagFraction = await this.commands.findAllWebElements(this.fractionPrice);
        
        const priceLowToHigh = true;
        const allTagsWhole = [];
        const allTagsFraction = [];

        for(const priceWhole of priceTagWhole) {
            allTagsWhole.push(await priceWhole.getText() + '.');
        } console.log(`${allTagsWhole}`);

        for(const priceFraction of priceTagFraction) {
            allTagsFraction.push(await priceFraction.getText());
        } console.log(`${allTagsFraction}`);

        // concat 2 arrays: whole price + fraction, using map-function
        const mergedArray = allTagsWhole.map((element, i) => [element + allTagsFraction[i]]);
        console.log(`${mergedArray}`);
        

        for(var i = 0; i < mergedArray.length; i++) {
            if(i <= mergedArray[i+1]) {
                //console.log(true);
                return priceLowToHigh;
            } else {
                //console.log(false);
                return priceLowToHigh == false;
            }
        }

    }

}
module.exports = AmazonHomePage;