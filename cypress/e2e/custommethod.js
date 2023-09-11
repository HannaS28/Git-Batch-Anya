import hr from "../support/pom/loginpage"

describe('practicing custom  method', () => {

    const login = new hr

    before(() => {

        cy.fixture('users').then((data) => {
            globalThis.data = data
        })


    })
    it('should login the page regular', () => {

        login.visitthepage(data.username1, data.password1)
        login.submit()


        tab.selec('Admin')

    });



})