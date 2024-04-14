/// <reference types = "Cypress"/>

describe('The flight tab test suite will verify flights functionality', () => {

    const flights_tab = '[data-cy="Flight"]';
    //const origin_placeholder = '[placeholder="City or airport"][name="origin"]';
    const origin_tab = '[name="origin"]';
    const destination_tab = '[name="destination"]';
    const departing = '#input-start-2';
    const returning = '#input-end-2';
    const business_radio_button = '[id="business"]';
    const economy_radio_button = '[id="economy"]';
    const f_class_radio_button = '[id="f_class"]';
    



    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get('[data-cy="Flight"]').click()
    })

    after(() => {
        cy.log('after all')
    })

    afterEach(() => {
        cy.log('after each')
    })

    it('navigate to the flights tab', () => {
        cy.get(origin_tab).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', 'flight')

    })

    it('populates origin and destination', () => {
        cy.get(origin_tab).type('Paris').invoke("val").should('eq', 'Paris')
        cy.get(destination_tab).type('London').invoke("val").should('eq', 'London')
        //cy.get(origin_tab).invoke("val").should('eq', 'Paris')
        //cy.get(destination_tab).invoke("val").should('eq', 'London')

    })

    it('populates departing and returning dates', () => {
        cy.get(departing).clear()
        cy.get(departing).type('10/25/2024').invoke("val").should('eq', '10/25/2024')
        cy.get(returning).clear()
        cy.get(returning).type('11/21/2024').invoke("val").should('eq', '11/21/2024')
       
    })

    it('check radio buttons', () => {
        cy.get(business_radio_button).click().should('be.checked')
        cy.get(economy_radio_button).click().should('be.checked')
        cy.get(f_class_radio_button).click().should('be.checked')       
       
    })


})