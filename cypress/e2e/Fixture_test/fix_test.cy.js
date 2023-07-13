// Shows commands
///<reference types="Cypress"/>
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

describe('Testing Fixture', () => {
    
    /* before(function(){

        //Buscar bien la teoria y poner a que se refiere.
        cy.fixture('test').then((data)=>{
            globalThis.data=data
        })
    })     */
    
    
     Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    }) 

 /*  it('Form', () => {
        cy.visit('https://demoqa.com/text-box')
        //cy.title().should('eq','ToolsQA')
        //cy.wait(time)
        cy.get('#userName').should('be.visible').type(data.name)
  }); */


    it.only('Test con ForEach', () => {

        cy.fixture("form").then(datos_json =>{
            datos_json.forEach(datos => {

                const d_name=datos.first_name
                const d_lname=datos.last_name
                const d_email=datos.email
                const d_phone=datos.phone
                const d_adress=datos.address
                const d_city=datos.City
                const d_state=datos.state
                const d_code=datos.code
                const d_site=datos.site
                const d_descrip=datos.descrip
                
                
                cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')

                cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_name)
                cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_lname)
                cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_email)
                cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_phone)
                cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_adress)
                cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_city)
                cy.get('.selectContainer > .input-group > .form-control').should('be.visible').type(d_state)
                cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_code)
                cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_site)
                cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should('be.visible').type(d_descrip)
                

            });
        })


      
    });


});