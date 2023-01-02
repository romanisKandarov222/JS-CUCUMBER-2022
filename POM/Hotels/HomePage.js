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
    languageLocator = '//button[@data-stid]//div[contains(@class, "uitk-text uitk-type-300 uitk-text-default-theme")]';
    dropDownLanguageChoice = '#language-selector';
    saveButton = '//button[text()="Save" or text()="Guardar"]';
    

    travelersLocator = '//label[text()="Travelers"]';



    // Practice locators
    moreTravel = '//div[text()="More travel"]';
    moreTravelDropDown = '//nav[@id="header-toolbar-nav"]/following::div[@class="uitk-list"]';



    async changeLanguage(newLanguage) {
        await this.commands.clickWebElement(this.languageLocator);    
        await this.commands.selectDataInDropdown(this.dropDownLanguageChoice, newLanguage);    
        await this.commands.clickWebElement(this.saveButton);       
    }

    async getWebLanguage() {
        return await this.commands.getTextOfWebElement(this.languageLocator);
    }


    async clickMoreTravel() {
        await this.commands.clickWebElement(this.moreTravel);
    }


    async chooseGiftCardInDropDown(giftCard) {
        await this.commands.selectDataInDropdown(this.moreTravelDropDown, giftCard);
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