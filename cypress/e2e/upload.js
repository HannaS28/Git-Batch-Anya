/// <reference types="cypress" />

describe('practicing eq method', () => {

    it('practice upload method', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile("cypress/fixtures/cat.jpeg")

        cy.get('.button').click()

        cy.get('.example h3').should('have.text', 'File Uploaded!')




    });

});

