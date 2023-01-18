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
    travelersChildrenIncreaseButton = '//*[@aria-label="Increase the number of children in room 1"]/../..';
    travelersChildrenDecreaseButton = '//*[@aria-label="Decrease the number of children in room 1"]/../..';
    firstChild = '//*[@id="age-traveler_selector_children_age_selector-0-0"]';
    secondChild = '//*[@id="age-traveler_selector_children_age_selector-0-1"]';
    thirdChild = '//*[@id="age-traveler_selector_children_age_selector-0-2"]';
    doneButton = '//*[@id="traveler_selector_done_button"]';
    adultNumber = '//input[@id="traveler_selector_adult_step_input-0"]';
    childrenNumber = '//input[@id="traveler_selector_children_step_input-0"]';

    signIn = '//button[text()="Sign in"]';
    signUp = '//a[@data-stid="link-header-account-signup"]';
    signInButton = '//a[@data-stid="link-header-account-signin"]';
    submitSignInButton = '//button[@id="loginFormSubmitButton"]';
    invalidCredentialsError = '//h3[contains(text(), "Email and password don")]';
    emailField = '//*[@id="loginFormEmailInput"]';
    pwdField = '//*[@id="loginFormPasswordInput"]';
    signUpEmailField = '#signupFormEmailInput';
    signUpFirstNameField = '#signupFormFirstNameInput'; 
    signUpLastNameField = '#signupFormLastNameInput'; 
    signUpPwd = '#signupFormPasswordInput'; 
    firstMsgPwdMeter = '//li[text()="Includes 8-64 characters"]';
    secondMsgPwdMeter = '//li[text()="Combines letters and numbers"]';
    thirdMsgPwdMeter = '//li[text()="Add more words that are less common."]';
    fourthMsgPwdMeter = '//li[text()="Avoid common character sequences."]';
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


    destination = '//*[@id="destination_form_field-menu"]';
    checkInField = '//div[@class="uitk-date-picker-menu uitk-menu uitk-menu-mounted"]';
    checkInDates = '//td[@class="uitk-date-picker-day-number"]//button[@aria-label="Feb 10, 2023"]';
    checkOutDates = '//td[@class="uitk-date-picker-day-number"]//button[@aria-label="Feb 16, 2023"]';
    doneButton = '//button[@data-stid="apply-date-picker"]';
    searchButton = '//*[@id="search_button"]';
    sortByFiveStar = '//input[@id="ShoppingSelectableFilterOption-star-50"]/..';
    fiveStarFilter = '//span[contains(text(), "out of 5")]';
    sortByDropdown = '#sort-filter-dropdown-sort';
    priceSorting = '//div[contains(text(), "The price is $")]';

    invalidEmailErrorMsg = '#signupFormEmailInput-error';
    invalidFirstNameErrorMsg = '#signupFormFirstNameInput-error';
    invalidLastNameErrorMsg = '#signupFormLastNameInput-error';
    signUpCheckBox = '//div[contains(@class, "uitk-checkbox")]';
    signUpContinueButton = '#signupFormSubmitButton';

    termsLocator = '//a[text()="Terms and Conditions"]';
    termsPageTitle = '//h1[text()="TERMS OF SERVICE"]';
    lastRevised = '//span[contains(text(), "Last revised:")]';
    privacyStatement = '//a[text()="Privacy Statement"]';
    privacyPageTitle = '//h1[text()="Privacy Statement"]';
    lastUpdated = '//p[contains(text(), "Last Updated:")]';

    weakPwdMsg = '//div[text()="Weak"]';
    strongPwdMsg = '//div[text()="Strong"]';
    veryStrongPwdMsg = '//div[text()="Very strong"]';
    pwdStrengthBar = '(//span[contains(text(), "Password strength")])[2]';

    //************* TC-20 *************//
    async verifyPwdStrengthBarProgress() {
        const strengthBarProgress = await this.commands.getTextOfWebElement(this.pwdStrengthBar); 
        if(strengthBarProgress == 'Password strength 0%') {
            return 'not';
        } else if(strengthBarProgress == 'Password strength 50%') {
            return 'half';
        } else if(strengthBarProgress == 'Password strength 75%') {
            return 'almost';
        } else if(strengthBarProgress == 'Password strength 100%') {
            return 'completely';
        } else {
            return '{Invalid Input}';
        }
    }

    async verifyPwdStrengthMsg() {
        const status = await this.commands.getTextOfWebElement('//div[contains(@class, "uitk-progress-bar-description uitk-type-bold")]');
        switch(status) {
            case 'Weak': return 'Weak';
            case 'Strong': return 'Strong';
            case 'Very Strong': return 'Very Strong';
        }
    }



    //************* TC-20 *************//
    async clickTermsLink() {
        await this.commands.clickWebElement(this.termsLocator);
    }

    async verifyTermsOpenedInNewPage() {
        return await this.commands.isWebElementDisplayed(this.termsPageTitle);
    }

    async isLastRevisedDateFormatAsExpected() {
        // const regExpression = "^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$";
        // return dateFromLastRevised.match(regExpression) ? true : false 
        const dateFromLastRevised = (await this.commands.getTextOfWebElement(this.lastRevised)).slice(14);
        return moment(dateFromLastRevised, 'MM/DD/YY', true).isValid();
    }

    async clickPrivacyLink() {
        await this.commands.clickWebElement(this.privacyStatement);
    }

    async verifyPrivacyOpenedInNewTab() {
        return await this.commands.isWebElementDisplayed(this.privacyStatement);
    }

    async isLastUpdatedFormatAsExpected() {
        //const regExpression = "^(December|January|February|March)\ (([0-9])|([0-2][0-9])|([3][0-1])),\ \d{4}$";
        //return dateFromLastUpdated.match(regExpression) ? true : false 
        const dateFromLastUpdated = (await this.commands.getTextOfWebElement(this.lastUpdated)).slice(14);
        return moment(dateFromLastUpdated, 'DD MMMM, YYYY', true).isValid();
    }

    async switchToCreateAnAccount(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.startsWith('Create an account')) {
                await browser.switchToWindow(handle);
                break;
            }
        }
    }

    async switchToPrivacyStatement(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.startsWith('Hotels.com - Deals')) {
                await browser.switchToWindow(handle);
                break;
            }
        }
    }


    //************* TC-22 *************//
    async invalidEmailVerificationError() {
        return await this.commands.getTextOfWebElement(this.invalidEmailErrorMsg);
    }

    async invalidFirstNameVerificationError() {
        return await this.commands.getTextOfWebElement(this.invalidFirstNameErrorMsg);
    }

    async invalidLastNameVerificationError() {
        return await this.commands.getTextOfWebElement(this.invalidLastNameErrorMsg);
    }

    async inputEmail(userInput) {
        await this.commands.clickWebElement(this.signUpEmailField);
        await this.commands.typeInWebElement(this.signUpEmailField, userInput);
    }

    async inputFirstName(userInput) {
        await this.commands.clickWebElement(this.signUpFirstNameField);
        await this.commands.typeInWebElement(this.signUpFirstNameField, userInput);
    }

    async inputLastName(userInput) {
        await this.commands.clickWebElement(this.signUpLastNameField);
        await this.commands.typeInWebElement(this.signUpLastNameField, userInput);
    }

    async isSignUpCheckBoxDisplayed() {
        const checkBox = await this.commands.isWebElementDisplayed(this.signUpCheckBox);
        const check_Box = await this.commands.isWebElementEnabled(this.signUpCheckBox);
        return checkBox && check_Box ? true : false;
    }

    async isContinueButtonDisplayedAndDisabled() {
        const continueButton = await this.commands.isWebElementDisplayed(this.signUpContinueButton);
        const continue_Button = await (await $(this.signUpContinueButton)).isEnabled();
        return continueButton && !continue_Button ? true : false;
    }

    //************* TC-23 *************//
       async enterDestinationNew(direction) {
        await this.commands.clickWebElement(this.destination);
        await this.commands.typeInWebElement(this.destination, direction);
    }

    async selectFromAutoSuggestion(userDirection) {
        await this.commands.selectFromAutoSuggestion(this.destination, userDirection);
    }

    async chooseCheckInDate() {
        await this.commands.clickWebElement(this.checkInField);
        await this.commands.clickWebElement(this.checkInDates);
    }

    async chooseCheckOutDate() {
        await this.commands.clickWebElement(this.checkOutDates);
        await this.commands.clickWebElement(this.doneButton);
    }

    async clickSearchButton() {
        await this.commands.clickWebElement(this.searchButton);
    }

    async selectFiveStarRating() {
        const fiveStar = await $(this.sortByFiveStar);
        await fiveStar.scrollIntoView();
        await browser.pause(2000);
        await this.commands.clickWebElement(this.sortByFiveStar);
    }

    async verifyFiveStarRating() {
        const rating = await this.commands.findAllWebElement(this.fiveStarFilter);
        
        const ratingFromHighToLow = true;
        const allRatings = [];

        for(const starRating of rating) {
            allRatings.push((await starRating.getText()).slice(0,3));
        } console.log(`${allRatings}`);


        for(var i = 0; i < allRatings.length; i++) {
            if(i = allRatings[i+1]) {
                return ratingFromHighToLow;
            } else {
                return !ratingFromHighToLow;
            }
        }
    }

    async selectPriceSorting(userChoice) {
        await this.commands.selectDataInDropdown(this.sortByDropdown, userChoice);
    }

    async verifyPriceSorting() {
        const priceList = await this.commands.findAllWebElement(this.priceSorting);
        
        const priceLowToHigh = true;
        const allPriceTags = [];

        for(const price of priceList) {
            allPriceTags.push((await price.getText()).slice(14,17));
        } console.log(`${allPriceTags}`);


        for(var i = 0; i < allPriceTags.length; i++) {
            if(i <= allPriceTags[i+1]) {
                return priceLowToHigh;
            } else {
                return !priceLowToHigh;
            }
        }
    }



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

    //************* TC-28 *************//
    async increaseChildCount(child) {
        if(child == 2) {
            for(var i = 0; i < 2; i++) {
                await this.commands.clickWebElement(this.travelersChildrenIncreaseButton);
            }
        }
        else if(child == 6) {
            for(var i = 0; i < 6; i++) {
                await this.commands.clickWebElement(this.travelersChildrenIncreaseButton);
            }
        }
        else if(child == 5) {
            for(var i = 0; i < 5; i++) {
                await this.commands.clickWebElement(this.travelersChildrenIncreaseButton);
            }
        }
        else if(child == 0) {
            await browser.pause(1000);
        }
    }

    async verifyChildDropdown() {
        const childDropdown = parseInt(await this.commands.getAttributeWebElement(this.childrenNumber, "value"));
        switch(childDropdown) {
            case 2: return true;
            case 6: return true;
            case 5: return true;
            case 0: return true;
        }
    }

    async verifyPlusButtonState() {
        const childDropdown = parseInt(await this.commands.getAttributeWebElement(this.childrenNumber, "value"));
        switch(childDropdown) {
            case 2: return await this.commands.isWebElementEnabled(this.travelersChildrenIncreaseButton);
            case 6: const disAttrPresent = await this.commands.getAttributeWebElement(this.travelersChildrenIncreaseButton, 'disabled');
                    if(disAttrPresent) {return true} 
            case 5: return await this.commands.isWebElementEnabled(this.travelersChildrenIncreaseButton);
            case 0: return await this.commands.isWebElementEnabled(this.travelersChildrenIncreaseButton);
        }
        
    }

    async verifyMinusButtonState() {
        const childDropdown = parseInt(await this.commands.getAttributeWebElement(this.childrenNumber, "value"));
        switch(childDropdown) {
            case 2: return await this.commands.isWebElementEnabled(this.travelersChildrenDecreaseButton);
            case 6: return await this.commands.isWebElementEnabled(this.travelersChildrenDecreaseButton);
            case 5: return await this.commands.isWebElementEnabled(this.travelersChildrenDecreaseButton);
            case 0: const disAttrPresent = await this.commands.getAttributeWebElement(this.travelersChildrenIncreaseButton, 'disabled');
                    if(!disAttrPresent) {return true} 
        }
        
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

    //************* TC-21 *************//
    async clickSignInButton() {
        await this.commands.clickWebElement(this.signInButton);
    } 

    async enterInvalidEmail() {
        await this.commands.clickWebElement(this.emailField);
        await this.commands.typeInWebElement(this.emailField, "123@gmail.com");
    }

    async enterInvalidPwd() {
        await this.commands.clickWebElement(this.pwdField);
        await this.commands.typeInWebElement(this.pwdField, "qwerty123");
    }

    async clickSubmitSignIn() {
        await this.commands.clickWebElement(this.submitSignInButton);
    } 

    async invalidCredentials() {
        return await this.commands.isWebElementDisplayed(this.invalidCredentialsError);
    }


    //************* TC-33 *************//
    async clickSignUp() {
        await this.commands.clickWebElement(this.signUp);
    }


    async enterEmail() {
        await this.commands.clickWebElement(this.signUpEmailField);
        await this.commands.typeInWebElement(this.signUpEmailField, "user@test.com");
    }

    async signUpFormEnterFirstName() {
        await this.commands.clickWebElement(this.signUpFirstNameField);
        await this.commands.typeInWebElement(this.signUpFirstNameField, "fUser");
    }

    async signUpFormEnterLastName() {
        await this.commands.clickWebElement(this.signUpLastNameField);
        await this.commands.typeInWebElement(this.signUpLastNameField, "lUser");
    }

    async signUpFormPwd(password) {
        await this.commands.clickWebElement(this.signUpPwd);
        await this.commands.typeInWebElement(this.signUpPwd, password);
    }

    async weakPwdMeterMsg() {
        const strengthBarProgress = await this.commands.getTextOfWebElement(this.pwdStrengthBar); 
        if(strengthBarProgress == 'Password strength 0%') {
            return await this.commands.getTextOfWebElement(this.firstMsgPwdMeter);    
        }else if(strengthBarProgress == 'Password strength 50%') {
            return await this.commands.getTextOfWebElement(this.thirdMsgPwdMeter);    
        }
    }

    async weakPwdMeterMsgSecond() {
        const strengthBarProgress = await this.commands.getTextOfWebElement(this.pwdStrengthBar); 
        if(strengthBarProgress == 'Password strength 0%') {
            return await this.commands.getTextOfWebElement(this.secondMsgPwdMeter);    
        }else if(strengthBarProgress == 'Password strength 50%') {
            return await this.commands.getTextOfWebElement(this.fourthMsgPwdMeter);    
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