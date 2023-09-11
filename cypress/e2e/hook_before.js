describe('practicing each method', () => {

    before(() => {

        cy.fixture('users').then((data) => {
            globalThis.data = data
        })


    })
    it('should login the page regular', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type(data.username1)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
        cy.contains('.oxd-main-menu li', 'Admin').click()
    });



})