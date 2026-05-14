import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../pages/HomePage';

When('user searches for {string}', (product) => {

    cy.fixture('products').then((data) => {

    HomePage.searchProduct(data.searchItem)

    })
})

Then('products should appear', () => {

   HomePage.verifyProductsDisplayed()

})