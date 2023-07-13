class Project_Test{

    visit_site(){
        beforeEach(()=>{
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            //cy.wait(time)
        })
    }

    form_validation(name, last,email,number,direc,city,estado,cp,web,descrip,time){
        cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').clear().type(name) 
        cy.wait(time)   
        cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(last)
        cy.wait(time)      
        cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(email)    
        cy.wait(time)  
        cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(number)    
        cy.wait(time)  
        cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(direc)
        cy.wait(time)      
        cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(city) 
        cy.wait(time)    
        //cy.get('.form-control selectpicker').select('0', {force:true}).should('have.value','')
        cy.get('.selectContainer > .input-group > .form-control').select(estado, {force:true})//.should('have.text','Alabama')
        cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(cp)
        cy.wait(time)  
        cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(web)
        cy.wait(time)  
        cy.get(':nth-child(1) > label > input').should('be.visible').check()
        cy.wait(time)  
        cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should('be.visible').clear().type(descrip)
        cy.wait(time)

    }

    Error_verificaction(selector,msj,log){

        //cy.wait(time)  
        cy.get(selector).should('be.visible').then((valor)=>{
          let err=valor.text()
          let mensaje=msj
            if(mensaje==err){
                cy.log("*******")
                cy.log("El "+  log +" no es valido")
                cy.log("*******")

             }            
        })
        
        
        /*  let dato=valor.text()
        let mensaje=text_val      
        if(dato==mensaje){
          cy.log("*******")
          cy.log("El "+  msj +" no es valido")
          cy.log("*******")
        } */

    }

}//final

export default Project_Test;
