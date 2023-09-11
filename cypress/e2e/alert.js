/// <reference types="cypress" />

describe('practicing eq method', () => {

    it('practice eq method', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // Alert 1
        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:confirm', () => { })

        cy.get('#result').invoke('text').should('include', 'You successfully clicked an alert')
        // Allert 2
        cy.get('button[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', () => {
            return true
        })

        // Alert 3

        cy.window().then((x) => {
            cy.contains('Click for JS Prompt').click()
            cy.stub(x, 'prompt').returns("Seifi")
        })




    });

});

