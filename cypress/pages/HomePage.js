class HomePage {

    verifyTitle() {
        cy.contains('Practice Software Testing', { timeout: 60000 })
            .should('be.visible')

        cy.title()
            .should('include', 'Practice Software Testing')
    }

    verifyURL() {
        cy.url()
            .should('include', 'practicesoftwaretesting.com')
    }

    verifyFooter() {
        cy.get('footer', { timeout: 30000 })
            .should('be.visible')
    }

    clickFirstProduct() {
        cy.get('[data-test="product-name"]', { timeout: 30000 })
            .should('exist')
            .first()
            .click()
    }

    verifyProductPageOpened() {
        cy.url({ timeout: 30000 })
            .should('include', '/product/')
    }

    verifyCategories() {
        cy.contains('Categories', { timeout: 30000 })
            .should('be.visible')
    }

    verifyBrands() {
        cy.contains('Brands', { timeout: 30000 })
            .should('be.visible')
    }

    searchProduct(product) {
        cy.get('[data-test="search-query"]', { timeout: 30000 })
            .should('be.visible')
            .clear()
            .type(product)
    }

    verifyProductsDisplayed() {
        cy.get('[data-test="product-name"]', { timeout: 30000 })
            .should('have.length.greaterThan', 0)
    }
}

export default new HomePage()