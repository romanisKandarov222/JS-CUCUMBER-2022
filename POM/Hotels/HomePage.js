const Commands = require('../Commands');
const moment = require("moment/moment");

class HomePage {

    commands = new Commands();
    now = moment();

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
    guardarButton = '//button[text()="Guardar"]';
    languageLoc = '//label[text()="Language"]'
    travelersLocator = '//button[@data-stid="open-room-picker"]';



    // Project locators
    getTheAppButton = '//*[@id="submitBtn"]';
    phoneNumField = '//input[@id="phoneNumber"]';
    errorPhoneNum = '//div[text()="Please enter a valid phone number."]';
    
    travelersAdultsIncreaseButton = '//*[@aria-label="Increase the number of adults in room 1"]/..';
    travelersChildrenIncreaseButton = '//*[@aria-label="Increase the number of children in room 1"]/..';
    firstChild = '//*[@id="age-traveler_selector_children_age_selector-0-0"]';
    secondChild = '//*[@id="age-traveler_selector_children_age_selector-0-1"]';
    thirdChild = '//*[@id="age-traveler_selector_children_age_selector-0-2"]';
    doneButton = '//*[@id="traveler_selector_done_button"]';
    adultNumber = '//input[@id="traveler_selector_adult_step_input-0"]';
    childrenNumber = '//input[@id="traveler_selector_children_step_input-0"]';

    signIn = '//button[text()="Sign in"]';
    feedbackLink = '//a[text()="Feedback"]'; 
    submitButton = '//*[@id="submit-button"]';
    submitFdbError = '//p[text()="Please fill in the required information highlighted below."]';
    errorRedDots = '//fieldset[contains(@style, "padding")]';

    fdbRating = '//*[@id="page-rating-3"]/..';
    commentField = '//*[@id="verbatim"]';
    willYouReturn = '//*[@id="will-you-return"]';
    everBooked = '//label[@for="booked-here-before-yes"]/..';
    didYouAccomplish = '//label[@for="were-you-successful-yes"]/..';
    successfulFdb = '//h5[text()="THANK YOU FOR YOUR FEEDBACK."]';

    disabledDates = '//button[@class="uitk-date-picker-day is-disabled"]';
    currentMonth = '//div[@class="uitk-date-picker-month"]//h2[text()="' + this.now.format('MMMM YYYY') + '"]';
    currentDisplayedMonth = '//div[@class="uitk-date-picker-month"][1]//h2';
    previousPage = '//*[@id="prevMonth-title"]';

    //************* TC-30 *************//
    async scrollToGetTheAppButton() {
        const phoneNum = await $(this.getTheAppButton);
        await phoneNum.scrollIntoView();
    }

    async enterPhoneData(dataToEnter) {
        await this.commands.typeInWebElement(this.phoneNumField, dataToEnter);
    }

    async clickGetTheAppButton() {
        await this.commands.clickWebElement(this.getTheAppButton);
    }

    async isErrorForWrongPhoneNumDisplayed() {
        return await this.commands.isWebElementDisplayed(this.errorPhoneNum);
    }


    //************* TC-18 *************//
    async clickTravelers() {
        await this.commands.clickWebElement(this.travelersLocator);
    }

    async increaseAdultsTravelers() {
       for(var i = 0; i < 4; i++) {
            await this.commands.clickWebElement(this.travelersAdultsIncreaseButton);
        } 
    }

    async increaseChildrenTravelers() {
        for(var i = 0; i < 3; i++) {
            await this.commands.clickWebElement(this.travelersChildrenIncreaseButton);
        } 
    }

    async setFirstChildAge() {
        if(this.firstChild) {
            await this.commands.selectDataInDropdown(this.firstChild, "4");
        }
    }

    async setSecondChildAge() {
        if(this.secondChild) {
            await this.commands.selectDataInDropdown(this.secondChild, "Under 1");
        }
    }

    async setThirdChildAge() {
        if(this.thirdChild) {
            await this.commands.selectDataInDropdown(this.thirdChild, "7");
        }
    }

    async clickDoneButton() {
        await this.commands.clickWebElement(this.doneButton);
    }

