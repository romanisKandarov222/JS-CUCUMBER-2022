const Commands = require('../Commands');

class Frontpage {

    commands = new Commands();

    locationInputLocator = '//input[@type="text"]';
    searchButtonLocator = '//img[@alt="Search Button"]';
    feelsLikeTempLocator = '.feels-like-text';
    lowTempLocator = '.low-temp-text';
    highTempLocator = '.high-temp-text';
    timeLineHoursLocator = '//div[@class="hours"]//span[*]';

async timeLineLength() {
    const timeLineLength = await this.commands.findAllWebElements(this.timeLineHoursLocator);
    return timeLineLength.length;
}

async enterParticularLocation(location) {
    await this.commands.typeInWebElement(this.locationInputLocator, location);
}

async clickOnSearchButton() {
    await this.commands.clickWebElement(this.searchButtonLocator);
}

async compareResults() {
    const feelsLikeTemp = await this.commands.getTextOfWebElement(this.feelsLikeTempLocator);
    const feelsVal = feelsLikeTemp.substring(0, feelsLikeTemp.length-1);

    const tempLow = await this.commands.getTextOfWebElement(this.lowTempLocator);
    const lowVal = tempLow.substring(0, tempLow.length-1);

    const tempHigh = await this.commands.getTextOfWebElement(this.highTempLocator);
    const highVal = tempHigh.substring(0, tempHigh.length-1);

    return lowVal < feelsVal < highVal ? true : false; 
        
}

}
module.exports = Frontpage;
