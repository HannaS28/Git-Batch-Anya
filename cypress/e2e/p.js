///<reference types = "cypress" />


describe('practice iframe', () => {

    it.only('iframe', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')



        cy.get('#mce_0_ifr').then($iframe => {
            // Get the document within the iframe
            const iframeDocument = $iframe.contents().find('body');

            // Now you can interact with elements inside the iframeDocument
            cy.wrap(iframeDocument).clear().type('Text inside iframe');

        });

    });
    it('iframe', () => {
        cy.visit('https://nxtgenaiacademy.com/iframe/')


        // Get the iframe element
        cy.get('[name="iframe_a"]').then($iframe => {
            // Get the document within the iframe
            const iframeDocument = $iframe.contents().find('body');

            // Now you can interact with elements inside the iframeDocument
            cy.wrap(iframeDocument).find('#vfb-5').type('Text inside iframe');

        });



    });
});
