// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'


//Instalamos plugin para drag-drop elementos: npm install --save-dev @4tw/cypress-drag-drop
//Necesitamos añadir el require para usarlo



    describe ("Mouse evento" , () =>{
        
        it("Drag and drop" , () =>{
            cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
            
            //Click al elemento para drag
            cy.get('#todrag > :nth-child(2)').drag("#mydropzone", {force:true})
        })

        it("Drag and drop" , () =>{
            cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
            
            //Click al elemento para drag
            cy.get("#todrag > :nth-child(2)").drag("#mydropzone", {force:true})
        })

        it("Mouse Hover with Invoke", () =>{

            cy.visit("https://github.com/")
            //Buscamos por id y por frase para pararnos como hover
            //cy.contains("Solutions").trigger('mouseover')
            cy.get('.d-lg-flex.list-style-none > :nth-child(2) > .HeaderMenu-link').trigger('mouseover')

        })
        
        

        it.only("Drag and drop bars", () =>{

            let time=2000
            cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
            //
            cy.get('#slider1 > .range > input').invoke("attr", "value", "80" )
            cy.wait(time)
            cy.get('#slider2 > .range > input').invoke("attr", "value", "8" )
            cy.wait(time)
            cy.get('#slider3 > .range > input').invoke("attr", "value", "50" )
            cy.wait(time)
            cy.get('#slider4 > .range > input').invoke("attr", "value", "65" )


          
            

        })
    })