// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'

    /*describe ("Default" , () =>{
        it("Test" , () =>{
            cy.visit()
            cy.title()

        })
    })*/


    describe('Primera prueba', () =>{
    it("This is a first Hello", function () {
            cy.visit('https://tiemdigital.com')
            cy.title().should('eq','TD Digital Agencia Digital')
        })
    })

    