
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
    


@termsAndConditions @TC-20
Scenario Outline: TC-20 - Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        When I click Sign in link
        And I click Sign up link
        And I click "Terms and Conditions" link
        Then I verify "Terms and Conditions" page opens in new tab
        And I verify "Last revised" date format as expected: MM/DD/YY
        When I click "Privacy Statement" link
        Then I verify "Privacy Statement" page opens in new tab
        Then I verify "Last Updated" date format: expected format: dd MMMM, yyyy




@email$Pwd @TC-21
Scenario: TC-21 - Verify error message is displayed. (Email and password don't match. Please try again.)
    When I click on "Sign in link"
    And I click on Sign in button
    When I enter invalid email address
    And I enter invalid password
    When I click on "Sign in" button
    Then I verify error "Email and password don't match. Please try again." message is displayed.



@signUpErrorMsg @TC-22
Scenario: TC-25 - Verify error message for invalid data in SignUp form
    When I click on SignIn-link
    And I click on SignUp-link
    And I enter invalid <email> with at least "@" symbol
    Then I verify invalid pwd error is displayed <error1Text>
    When I enter invalid first <firstName>
    Then I verify fname error is displayed <error2Text>
    When I enter invalid last <lastName>
    Then I verify lname error is displayed <error3Text>
    When I enter pwd <password>
    Then I verify "Keep me signed in" checkbox is displayed and enabled
    Then I verify "Continue" checkbox is displayed but NOT enabled    
Examples:
|        email         |       error1Text       | firstName |                  error2Text                  | lastName |                  error3Text                  |   password   |
|   qwerty123@gmail    |  Enter a valid email.  |    !@     | First name cannot contain special characters |    %^&   | Last name cannot contain special characters  | fE$23_benSaa |



@filter&sort @TC-23
Scenario Outline: TC-23 - Verify filter-by and sort-by functionality works as expected
        When I search "Manhattan" as a destination
        And I enter Check-in date as Feb-10-2023
        When I enter Check-out date as Feb-16-2023
        And I click on Search button
        And I click on 5* from star-rating filter
        Then I verify all hotels in search results are *-rated as selected in above step
        When I select "Price" from sort-by dropdown
        Then I verify all hotels are listed in increasing price order



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



@childAgeDropdowns @TC-28
Scenario: TC-28 - Verify Child-age dropdowns are same as number of Children selected
    When I click on Travelers
    When I select Children as <childCount>
    Then I verify Children-age dropdown are <dropDownCount>
    And I verify plus-button is <plusCond>
    And I verify minus-button is <minusCond>
Examples:
    | childCount |  dropDownCount |   plusCond  |   minusCond  |        
    |     2      |        2       |   enabled   |    enabled   |
    |     6      |        6       |   disabled  |    enabled   | 
    |     5      |        5       |   enabled   |    enabled   | 
    |     0      |        0       |   enabled   |   disabled   |  
    


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



@weakPwdBar @TC-32
Scenario Outline: Verify password strength bar and messages
    When I click on Sign-in
    And I click on Sign-up
    When I type "user@test.com" in Email
    And I enter fUser in First-name
    And I enter lUser in Last-name
    And I type <password> in Password-field
    Then I verify Password strength bar is <strengthBar> filled
    And I verify Password strength message is <strengthMsg>
Examples:
    | password     | strengthBar | strengthMsg |
    | abcd         | not         | Weak        |
    | abcd@123     | half        | Weak        |
    | abcd@12324   | almost      | Strong      |
    | abcd@12@pl@2 | completely  | Very Strong |



@pwdMsg @TC-33
Scenario Outline: TC-33 - Verify weak password messages
        When I click on Sign in
        And I click on Sign up
        When I type "user@test.com" in Email address
        And I enter fUser in First name
        And I enter lUser in Last name
        And I type <pwdOption> in Password
        Then I verify <msg1> message is displayed
        Then I verify <msg2> text is displayed   
Examples:
    | pwdOption | msg1                                 | msg2                              |
    | abcd      | Includes 8-64 characters             | Combines letters and numbers      |
    | abcd@123  | Add more words that are less common. | Avoid common character sequences. |






           




















