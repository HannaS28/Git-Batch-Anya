/// <reference types="cypress" />

describe('practicing eq method', () => {

    it('practice eq method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').then(() => {
            debugger

        })

        // .click()

        //cy.get('.oxd-main-menu li').eq(5).click()
        //cy.get(".orangehrm-tabs div").eq(1).click()


    });

});