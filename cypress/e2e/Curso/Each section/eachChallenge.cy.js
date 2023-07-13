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
            //Creo arreglo para almacenar la cantidad de productos que pueda llegar a ver seccion
            const product=[];
            
            //La funcion each lleva como estandar 3 variables.
            cy.get('.ec_product_li').should('be.visible').each(($el, index, $list)=>{
                //cy.log(index)
                product[index]=$el.text()
            }).then(()=>{

                    for(let x=0; x<=product.length; x++){

                        cy.get(".ec_product_li").eq(x).click()
                        cy.get('.ec_quantity').clear().type(2)
                        cy.get('.ec_details_add_to_cart > input').click()
                        cy.get('#menu-item-561 > a').click()

                    }

              })
            
        })

    })