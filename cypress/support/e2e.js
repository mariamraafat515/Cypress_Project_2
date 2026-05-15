import './commands'

beforeEach(() => {
    cy.visit('/', {
        failOnStatusCode: false,
        timeout: 120000
    })

    cy.document()
        .its('readyState')
        .should('eq', 'complete')
})