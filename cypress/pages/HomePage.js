class HomePage {

    verifyTitle() {
        cy.title().should('include', 'Practice Software Testing')
    }

    verifyURL() {
        cy.url().should('include', 'practicesoftwaretesting.com')
    }

    verifyFooter() {
    cy.wait(3000)

    cy.scrollTo('bottom')

    cy.document()
        .its('readyState')
        .should('eq', 'complete')
    }

    clickFirstProduct() {
    cy.wait(3000)

    cy.get('[data-test="product-name"]', { timeout: 15000 })
        .first()
        .click()
    }
    verifyProductPageOpened() {
    cy.url().should('include', '/product/')
    }

    verifyCategories() {
        cy.contains('Categories').should('be.visible')
    }

    verifyBrands() {
        cy.contains('Brands').should('be.visible')
    }

    searchProduct(product) {
        cy.searchProduct(product)
    }

    verifyProductsDisplayed() {
        cy.get('.card').should('have.length.greaterThan', 0)
    }
}

export default new HomePage()