// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

    

    /* La funcion Invoke, nos permite invocar una accion en un elemento del DOM. Acciones como Click, enviar forms, get, set. 
        Al utilizar invoke(), tienes la flexibilidad de llamar a cualquier método disponible en el elemento seleccionado.
        Unas funciones basicas serian:
        cy.get("#MyButton").invoke("click") //Clic en un boton
        cy.get("#MyForm").invoke('submit') //Enviando un form
        cy.get("#MyInput").invoke("val").then((value) =>{
            //Con esto estamos obteniendo el valor de un elemento para luego hacer algo
        })
        cy.get('#myInput').invoke('val', 'Nuevo valor') //Con esto setteamos nuevo valor de un elemento.

    */

    describe ("Full Invoke" , () =>{


        it("Invoke text" , () =>{
            cy.visit("https://tiemdigital.com/contacto")

            cy.get('.themecolor').invoke("text").as("info")
            cy.get("@info").should('have.contain', "Formulario de contacto").then(() =>{

                cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("Test").tab().type("hola@hola.com").tab()
                .type("asunto").tab().type("Mensaje")
            })
        })

        it("Invoke attr" , () =>{
            cy.visit("https://tiemdigital.com/contacto")
            cy.get('.mcb-item-jmx1qxi3c > .column_attr > h2').invoke("attr", "style", "color:black; font-size:50px")
            
        })

        it("Invoke challenge" , () =>{

            let time=2000

            cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
            cy.get('h1').should('be.visible')
            //Escondemos primero last name
            cy.get('[for="surname"]').invoke('hide')
            cy.get('#surname').invoke('hide')
            cy.wait(time)
            //Escribimos y luego mostramos
            cy.get('#firstname').type('Testing').then(()=>{
                cy.wait(time)
                cy.get('[for="surname"]').invoke('show',"5s")
                cy.get('#surname').invoke('show',"5s")
                cy.wait(time)
                cy.get('#surname').type('Surname')

            })
            
        })

        it.only("Invoke remove function" , () =>{
            cy.visit("https://demo.seleniumeasy.com/window-popup-modal-demo.html")
            cy.get('.two-windows > .btn').invoke('removeAttr', 'onclick').click({force:true})           
            
        })


    })