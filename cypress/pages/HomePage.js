class HomePage {

    visit() {

    cy.openWebsite()

    }

    searchProduct(product) {

    cy.searchProduct(product)

    }

    verifyProductsDisplayed() {

        cy.get('.card')
            .should('exist')

    }

    verifyTitle() {

        cy.title()
            .should('contain', 'Practice Software Testing')

    }

    clickFirstProduct() {

        cy.get('[data-test="product-name"]')
            .first()
            .click()

    }
    
    verifyURL() {

    cy.url()
        .should('include', 'practicesoftwaretesting')

    }

    verifyProductPageOpened() {

        cy.url()
            .should('include', '/product')

    }

    verifyFooter() {

        cy.contains('Privacy Policy')
            .should('exist')

    }

    verifyCategories() {

    cy.contains('Categories')
        .should('exist')

}

verifyBrands() {

    cy.contains('Brands')
        .should('exist')

}

}

export default new HomePage()