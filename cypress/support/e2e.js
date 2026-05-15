import './commands'

beforeEach(() => {
    cy.visit('/', {
        failOnStatusCode: false
    })
})