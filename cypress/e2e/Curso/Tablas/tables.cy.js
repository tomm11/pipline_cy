// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'


    describe ("Tablas" , () =>{

        it("Children functions" , () =>{
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            //cy.title('eq', "Find Bugs – AcademyBugs.com")
            let time=2000
            
            cy.get(".btn-group").should('be.visible').children('.btn-success').should("contain","Green").click()
            cy.wait(time)
            cy.get(".btn-group").should('be.visible').children('.btn-danger').click()
        })

        it("Function eq validation" , () =>{
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            //cy.title('eq', "Find Bugs – AcademyBugs.com")
            let time=2000
            
            cy.get("[type='button']").eq(2).should("contain","Orange").click()            
            cy.wait(time)
            cy.get("[type='button']").eq(4).should("contain","All").click()
           
        })

        it("Function Filter" , () =>{
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            //cy.title('eq', "Find Bugs – AcademyBugs.com")
            let time=2000
            
            cy.get("[type='button']").filter(".btn-success").should("contain", "Green").click()
            cy.wait(time)
            cy.get("[type='button']").filter(".btn-danger").should("contain", "Red").click()
           
        })

        it("Function Find & First" , () =>{
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            //cy.title('eq', "Find Bugs – AcademyBugs.com")
            let time=2000
            
            cy.get(".btn-group").find("button").first().click({force:true})
            cy.wait(time)
            //Tambien esta la funcion Last
            cy.get(".btn-group").find("button").last().click({force:true})
        })

        it("Tables with For" , () =>{
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            //cy.title('eq', "Find Bugs – AcademyBugs.com")
            let time=2000

            for(let x=1; x<=4; x++){
                cy.get("[type='button']").eq(x).click({froce:true})
                cy.wait(time)
                cy.get("[type='checkbox']").check({force:true})
            }
        })

        it.only("Tables with For" , () =>{
            cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
            //cy.title('eq', "Find Bugs – AcademyBugs.com")
            let time=2000
           
        })


    })