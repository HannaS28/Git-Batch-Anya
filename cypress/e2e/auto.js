/// <reference types="cypress" />

describe('practicing eq method', () => {

    it('practice eq method', () => {

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('A')

        cy.contains('.G43f7e li', 'Apple').click()

    });

    it('practice eq method', () => {

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('A')

        cy.get('.G43f7e li').last().click()

    })

});

