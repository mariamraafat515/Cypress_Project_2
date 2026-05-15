class HomePage {

    verifyTitle() {
        cy.document()
            .its('readyState')
            .should('eq', 'complete')

        cy.title({ timeout: 20000 })
            .should('include', 'Practice Software Testing')
    }

    verifyURL() {
        cy.url()
            .should('include', 'practicesoftwaretesting.com')
    }

    verifyFooter() {
        cy.scrollTo('bottom')

        cy.get('body', { timeout: 20000 })
            .should('be.visible')
    }

    clickFirstProduct() {
        cy.get('[data-test="product-name"]', { timeout: 20000 })
            .should('have.length.greaterThan', 0)
            .first()
            .click()
    }

    verifyProductPageOpened() {
        cy.url({ timeout: 20000 })
            .should('include', '/product/')
    }

    verifyCategories() {
        cy.get('body', { timeout: 20000 })
            .should('contain.text', 'Categories')
    }

    verifyBrands() {
        cy.get('body', { timeout: 20000 })
            .should('contain.text', 'Brands')
    }

    searchProduct(product) {
        cy.searchProduct(product)
    }

    verifyProductsDisplayed() {
        cy.get('[data-test="product-name"]', { timeout: 20000 })
            .should('have.length.greaterThan', 0)
    }
}

export default new HomePage()