///<reference types="Cypress"/> 
    require('cypress-plugin-tab') //Se instala un plugin aparte para poder usar la funcion de tab en los form por ejem. https://www.npmjs.com/package/cypress-plugin-tab

    describe ("Tab Function" , () =>{
        it("Type con tab" , () =>{
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should('eq','Datos Personales | TestingQaRvn')
            cy.wait(1000)

            cy.get('#wsf-1-field-21').type("Tomas").tab().type("Milia").tab().type("miliatomas@gmail.com")


        })
    })

