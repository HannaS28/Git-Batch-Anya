/// <reference types="cypress" />

describe('practicing eq method', () => {

    it('practice eq method', () => {

        cy.visit('https://tablepress.org/demo/')




        cy.contains('#tablepress-demo tbody tr td', 'Hale').should('have.text', 'Hale')


        cy.get('#tablepress-demo tbody tr td').first().should('contain', 'Gloria')


        cy.get('#tablepress-demo tbody tr td').last().should('contain', '$20')



    });

});

