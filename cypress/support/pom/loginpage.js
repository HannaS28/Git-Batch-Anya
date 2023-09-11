class login {


    visitthepage(username, password) {

        cy.visit('/')

        cy.get('[name="username"]').type(username)
        cy.get('[name="password"]').type(password)

    }

    submit() {
        cy.get('[type="submit"]').click()
    }

}

export default login