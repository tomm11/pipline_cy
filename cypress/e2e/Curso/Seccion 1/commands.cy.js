// Shows commands
///<reference types="Cypress"/>
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

describe('Commands challenge', () => {
  let time=100
      beforeEach(()=>{        
                
          cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
          cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
          cy.wait(time)
      })

    Cypress.on('uncaught:exception',(err, runnable)=>{
      return false
    })  


  it.only('Form', () => {

    //A continuacion tenemos que pasar los siguientes campos: Nom,Apell, Email, Num, .....
    cy.Form_validation("a","Milia","hola@hola.com","8455551212","direccion","Barcelon","Alaska","08041","www.hola.com","estamos probando con cypress",time)
    //A continuacion tenemos que pasar los siguientes campos: selector, text_val,msj,time
    cy.Fields_validations('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]',"Please enter more than 2 characters", "Nombre", time)  

    
        
  })
  
  it('email validation', () => {
    cy.Form_validation("Tomas","Milia","holahola.com","8455551212","direccion","Barcelon","Alaska","08041","www.hola.com","estamos probando con cypress",time)   

    //A continuacion tenemos que pasar los siguientes campos: selector, text_val,msj,time
    cy.Fields_validations('[data-bv-validator="emailAddress"]',"Please supply a valid email address", "correo", time)   
    
  })

  it('phone validation', () => {
    cy.Form_validation("Tomas","Milia","holahola.com","00024","direccion","Barcelon","Alaska","08041","www.hola.com","estamos probando con cypress",time)
    
  })

  it('website validation', () => {
    cy.Form_validation("Tomas","Milia","holahola.com","8455551212","direccion","Barcelon","Alaska","08041","www.hola","estamos probando con cypress",time)
  })

  /* it('email validation', () => {
    cy.Form_validation("Tomas","Milia","holahola.com","8455551212","direccion","Barcelon","Alaska","08041","www.hola.com","estamos probando con cypress",time)
  });
 */

});