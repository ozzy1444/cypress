/// <reference types='cypress'/>

describe('cypress navigations', () => {
    it('Refresh, go back, go forward', () => {

        cy.visit('https://www.techglobal-training.com/');

        cy.reload();

        cy.visit('https://www.google.com/')

        cy.go('back');
        cy.go('forward');
        
        cy.go(-1); // another way to go back
        cy.go(1); // another way to go forward



    });
});