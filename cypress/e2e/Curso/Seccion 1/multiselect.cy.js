// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe ("Multi selects" , () =>{
        it("Test" , () =>{
            cy.visit("www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap")
            cy.get('.unselected').select(["Adele Pratt","Adrian Burton"]).then(()=>{
                cy.get('.str').should("be.visible").click()
            })
            cy.wait(2000)
            cy.get('.atr').click().then(()=>{
                cy.get(':nth-child(3) > .filter').type("Agnes Delgado").then(()=>{
                    cy.wait(1500)
                    //cy.get('.selected-count').should('have.value','1') // tratar de que funcione.
                })
            
            })
        })
    })