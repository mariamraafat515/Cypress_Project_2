import './commands'

beforeEach(() => {
    cy.visit('/', {
        failOnStatusCode: false
    })

    cy.contains('Practice Software Testing', {
        timeout: 60000
    }).should('be.visible')
})