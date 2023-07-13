// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe ("Testing App" , () =>{
        it("Adding element" , () =>{
            cy.visit("https://computer-database.gatling.io/computers")
            cy.get('#main > h1').should('be.visible')

            /*//Buscando
            cy.get('#searchbox').should('be.visible').type("ACE")
            cy.wait(1500)
            cy.get('#searchsubmit').click()*/

            //adding
            cy.get('#add').should("be.visible").click()
            cy.get('#name').type("Tomi-PC").tab().type("1991-01-11").tab().type("1992-01-11")
            cy.get("#company").select("Sony")
            cy.get('.primary').should("be.visible").click()

            //Researching
            cy.get('#searchbox').should('be.visible').type("Tomi-PC")
            cy.wait(1500)
            cy.get('#searchsubmit').click()
        })
    })