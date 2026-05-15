import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/HomePage';

Given('user opens the website', () => {
    cy.visit('/', {
        failOnStatusCode: false
    })
    // ✅ Replace app-root check with this
    cy.url().should('include', 'practicesoftwaretesting.com')
    // ✅ Add this line — waits for Angular app to fully load
    cy.get('app-root', { timeout: 60000 }).should('exist')
})

Then('website title should be correct', () => {
    HomePage.verifyTitle()
})

Then('URL should be correct', () => {
    HomePage.verifyURL()
})

Then('footer should be visible', () => {
    HomePage.verifyFooter()
})

When('user clicks first product', () => {
    HomePage.clickFirstProduct()
})

Then('product page should open', () => {
    HomePage.verifyProductPageOpened()
})