  Feature: Jasmine Example
  
  Background:
  Given with a wall

Scenario: A bottle falls from the wall

  Given 100 green. A 'bottles' _ "are" standing on the wall
  When 1 green bottle accidentally falls
  Then there are 99 green bottles standing on the wall

Scenario: No bottles are left

  Given 1 green. A 'bottles' _ "are" standing on the wall
  When 1 green bottle accidentally falls
  Then there are 0 green bottles standing on the wall
