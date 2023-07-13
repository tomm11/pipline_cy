// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

describe('Validaciones Windows', () =>{


    it("Validacion UTF-8", function () {
            let time= 1500

            cy.visit('https://tiemdigital.com')
            cy.get('#slider-2-slide-2-layer-0').should("be.visible")    
            cy.wait(time)

            //cy.document se utiliza para acceder al DOM. La funcion capta todo el documento y podemos verificar datos, y demas.
            cy.document().should("have.a.property", "charset").and('eq','UTF-8')

        })

    it.only("Validamos URL", () =>{
        let time=2000
        cy.visit("https://tiemdigital.com/contacto")
        //cy.get('#slider-2-slide-2-layer-0').should("be.visible") 

        //cy.url te permite obtener y verificar la URL actual, se obtiene info de la url actual que estamos probando. Info obtenida: URL, Host, Puerto, Ruta
        cy.url().should("include","contacto")
        

    })    
})
