Cypress.Commands.add('openWebsite', () => {

    cy.visit('https://practicesoftwaretesting.com/')

})

Cypress.Commands.add('searchProduct', (product) => {

    cy.get('[data-test="search-query"]')
        .should('be.visible')
        .clear()
        .type(product)

    cy.get('[data-test="search-submit"]')
        .click()

})