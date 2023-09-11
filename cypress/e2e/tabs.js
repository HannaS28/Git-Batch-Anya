/// <reference types="cypress" />

describe('practicing eq method', () => {

    it('practice eq method', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr', 'target').click()

    });

});

