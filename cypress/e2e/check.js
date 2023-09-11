/// <reference types="cypress" />

describe('practicing each method', () => {


    it('another url', () => {

        cy.visit("https://the-internet.herokuapp.com/checkboxes")

        cy.get('#checkboxes > :nth-child(1)').check()

    });

    it('another url', () => {

        cy.visit("https://the-internet.herokuapp.com/checkboxes")

        cy.get('[checked=""]').uncheck()

    });
})
