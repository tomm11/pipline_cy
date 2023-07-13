// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'




    describe ("Dates fields" , () =>{
        it("Selecting date" , () =>{
            cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
            
            cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').type("09/12/2022").tab().type("01/11/1991 ").tab().type("02/11/1991/2 {esc}")

        })
    })