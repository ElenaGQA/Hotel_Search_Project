/// <reference types = "Cypress"/>
// This set will verify that each element of the Hotel search tab 
// ('http://localhost:3000') exists on the tab and has the correct text.  


describe('The sanity test suite for travel site', () => {

  it('verify Going to box', () => {
    cy.visit('http://localhost:3000')

    //tests below verify that box Going to exists
    cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
    cy.get('[class="input-group"]').should('be.visible')

    // 3 tests below verify "Going to" text
    cy.contains('Going to').should("have.text", 'Going to')
    cy.contains('Going to').should('be.visible')
    cy.get('#tab1 > form > :nth-child(1) > .label').should('be.visible')

    // tests below verify "Destination, hotel name" placeholder text
    cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should('be.visible')
    cy.get('[placeholder="Destination, hotel name"]').should("be.visible")
    // cy.contains('Destination, hotel name').should("have.text",'Destination, hotle name')
    // Test above is failing. I don't know whether it's supposed to be failing. 
    // Tests are seeing it as a placeholder but not as text.

    //test below verify map pin symbol 
    cy.get('[class="zmdi zmdi-pin input-group-symbol"]').should("be.visible")
    cy.get('#tab1 > form > :nth-child(1) > .zmdi').should("be.visible")

  })



  it('verify Check-In box', () => {
    cy.visit('http://localhost:3000')

    //test below verify that Check-In box exists
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")

    // 3 tests below verify "Check-In" text
    cy.contains('check-in').should("have.text", 'check-in')
    cy.contains('check-in').should('be.visible')
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should('be.visible')

    // tests below verify "MM/DD/YYY" placeholder text
    cy.get('#input-start').should('be.visible')
    cy.get('[name="check-in"][placeholder="mm/dd/yyyy"]').should("be.visible")
    //cy.contains('mm/dd/yyyy').should("have.text",'mm/dd/yyyy')
    // Test above is failing. Same problem as in the test above with placeholder.

    //test below verify calendar symbol 
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .zmdi').should("be.visible")
    cy.get('[class="zmdi zmdi-calendar-alt input-group-symbol"]').should("be.visible")
    
  })



  it('verify Check-Out box', () => {
    cy.visit('http://localhost:3000')

    //tests below verify that Check-in box exists
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")

    // 3 tests below verify "Check-Out" text
    cy.contains('check-out').should("have.text", 'check-out')
    cy.contains('check-out').should('be.visible')
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should('be.visible')

    // tests below verify "MM/DD/YYY" text
    cy.get('#input-end').should('be.visible')
    cy.get('[name="check-out"],[placeholder="mm/dd/yyyy"]').should("be.visible")
    //cy.contains('mm/dd/yyyy').should("have.text",'mm/dd/yyyy')
    // Test above is failing. Same problem as in the test above with placeholder.

    //test below verify calendar symbol 
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .zmdi').should("be.visible")
    //cy.get('[class="zmdi zmdi-calendar-alt input-group-symbol"]').should("be.visible")
    // Second test is identical to calendar symbol in Check-in column, there's nothing to attach it to
    // in HTML

  })



  it('verify Travelers box', () => {
    cy.visit('http://localhost:3000')

    //tests below verify that Travelers box exists
    cy.get('#tab1 > form > :nth-child(3)').should("be.visible")

    // 3 tests below verify "Travellers" text
    cy.contains('travellers').should("have.text", 'travellers')
    cy.contains('travellers').should('be.visible')
    cy.get(':nth-child(3) > .label').should('be.visible')

    // tests below verify "1 ADULT, 0 CHILDREN, 1 ROOM" text
    cy.get('#info').should('be.visible')
    cy.get('[name="traveller"],[value="1 Adult, 0 Children, 1 Room"]').should("be.visible")
    //cy.contains('1 Adult, 0 Children, 1 Room').should("have.text",'1 Adult, 0 Children, 1 Room')
    // Test above is failing. Same problem as in the tests above with placeholder.

    //tests below verify add people symbol 
    cy.get('.zmdi-account-add').should("be.visible")
    cy.get('[class="zmdi zmdi-account-add input-group-symbol"]').should("be.visible")
    
    //tests below verify drop down menu symbol 
    cy.get('#js-select-special > .zmdi').should("be.visible")
    cy.get('[class="zmdi zmdi-chevron-down input-icon"]').should("be.visible")

  })



  it('verify Add a flight check box', () => {
    cy.visit('http://localhost:3000')

    //test below verify that Add a flight check box exists
    cy.get('[data-cy="flight_chk"]').should("be.visible")
    cy.get('[class="checkmark"],[data-cy="flight_chk"]').should("be.visible")

    // test below verify "Add a flight" text
    cy.contains('Add a flight').should("be.visible")
    
  })



  it('verify Add a car check box', () => {
    cy.visit('http://localhost:3000')

    //test below verify that Add a car check box exists
    cy.get('[data-cy="cars_chk"]').should("be.visible")
    cy.get('[class="checkmark"], [data-cy="cars_chk"]').should("be.visible")

    // test below verify "Add a car" text
    cy.contains('Add a car').should("be.visible")
    
  })



  it('verify Search button', () => {
    cy.visit('http://localhost:3000')

    //test below verify that Search button exists
    cy.get('#tab1 > form > .btn-submit').should("be.visible")
    cy.get('[class="btn-submit"]').should("be.visible")

    // test below verify "SEARCH" text
    cy.contains('search').should("be.visible")
    cy.contains('search').should("have.text",'search')
    
  })
})