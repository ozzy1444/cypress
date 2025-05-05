/// <reference types='cypress'/>

describe('TechGlobal Training Home Page Validation', () => {
    before(() => {
        cy.log('Starting Techglobal training homepage validation...')
    });

    after(() => {
        cy.log('finishing Techglobal training homepage validation...')
    })

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/');
    });

    afterEach(() => {
        cy.log('Test is Completed');
    });

    it('Validate Welcome section', () => {
        // code goes here 
    });

    it('Validate About Us section', () => {
        //code goes here
    });

    it('Validate Programs section', () => {
        //code goes here
    });
});