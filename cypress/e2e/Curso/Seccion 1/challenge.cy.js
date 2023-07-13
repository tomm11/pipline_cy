// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe("Add new ", () =>{
        
        it("Searching and deleting", () =>{
            cy.viewport(1024, 768)
            cy.visit("https://demoqa.com/webtables")
            cy.get('#searchBox').should("be.visible").type("Cierra")
            cy.wait(2000)
            cy.get('#searchBox').should("be.visible").clear()            

        })

        it.only("Adding new user", () =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin").tab()
            .type("admin123")
            cy.get('.oxd-button').click()
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get('.orangehrm-header-container > .oxd-button').click()
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()          


        })
    })