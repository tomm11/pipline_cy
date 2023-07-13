///<reference types="Cypress"/> 

    describe ("Type functiones" , () =>{
        it("Type" , () =>{
            cy.visit("https://google.com")
            cy.title().should('eq','Google')
            cy.get('.gLFyf').type('Cypress io {enter}')
            

        })
    })