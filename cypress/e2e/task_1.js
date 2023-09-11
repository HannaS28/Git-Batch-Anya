/// <reference types="cypress" />

describe('practicing each method', () => {

    it('practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

        cy.get('.oxd-main-menu li').each((x) => {

            if (x.text().includes("Admin")) {
                cy.wrap(x).click()
            }
        })

        cy.get('.oxd-topbar-body-nav li').each((x) => {

            if (x.text().includes("Corporate Branding")) {
                cy.wrap(x).click()
            }
        })


        cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title").invoke('text').as('nationka')



        cy.get("@nationka").should("include", "Corporate Branding")

    });



});