import './commands'

// ✅ GUARANTEE every test starts from real homepage
beforeEach(() => {
    cy.visit('/')
})