// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

    /*describe ("Default" , () =>{
        it("Test" , () =>{
            cy.visit()
            cy.title()

        })
    })*/

     describe ("Alias basico" , () =>{

        it("Alias" , () =>{
            cy.visit("https://tiemdigital.com/contacto")
            let time=2000

            //con la funcion .as("ejemplo") estamos nombrando el elemento que agarramos a ese alias para ser usado despues
            cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').as("nombre")
            cy.get(':nth-child(3) > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').as("mail")
            cy.get(':nth-child(5) > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').as("msj")

            //Uso del alias con el arroba ("@ejemplo")
            cy.get("@nombre").type('tomas')
            cy.wait(time)
            cy.get("@mail").type('hola@hola.com')
            cy.wait(time)
            cy.get("@msj").type('Este es el mensaje de prueba')
        })



    })