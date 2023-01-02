Feature: Practice

    Scenario Outline: Verify user is able to choose gift card option 
        Given I am on hotels
        When I navigate to "More travel" 
        And I click gift cards option from dropdown
        Then I verify opened page contains expected data