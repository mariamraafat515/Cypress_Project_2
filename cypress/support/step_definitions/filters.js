import { Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../pages/HomePage';

Then('categories should be visible', () => {

    HomePage.verifyCategories()

})

Then('brands should be visible', () => {

    HomePage.verifyBrands()

})