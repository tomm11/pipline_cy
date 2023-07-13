// Shows commands
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

    describe ("Full Asserts" , () =>{
        it("Contains assert" , () =>{
            cy.visit("https://automationexercise.com")
            cy.get('.shop-menu > .nav').contains("Products").click()            

        })

        it("Assert find, eq" , () =>{
            cy.visit("https://automationexercise.com")
            cy.get('.shop-menu > .nav').contains("Products").click()
            cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').eq(0).click()
           })

        it("Text verify " , () =>{
            cy.visit("https://automationexercise.com")
            cy.get('.shop-menu > .nav').contains("Products").click()
            cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').eq(0).click().then(()=>{
                cy.get('.product-information > :nth-child(7)').then((e)=>{
                    let estado=e.text()
                    //cy.log(estado)
                    if(estado=="New"){
                        cy.log("Producto nuevo cargado exitosamente")
                    }
                })

            })
           })


        it("Price verify" , ()=>{
            cy.visit("https://automationexercise.com")
            cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
            cy.get(':nth-child(5) > span').then((e)=>{
                let precio=e.text()
                let preciofinal
                //cy.log(precio)
                preciofinal=precio.slice(4,7)  //Funcion slice para quitar signos y demas caracteres en precios
                //cy.log(preciofinal)

                if (preciofinal < 500 ){
                    cy.log("No podemos comprar")
                }else{
                    cy.get(':nth-child(5) > .btn').click()
                    cy.get('.modal-footer > .btn').click()
                }
            })
           })


         it.only("Contains assert" , () =>{
            cy.visit("https://demoqa.com/text-box")
            cy.get('#userName').type("Tomas")
            cy.get('#userEmail').type("hola@hola.com")
            cy.get('#userName').should('have.value', 'Tomas') // Aserción
          })
          
          it("Contains assert" , () =>{
            cy.visit("https://demoqa.com/text-box")
            cy.get('#userName').type("Tomas")
            
          })
          
        
    })