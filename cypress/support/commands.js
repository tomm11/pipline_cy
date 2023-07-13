// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })






//Comandos por bloque

Cypress.Commands.add('Form_validation', (name, last,email,number,direc,city,estado,cp,web,descrip,time) => { 
    //let time= time
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').clear().type(name) 
    cy.wait(time)   
    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(last)
    cy.wait(time)      
    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(email)    
    cy.wait(time)  
    cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(number)    
    cy.wait(time)  
    cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(direc)
    cy.wait(time)      
    cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(city) 
    cy.wait(time)    
    //cy.get('.form-control selectpicker').select('0', {force:true}).should('have.value','')
    cy.get('.selectContainer > .input-group > .form-control').select(estado, {force:true})//.should('have.text','Alabama')
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(cp)
    cy.wait(time)  
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(web)
    cy.wait(time)  
    cy.get(':nth-child(1) > label > input').should('be.visible').check()
    cy.wait(time)  
    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(descrip)
    cy.wait(time)  

})

Cypress.Commands.add('Fields_validations', (selector, text_val,msj,time) => {     
    cy.wait(time)  
    //tambien se podria hacer con un should('contain',msj)
    cy.get(selector).should('be.visible').then((valor)=>{
        let dato=valor.text()
        let mensaje=text_val      
        if(dato==mensaje){
          cy.log("*******")
          cy.log("El "+  msj +" no es valido")
          cy.log("*******")
        }
      }) 

   // Probar lo siguiente tambien
      Cypress.Commands.add('Verification_fields', (selector,msj,time) => {     
            cy.wait(time)  
            cy.get(selector).should('be.visible').should('contain', msj).then((valor)=>{
              cy.log("*******")
              cy.log("El "+  msj +" no es valido")
              cy.log("*******")
            })
        }) 
    

})



