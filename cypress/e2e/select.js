/// <reference types="cypress" />

describe('practicing each method', () => {


    it('another url', () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")

        cy.get("#testingDropdown").select('Database')


    });
})