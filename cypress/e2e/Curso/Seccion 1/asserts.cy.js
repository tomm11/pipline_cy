///<reference types="Cypress"/> 

    describe ("Asserts functions" , () =>{
        it("Assert" , () =>{
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should('eq','Datos Personales | TestingQaRvn')
            cy.wait(1000)

            cy.get('#wsf-1-field-21').should("be.visible") //Si el campo es visible
            cy.get('#wsf-1-field-21').should("be.visible").should("be.enabled") //Si el campo es visible y esta habilitado, se puede seguir de un type()
            
            

        })
    })