import HomePage from '../pages/HomePage'

describe('Practice Software Testing Website', () => {

    const home = new HomePage()

    beforeEach(() => {

        home.visit()
    })

    // 1
    it('Search Product Test', () => {

        cy.searchProduct('Hammer')

        cy.contains('Hammer').should('exist')
    })

    // 2
    it('Verify Website Title', () => {

        cy.title().should('contain', 'Practice Software Testing')
    })

    // 3
    it('Verify URL', () => {

        cy.url().should('include', 'practicesoftwaretesting')
    })

    // 4
    it('Check Search Bar Exists', () => {

        cy.get('[data-test="search-query"]').should('be.visible')
    })

    // 5
    it('Search Screwdriver', () => {

        cy.searchProduct('Screwdriver')

        cy.contains('Screwdriver').should('exist')
    })

    // 6
    it('Search Pliers', () => {

        cy.searchProduct('Pliers')

        cy.contains('Pliers').should('exist')
    })

    // 7
    it('Verify Product Cards Display', () => {

        cy.get('.card').should('have.length.greaterThan', 0)
    })

    // 8
    it('Click First Product', () => {

        home.clickFirstProduct()

        cy.url().should('include', '/product/')
    })

    // 9
    it('Verify Categories Section', () => {

        cy.contains('Categories').should('exist')
    })

    // 10
    it('Verify Filters Exist', () => {

        cy.contains('Filters').should('exist')
    })

    // 11
    it('Verify Navigation Bar', () => {

        cy.get('nav').should('be.visible')
    })

    // 12
    it('Verify Footer Exists', () => {
    home.verifyFooter()
    })
    // 13
    it('Search Invalid Product', () => {

        cy.searchProduct('abcdef')

        cy.contains('There are no products found').should('exist')
    })

    // 14
    it('Verify Page Loads Successfully', () => {
    cy.title().should('contain', 'Practice Software Testing')
    })

    // 15
    it('Verify Product Images Exist', () => {

        cy.get('img').should('have.length.greaterThan', 0)
    })

})