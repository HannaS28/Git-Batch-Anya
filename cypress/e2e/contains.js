/// <reference types="cypress" />



describe('practicing eq method', () => {

    it('practice contain method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.contains('Forgot your password').click()



    });

});

