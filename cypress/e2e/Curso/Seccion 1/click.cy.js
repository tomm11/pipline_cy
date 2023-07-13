///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe ("Click function" , () =>{
        it("Simple click" , () =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.wait(1000)

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin").tab().
            type("admin123")
            cy.get('.oxd-button').should("be.visible").click()
            //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()

        })

        // El Force:true, forzamos al sistema a clickear por algun tema de z-index y demas. buscar bien funcion en doc
        it("Force true click" , () =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.wait(1000)

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin").tab().
            type("admin123")
            cy.get('.oxd-button').should("be.visible").click()
            //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click() 
            
        })

        it.only("Click by x,y" , () =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.wait(1000)

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin").tab().
            type("admin123")
            cy.get('.oxd-button').should("be.visible").click()
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').click(50,5)            
        })


    })