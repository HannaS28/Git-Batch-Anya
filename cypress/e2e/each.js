/// <reference types="cypress" />

describe('practicing each method', () => {

    it('practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()

        cy.get('.oxd-main-menu li').each((x) => {

            if (x.text().includes("Recruitment")) {
                cy.wrap(x).click()
            }
        })

        cy.get('.oxd-topbar-body-nav-tab-item').each((x) => {

            if (x.text().includes("Vacancies")) {
                cy.wrap(x).click()
            }
        })


        cy.get(".oxd-text.oxd-text--h5.oxd-table-filter-title").invoke('text').as('anya')



        cy.get("@anya").should("include", "Vacancies")

    });



});