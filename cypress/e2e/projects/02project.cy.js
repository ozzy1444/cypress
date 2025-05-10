/// <reference types="cypress"/>

describe('Project 2', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/login')
    })

    it('Validate the login form', () => {
        cy.get('#username').should('be.visible')
        .and('not.have.attr', 'required')
        cy.get('label[for="username"]').should('have.text', 'Please enter your username')

        cy.get('#password').should('be.visible')
        .and('not.have.attr', 'required')
        cy.get('label[for="password"]').should('have.text', 'Please enter your password')

        cy.get('#login_btn').should('be.visible')
        .click()
        .and('have.text', 'LOGIN')

        cy.get(':nth-child(4) > a').should('be.visible')
        .click()
        .and('have.text', 'Forgot Password?')
    });

    it('Validate the valid login', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#success_lgn').should('have.text', 'You are logged in')
        cy.get('#logout').should('be.visible')
        .and('have.text', 'LOGOUT')
    });

    it('Validate the logout', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#logout').click()
        cy.get('.has-background-white-ter').should('be.visible')
    })

    it('Validate the forgot passoword? Link and Reset password modal', () => {
        cy.get(':nth-child(4) > a').click()
        cy.get('.modal-card-head').should('be.visible')
        cy.get('#submit').should('be.visible')
        cy.get('#email').should('be.visible')
        //cy.get('[for="email"]').should('have.text', "Enter your email address and we'll send you a link to reset your password.")
        cy.get('#submit').should('be.visible')
        .click()
        .and('have.text', 'SUBMIT')
    });

    it('Validate the reset password modal close button', () => {
        cy.get(':nth-child(4) > a').click()
        cy.get('.modal-card-body').should('be.visible')
        cy.get('[aria-label="close"]').click()
        cy.get('.modal-card-body').should('not.exist')
    });

    it('Validate the Reset password form submission', () => {
        cy.get(':nth-child(4) > a').click()
        cy.get('#email').type('aziz@gmail.com')
        cy.get('#submit').click()
        cy.get('#confirmation_message').should('be.visible')
        .and('have.text', 'A link to reset your password has been sent to your email address.')
    })

    it('Validate the invalid login with the empty credentials', () => {
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')
    });

    it('Valdiate the invalid login with the wrong username', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')
    });


    it('Valdiate the invalid login with the wrong password', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Password entered!')
    });

    it('Valdiate the invalid login with the wrong username and password', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')
    });

})