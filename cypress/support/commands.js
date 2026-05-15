Cypress.Commands.add('openWebsite', () => {
    cy.visit('https://practicesoftwaretesting.com/', {
        failOnStatusCode: false
    })
})

Cypress.Commands.add('searchProduct', (product) => {

    cy.get('[data-test="search-query"]')
        .should('be.visible')
        .clear()
        .type(product)

    cy.get('[data-test="search-submit"]')
        .click()

})