    async totalGuestsNumber() {
        await this.commands.clickWebElement(this.travelersLocator);
        const adults = parseInt(await this.commands.getAttributeWebElement(this.adultNumber, "value"));
        const children = parseInt(await this.commands.getAttributeWebElement(this.childrenNumber, "value"));
        const travelers = (await this.commands.getTextOfWebElement(this.travelersLocator, "value")).substring(10,12);
        return travelers == adults + children ? true : false; 
    }


    //************* TC-24 *************//
    async clickSignIn() {
        await this.commands.clickWebElement(this.signIn);
    }

    async clickFeedbackLink() {
        await this.commands.clickWebElement(this.feedbackLink);
    }

    async switchToDirectWordHandle() {
        const directWOrd = await browser.getWindowHandle();
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            if (handle !== directWOrd) {
                browser.switchToWindow(handle);
                break;
            }
        }
    }

    async clickSubmitButton() {
        await this.commands.clickWebElement(this.submitButton);
    }

    async isEmptyFeedbackFormErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.submitFdbError);
    }

    async isErrorRedDotsDisplayed() {
        return await this.commands.isWebElementDisplayed(this.errorRedDots);
    }


    //************* TC-31 *************//
    async clickLanguageButton() {
        await this.commands.clickWebElement(this.languageEnglishLocator);
    }

    async clickEspanolLanguageButton() {
        await this.commands.clickWebElement(this.languageSpanishLocator);
    }

    async clickLanguageOption() {
        await this.commands.clickWebElement(this.dropDownLanguageChoice);
        await this.commands.selectDataInDropdown(this.dropDownLanguageChoice, "Español (Estados Unidos)");
    }

    async clickLanguageOptionEnglish() {
        await this.commands.clickWebElement(this.dropDownLanguageChoice);
        await this.commands.selectDataInDropdown(this.dropDownLanguageChoice, "English (United States)");
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

    async clickLangGuardarButton() {
        await this.commands.clickWebElement(this.guardarButton);
    }

    async clickLangSaveButton() {
        await this.commands.clickWebElement(this.saveButton);
    }

    async isEspanolLangDisplayed() {
        return await this.commands.isWebElementDisplayed(this.languageSpanishLocator);
    }

    async isEnglishLangDisplayed() {
        return await this.commands.isWebElementDisplayed(this.languageEnglishLocator);
    }


    //************* TC-25  *************//

    async chooseRating() {
        await this.commands.clickWebElement(this.fdbRating);
    }

    async enterComment() {
        await this.commands.typeInWebElement(this.commentField, "Excellent service");
    }

    async selectDataInField(data, fieldName) {
        switch (fieldName.toLowerCase()) {
            case 'how likely are you to return to hotels.com?':
                await this.commands.selectDataInDropdown(this.willYouReturn, data);
                break;
            case 'prior to this visit, have you ever booked on hotels.com?':
                await this.commands.clickWebElement(this.everBooked, data);
                break;    
            case 'did you accomplish what you wanted to do on this page?':
                await this.commands.clickWebElement(this.didYouAccomplish, data);
                break;    
            default:
                break;
        }
    }

    async isSuccessfullySubmittedFdbDisplayed() {
        return await this.commands.isWebElementDisplayed(this.successfulFdb);
    }

    
    //************* TC-17  *************//
    async isPastDatesInCalendarEnabled() {
        const pastDays = await this.commands.findAllWebElement(this.disabledDates);
        for(var i = 0; i < pastDays.length; i++) {
            return await (await $(pastDays[i])).isEnabled();
        } 
    }

    async isBackArrowInCalendarEnabled() {
        return await $(this.prevCalendarButtonLocator).isEnabled();
    }

    async checkIsCurrentMonth() {
        const displayedMonth = await this.commands.getTextOfWebElement(this.currentDisplayedMonth);
        const isCurrentMonth = displayedMonth == this.now.format('MMMM YYYY');
        const prevPageEnabled = await this.commands.isWebElementEnabled(this.previousPage);
        while(!isCurrentMonth && prevPageEnabled) {
            await this.commands.clickWebElement(this.prevCalendarButtonLocator);
        }
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