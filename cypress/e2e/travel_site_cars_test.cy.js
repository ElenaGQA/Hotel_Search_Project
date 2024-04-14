/// <reference types = "Cypress"/>

describe('The cars tab test suite will verify cars functionality', () => {

    const car_tab = '[data-cy="Car"]'
    const location_tab = '[name="location"]';
    const drop_off = ':nth-child(4) > :nth-child(1) > .input-group > .input--style-1';
    const car_group_list = '[name="car-group"]'
    const driver_age = '[name ="driver-age"]'



    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(car_tab).click()
    })

    after(() => {
        cy.log('after all')
    })

    afterEach(() => {
        cy.log('after each')
    })

    it('navigate to the cars tab', () => {
        cy.get(location_tab).should("be.visible")
        cy.get(car_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(car_tab).invoke('text').should('eq', 'car')

    })

    it('populates location field', () => {
        cy.get(location_tab).type('New York').should('have.value', 'New York')

    })


    it('populates drop off date', () => {
        cy.get(drop_off).clear()
        cy.get(drop_off).type('11/21/2024').invoke("val").should('eq', '11/21/2024')

    })

    it('choose car group from the list', () => {
        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 1', { force: true })
        // try to avoid using {force: true} as much as you can, can cause false negative results.
        cy.get('[title="Group 1"]').should('be.visible')

        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 2', { force: true })
        cy.get('[title="Group 2"]').should('be.visible')

        cy.get(car_group_list).should('be.visible')
        cy.get(car_group_list).select('Group 3', { force: true })
        cy.get('[title="Group 3"]').should('be.visible')

    })

    it('select list driver age', () => {
        cy.get(driver_age).should('be.visible')
        cy.get(driver_age).select('23', { force: true }).should('have.value', '23')
        cy.get(driver_age).select('24', { force: true }).should('have.value', '24')
        cy.get(driver_age).select('25', { force: true }).should('have.value', '25')
        cy.get(driver_age).select('26', { force: true }).should('have.value', '26')


    })

    
})