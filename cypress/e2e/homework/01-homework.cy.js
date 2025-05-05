/// <reference types='cypress'/>

describe('Homework 1', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/form-elements')
    })

    it('Validate the Contact Us information TestCase 1', () => {
        cy.get('h1[class="is-size-3"]').should('have.text', 'Contact Us');
        cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
        cy.get('#email').should('have.text', 'info@techglobalschool.com');
        cy.get('#phone-number').should('have.text', '(224) 580-2150');
    });

    it('Validate the Full name input box TestCase 2', () => {
        cy.get('input[placeholder="Enter your full name"]').should('exist');
        cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'required')
        cy.get('label[for="name"]').should('have.text', 'Full name *');
        cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name');
    });

    it('Validate the Gender radio button TestCase 3', () => {
        const expectedOptions = ['Male', 'Female', 'Prefer not to disclose']
        cy.get('div .control > label.label').should('have.text', 'Gender *');
        cy.get(':nth-child(2) > .mr-1').should('have.attr', 'required');
        expectedOptions.forEach(option => {
            cy.contains(option).should('exist');
        });
        cy.get('[class="mr-1"]').check();
        cy.get(':nth-child(2) > .mr-1').check().should('have.attr', 'type', 'radio') // radio by default can only have 1 value
        cy.get(':nth-child(3) > .mr-1').check().should('have.attr', 'type', 'radio') // radio by default can only have 1 value
    });

    it('Validate the Address input box', () => {
        cy.get('input[placeholder="Enter your address"]').should('be.visible');
        cy.get('input[placeholder="Enter your address"]').should('not.have.attr', 'required');
        cy.contains('label', 'Address').should('have.text', 'Address');
        cy.get('input[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address');
    });

    it('Validate the Email input box', () => {
        cy.get('input[placeholder="Enter your email"]').should('be.visible');
        cy.get('input[placeholder="Enter your email"]').should('have.attr', 'required');
        cy.contains('label', 'Email *')
        cy.get('input[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email');
    });

    it('Validate the Phone input box', () => {
        cy.get('input[placeholder="Enter your phone number"]').should('be.visible');
        cy.get('input[placeholder="Enter your phone number"]').should('not.have.attr', 'required');
        cy.contains('label', 'Phone');
        cy.get('input[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number');
    });

    it('Validate the Message text area', () => {
        cy.get('.textarea').should('be.visible');
        cy.get('.textarea').should('not.have.attr', 'required');
        cy.contains('label', 'Message');
        //cy.contains('input[placeholder="Type your message here..."]').should('have.attr', 'placeholder', 'Type your message here...');
    });
    
    it('Validate the Consent checkbox', () => {
        cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.');
        cy.get('input[type="checkbox"]').should('have.attr', 'required');
        cy.get('.checkbox').click();
        cy.get('input[type="checkbox"]').should('be.checked');
        cy.get('input[type="checkbox"]').click().should('not.be.checked');
    });

    it('Validate the SUBMIT button', () => {
        cy.get('button.button.is-link').should('be.visible');
        cy.get('button.button.is-link').click();
        cy.get('button.button.is-link').should('has.text', 'SUBMIT');
    });

    it.only('Validate the form submission', () => {
        cy.get('input[placeholder="Enter your full name"]').type('Aziz')
        // I keep getting the cypress error 
    })
});