// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'

//Instalamos un plugin para subir archivos.
//npm install --save-dev cypress-fill-command y desp con el import de arriba llamamos le funcion

    /*describe ("Default" , () =>{
        it("Test" , () =>{
            cy.visit()
            cy.title()

        })
    })*/


    describe('Uploading files', () =>{


    it("Upload image", function () {

            cy.visit('https://testingqarvn.com.es/upload-files/')    
            cy.get('#wsf-1-field-80').type('Tomas').tab().type('Milia').tab().
            type('hola@hola.com').tab().type('123456').tab().type('bailen 145').tab()
            cy.wait(2500)
            cy.get('input[type=file]').selectFile('cypress/fixtures/test.png')

            
            
            
        })
    })
