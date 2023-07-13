// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'




    describe ("Each functions" , () =>{

        it("Basic each" , () =>{
            cy.visit("https://academybugs.com/find-bugs/")
            cy.title('eq', "Find Bugs – AcademyBugs.com")
            //La funcion each lleva como estandar 3 variables.
            cy.get(".academy-product-description-wrapper").should('be.visible').each(($el, index, $list)=>{

                //Con la fucion text vemos que trae adentro la variable $el
                cy.log($el.text())
                //cy.log(index)
               // cy.log($list)
              
            })
        })

        it.only("Busqueda de producto e ingreso" , () =>{
            cy.visit("https://academybugs.com/find-bugs/")
            cy.title('eq', "Find Bugs – AcademyBugs.com")
            //La funcion each lleva como estandar 3 variables.
          //  cy.get(".academy-product-description-wrapper").should('be.visible').each(($el, index, $list)=>{
            cy.get('.ec_product_li').should('be.visible').each(($el, index, $list)=>{

                //Con la fucion text vemos que trae adentro la variable $el
                cy.log($el.text())
                let product=$el.text()

               if(product.includes("DNK Yellow Shoes")){
                    cy.wrap($el).click()
                 }
               
              
            })
        })




    })