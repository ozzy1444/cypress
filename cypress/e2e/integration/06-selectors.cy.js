/// <reference types='cypress'/>

describe('Cypress selectors', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend');
    }); 

    it('Practice Web Elements using - get and contains', () => {

        //cy.get('.CardGrids_CardGrids_qDdyI').as('allCards')
        // the .as is kind of like variables in javascript, now the .CardGrids class name is inside the allCards
        //cy.get('@allCards');
        



        //Handling multiple elements 
        
        // returns the first element 
        cy.get('.card').first();
        // returns the last element 
        cy.get('.card').last();
        // return a targeted specific index of an element
        cy.get('.card').eq(8);



        //Locates the web elements by its visual texts on the GUI
        cy.contains('HTML Elements')

        cy.contains('Elements');

        // This one tries to find element with 'HTML elements' visible texxt inside the web element using .card and class name 
        cy.contains('.card', 'HTML Elements'); 

        //This will do the same thing as above more explicitly 
        // It will look for card with 'HTML Elements' visible texts only insude the class name 
        //@allCards => .CardGrids_CardGrids_qDdyI
        cy.get('@allCards').contains('HTML Elements')

    });

    it('Practice Web Elements using - find()', () => {
        cy.contains('.card', 'HTML Elements').click();

        cy.get('#radio-button-group').find('div'); // this does the same thing as (#radio-button-group div) when 
        // wanting to find all child divs in a parent element

        cy.get('#radio-button-group div'); // same thing like this 




        //next()  =>  Locates the immediate next sibling of the a web element 
        cy.get('div').contains('Paragraphs').next();

        //nextAll()  =>  Locates the ALL the immediate next siblings of the a web element 
        cy.get('div').contains('Paragraphs').nextAll();

        //prev()  =>  Locates the immediate previous sibling
        cy.get('#testing_paragraph').prev();

        //prevAll()  =>  Locates ALL the immediate previous siblings
        cy.get('#testing_paragraph').prevAll();

        // parent() =>  Locates the immediate parent of a web element(direct parent/first parent)
        cy.get('#testing_paragraph').parent();

        // parents()  => Locates the ALL immediate parent of a web element(direct parent/first parent)
        cy.get('#testing_paragraph').parents('#HtmlElements_mainContainer__Fpn6M');

        // Locatees until the specific parent 
        cy.get('#testing_paragraph').parentsUntil('#HtmlElements_mainContainer__Fpn6M');

        //gets the children elements
        cy.get('#testing_paragraph').children();


        cy.get('#apple_check')
        .parent('#checkbox-button-group')
        .next()
    });
})


