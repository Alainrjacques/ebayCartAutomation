Feature: Ebay

  @test
  Scenario: Add to the cart and empty
    Given I navigate to ebay
    And I search using the global search
    And I select the first link in the first category
    And I view item number 1
    And I add the item to my cart
    And I navigate to ebay
    And I search using the global search
    And I select the first link in the first category
    And I view item number 3
    And I add the item to my cart
    And I navigate to ebay
    And I view my cart
    Then There are 2 items in the cart
    When I remove an item from my cart
    Then There are 1 items in the cart
    When I remove an item from my cart
    Then There are 0 items in the cart