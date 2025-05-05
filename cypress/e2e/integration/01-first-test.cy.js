/// <reference types="cypress" />

it('Validate TechGlobal URL and title', () => {
    cy.visit('https://www.techglobal-training.com/');

    //Validate url

    cy.url().should('eq', 'https://www.techglobal-training.com/');
    cy.url().should('not.be', 'https://www.apple.com/');
    cy.url().should('include', 'techglobal');
    cy.url().should('not.include', 'apple');

    //Validate title
    cy.title().should('equal', 'TechGlobal Training | Home');
    cy.title().should('not.be', 'apple');
    cy.title().should('include', 'TechGlobal');
    cy.title().should('not.include', 'abc');
});

