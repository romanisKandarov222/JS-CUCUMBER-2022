const Commands = require('../Commands');

class HomePage {

    commands = new Commands();

    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

    // Calendar
    calendarOpenLocator = '#date_form_field-btn';
    
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'

    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';



    // Code test locators
    languageEnglishLocator = '//div[text()="English"]';
    languageSpanishLocator = '//div[text()="Español"]';
    dropDownLanguageChoice = '//select[@id="language-selector"]';
    saveButton = '//button[text()="Save"]';
    languageLoc = '//label[text()="Language"]'
    travelersLocator = '//label[text()="Travelers"]';


    async clickTravelers() {
        await this.commands.clickWebElement(this.languageEnglishLocator);
    }

    async clickLanguageButton() {
        await this.commands.clickWebElement(this.languageEnglishLocator);
    }

    async clickLanguageOption() {
        await this.commands.clickWebElement(this.languageLoc);
    }



    async changeLanguage(language) {
        switch (language) {
            case 'English':
                await this.commands.clickWebElement(this.languageEnglishLocator);
                await this.commands.clickWebElement(this.saveButton);
                break;
            case 'Español':
                await this.commands.clickWebElement(this.languageSpanishLocator);
                await this.commands.clickWebElement(this.saveButton);
                break;    
            default:
                break;
        }
    }

    async selectLanguageFromDropDown() {
        await this.commands.selectDataInDropdown(this.dropDownLanguageChoice);
    }




    // functions to interact with the web-Elements on the HomePage
    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
    }

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }

    // 'May 2023'
    async goToMonth(monthYear) {
        /**
         * using leftSideCalendarHeaderLocator get headerElement
         * find text of webElement
         * if (text NOT equal to monthYear) 
         *      click >
         */
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    }


}
module.exports = HomePage;