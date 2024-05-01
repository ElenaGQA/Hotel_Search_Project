/// <reference types = "Cypress"/>

import { data } from '../fixtures/params.json'

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
        // cy.viewport (800, 600)
        // cy.screenshot ('test1')

    })

    it('populates origin and destination', () => {

        data.forEach(element => {
            //cy.pause ();
            cy.get(origin_tab).clear().type(element.from).invoke("val").should('eq', element.from);
            //cy.pause ();
            cy.get(destination_tab).clear().type(element.to).invoke("val").should('eq', element.to);
            //cy.pause ();
        })

        // cy.get(origin_tab).type(data [0].from).invoke("val").should('eq', data [0].from)
        // cy.get(destination_tab).type(data [0].to).invoke("val").should('eq', data [0].to)
        // this way you take data from first set in jason file which is [0] in an array and cypress 
        // is using it in the test

        //cy.get(origin_tab).type("Paris").invoke("val").should('eq', "Paris")
        //cy.get(destination_tab).type("London").invoke("val").should('eq', "London")

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