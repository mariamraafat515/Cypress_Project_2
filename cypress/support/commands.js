Cypress.Commands.add('searchProduct', (product) => {

    cy.get('[data-test="search-query"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(product)

    cy.get('[data-test="search-submit"]')
        .click()
})