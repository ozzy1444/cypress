/// <reference types="cypress"/>


describe('Cypress Advanced Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/actions');
    });

    let query = 'TechGlobal'
    it('Type and clear actions', () => {
        cy.get('#input_box')
        .should('exist')
        .and('be.visible')
        .and('be.enabled')
        .and('have.attr', 'placeholder', 'Enter your message...')
        .and('have.attr', 'value', '')
        .type(query)
        .should('have.attr', 'value', query)
        .clear()
        .should('have.attr', 'value', '')
    });

    it('Right click and Double click', () => {
        cy.get('#right-click').rightclick()
        cy.get('#right_click_result')
        .should('be.visible')
        .and('have.text', 'You right-clicked on a button!')

        cy.get('#double-click').dblclick()
        cy.get('#double_click_result')
        .should('be.visible')
        .and('have.text', 'You double-clicked on a button!')
    });

    it('Drag and Drop', () => {
        cy.get('#drag_element').drag('#drop_element'); // requires 4tw/cypress-drag-drop dependency
        cy.get('#drag_and_drop_result')
          .should('be.visible')
          .and('have.text', 'An element dropped here!')
      });

      it('Hover Over', () => {
        // cy.get('#dropdown-testing').trigger('mouseover'); // does not work and requires cypress-real-event-dependency
        cy.get('#dropdown-testing').realHover();
        cy.get('#backend-option').click();
        cy.url().should('include', 'backend');

        // cy.on() here is used to listen if we get any 'uncaught:exception'
        // and ignore it by returning false
        cy.on('uncaught:exception', () => {
            return false
        })
      });
})