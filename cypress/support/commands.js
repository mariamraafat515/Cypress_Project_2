Cypress.Commands.add('openWebsite', () => {

    cy.openWebsite()
        failOnStatusCode: false

})

Cypress.Commands.add('searchProduct', (product) => {

    cy.get('[data-test="search-query"]')
        .should('be.visible')
        .clear()
        .type(product)

    cy.get('[data-test="search-submit"]')
        .click()

})