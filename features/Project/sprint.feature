
Feature: Sprint
    Background: 
        Given I am on hotels


@datesChecker @TC-17
Scenario: TC-17 - Verify past dates and back button on Current month's calendar is disabled
    When I click on Dates
    And I go to current month if not displayed
    Then I verify For current month past dates and back button are disabled


@guestsCountChecker @TC-18
Scenario: TC-18 - Verify total number of guests in sum of adults and children as same as selected
    When I click on "Travelers"
    When I select "Adults" as <adultCount>
    And I select "Children" as <childrenCount>
    And I select first child age: 4
    And I select second child age: Under 1
    And I select third child age: 7
    When I click done
    Then I verify total number of guests in sum of adults and children as same as selected

    Examples:
    | adultCount | childrenCount |          
    |     6      |       3       |       
    

@emptyFeedbackError @TC-24
Scenario: TC-24 - Verify error is displayed when user submits the empty feedback form
    When I click on Sign In
    And I click "Feedback"
    And I click on Submit button
    Then I verify error is displayed when user submits the empty feedback form
    And I verify star boxes section is in a red dotted box


@successfulFdbSubmit @TC-25
Scenario: TC-25 - Verify user can submit feedback after completing the feedback form
    When I click on "Sign In"
    And I click Feedback
    And I select "3-star" rating
    And I enter "Excellent service" comment
    And I select "Unsure" for "How likely are you to return to Hotels.com?"
    And I select "Yes" for "Prior to this visit, have you ever booked on Hotels.com?"
    And I select "Yes" for "Did you accomplish what you wanted to do on this page?"
    And I click Submit button
    Then I verify "THANK YOU FOR YOUR FEEDBACK." is displayed


@validPhoneNumberError @TC-30
Scenario: TC-30 - Verify “Please enter a valid phone number.“ error is displayed
    When I scroll to "Get the app" button
    And I enter <phoneNumber> in Phone number
    When I click on "Get the app" button
    Then I verify “Please enter a valid phone number.“ error is displayed
    Examples:
    | phoneNumber |
    | 0000000000  |


@changeLanguage @TC-31
Scenario: TC-31 - Verify language can be changed successfully
    When I click on "English" language
    And I select "Español" in Language dropdown
    And I click on "Save" button
    Then I verify "Español" is displayed
    When I click on "Español" language
    And I select "English" in Language dropdown
    And I click on "Guardar" button
    Then I verify "English" is displayed




