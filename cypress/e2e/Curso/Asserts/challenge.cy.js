describe ("Assert challenges" , () =>{
    it("Assert with Then" , () =>{
        cy.visit("https://tiemdigital.com/contacto/")
        cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').should("be.visible").then(()=>{
            cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("Tomas").tab()
            .type("tomas@hola.com")  
        })
     })

     it.only("Assert in inputs", () =>{
        let time=3000
        let val1=200
        let val2=25

        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        
        cy.get('#value1').should('be.visible').type(val1)
        //cy.wait (time)
        cy.get('#value2').should('be.visible').type(val2)
        cy.contains("[type='button']", "Get Total").should('be.visible').click()

       // cy.wait(time)
        cy.get('#displayvalue').should('be.visible').then((e)=>{
            let res = e.text()
            cy.log(res)
            let min=49
            if(res <= min){
                cy.log("El resultado es"+ res)
            }else{

                cy.log("Ha habido un error en la suma")

            }
                
            
        })
    })
})