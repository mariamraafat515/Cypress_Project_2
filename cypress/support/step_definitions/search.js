import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/HomePage';

When('user searches for {string}', (product) => {
    HomePage.searchProduct(product)
})

Then('products should appear', () => {
    HomePage.verifyProductsDisplayed()
})