/// <reference types='cypress'/>

describe('Cypress selectors', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/html-elements')
    });

    it('Validate Register Button', () => {
        cy.get('#register_button')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'Register');
        cy.get('#register_button').click()
    });

    it('Validate Heading section', () => {
        cy.get('#languages_heading')
        .should('be.visible')
        .and('have.text', 'Programming Languages')

        cy.get('#tools_heading')
        .should('be.visible')
        .and('have.text', 'Automation Tools')
    });

    it('Understanding CSS Syntax - Lovating using tags', () => {

        cy.get('button');

        cy.get('h3');

        cy.get('li');

        cy.get('input');
    })

    it('Understanding CSS Syntax - Locating using tags', () => {

        cy.get('#voiceSearchButton') // ID use #

        cy.get('.HeroBanner_container__iInji') // class use . 

        cy.get('button.is_white.button') // this is how you find a unique web element using multiple attributes
        //First you add the web element tag name then the . and then the class name
    });

    it('Understanding CSS Syntax - Locating child, descendent, adjacent', () => {

        // the > sign goes up to the parent by 1
        cy.get('#checkbox-button-group > h3') 

        cy.get('#checkbox-button-group > div > label#apple_check > #checkbox_1');

        // you can skip sub childs and jump to like the 4th child for example
        cy.get('#chekbox-button-group #microsoft_check'); 

        //Locate the immdeiate sibling of web element 
        cy.get('#ordered_list #ordered_list_item1 + li');

        //locate the immediate sibling of 2nd or 3rd web element 
        cy.get('#ordered_list #ordered_list_item1 + li + li');

        //grouping selector element / this selects ID from different containers
        cy.get('#registor_button, #main_header_container')


        /**
         * nav to techglobal frontend html elements page
         * validate 'enter text here' input bar is visible
         * validate 'facebook link' input is visible
         */
        cy.get('#text_input1').should('be.visible');
        cy.get('#facebook_link').should('be.visible');

        cy.get('#text_input1, #facebook_link').should('be.visible') // better way of solving 
    });

    it('locating the element using Attribute selectors', () => {

        // you can get other attributes by putting the attribute name inside a [] 
        cy.get('[date-identifier="Heading"]');
        cy.get('[value="Apple"]');
        cy.get('[id="checkbox-button-group"]')
    })

    it('Test Case', () => {
        /**
         * Nav to techglobal website in dynamic elements 
         * locate the below boxes is displayed
         * box 1
         * box2
         */

        cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements');
        cy.get('[id^=#box_]').should('be.visible'); // turns out the attributes are dynamic so thats why its not working 


        //how to deal with dynamic attributes 
        /**
         * contains  => [id*=box_1_]
         * starts-with  => [id^=box_1_]
         * ends-with  => [id$=box_1_]
         */
    })

    it('Pseudo Class', () => {
        cy.get('#ordered_list > li:first-child')
        cy.get('#ordered_list > li:last-child')
        cy.get('#ordered_list > li:nth-child(2)') // this is how to you get the middle childs, just put the # in the ()

        cy.get('#ordered_list > button:checked') // will give you all the web elements that are checked / very useful
    })
});