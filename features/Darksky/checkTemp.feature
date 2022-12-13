@checkTemp @regression
Feature: Check Temperature

    Background: 
        Given I am on darksky

    @imp
    Scenario: Verify "feel-like-temp" is between low and high temp values
        Then I verify feel-like-temp is between low and high temp values     
