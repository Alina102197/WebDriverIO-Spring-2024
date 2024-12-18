1. Gherkin
   is a language use to write testcases/scenarios is basic English format

   Keywords:
   Given
   When
   Then

Test Functionality: Feature
Testcase: Scenario
Test steps are written using keywords Given, When, Then

Example:

Feature: Sign UP

    Scenario: Verify user gets error on ibvalid sign up details
    Given I am on facebook.com
    And I click on Create New Account button
    When I enter John as Firstname
    And I enter Doe as Lastname
    And I enter john@test.com as email
    And I enter abcd123 as new password
    And I select Jan as birthmonth
    And I select 20 as birthdate
    And I select 1997 as Birthyear
    And I select male Gender
    And I click sign up button
    Then I verify error is displayed
