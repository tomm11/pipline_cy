///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe ("Type of select" , () =>{
        it("take ID Selectores" , () =>{
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should('eq','Datos Personales | TestingQaRvn')
            //cy.get("#wsf-1-field-21").should("be.visible").type("Tomas") //Select by ID(#)
            //cy.get("[placeholder='Nombre:']").should("be.visible").type("Tomas") //Select by atributo [Siempre entre corchetes]
            
        })

        it("Contains selects", () =>{
            cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
            //cy.title().should('eq','Datos Personales | TestingQaRvn')
            cy.get(".wsf-label").contains("PHP").click()

        })
        it.only("Copy Selector", () =>{
            cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
            //cy.title().should('eq','Datos Personales | TestingQaRvn')
            cy.get("#wsf-1-field-33").should("be.visible").type("hola@tomas.com")

        })
    })