// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe ("Checkbox" , () =>{
        it("primer check" , () =>{
            cy.visit("https://luxdagr.com/catalogo/")
            cy.get('#field_yqt85_first').type("Tomas").tab().
            type("apellido ")
            cy.get('#field_noy3a').select("Autos").tab().
            type("No").tab().type("Que tenga oro").tab().
            type("111.111").tab().type("Cuero de cocodrilo")
            cy.get('#field_i3nrb-0').check()            
        })

        it.only("select check" , () =>{
            cy.visit("https://luxdagr.com/catalogo/")
            cy.get('#field_yqt85_first').type("Tomas").tab().
            type("apellido ")
            cy.get('#field_noy3a').select("Barcos").should("have.value","Barcos")     
            //cy.get('#field_noy3a').select["Barcos", "Autos", "Aviones"]  // Multiselect   
        })
    })