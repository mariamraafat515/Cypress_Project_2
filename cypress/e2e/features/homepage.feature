Feature: Homepage Verification

Scenario: Verify Website Title

   Given user opens the website
   Then website title should be correct


Scenario: Verify Footer Exists

   Given user opens the website
   Then footer should be visible


Scenario: Click First Product

   Given user opens the website
   When user clicks first product
   Then product page should open


Scenario: Verify URL

   Given user opens the website
   Then URL should be correct