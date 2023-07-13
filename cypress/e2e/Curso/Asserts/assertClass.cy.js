///<reference types="Cypress"/> 
require('cypress-plugin-tab')

describe ("Type functiones" , () =>{
    it("Assert with Then" , () =>{
        cy.visit("https://tiemdigital.com/contacto/")
        cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').should("be.visible").then(()=>{
            cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("Tomas").tab()
            .type("tomas@hola.com")  
        })
     })

     it.only("Assert: Have.class & func. and" , () =>{
        cy.visit("https://tiemdigital.com/contacto/")
        cy.get(':nth-child(2)').should("be.visible").then(()=>{
            cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("Tomas").tab()
            .type("tomas@hola.com")  
        })
     })

})
//.and("have.class", "themecolor") doble validacion sin necesidad de usar otro should
