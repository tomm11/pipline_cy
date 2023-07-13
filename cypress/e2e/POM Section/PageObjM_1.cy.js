import Project_Test from '../../support/PageObjModel/Test/ClassPomTest.cy'
// Shows commands

/// <reference types="Cypress" />
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

describe('Page Objet Model test', () => {    
    
    /* Cypress.on se utiliza para registrar eventos y establecer controladores para manejar esos eventos
        Esta instrucción indica a Cypress que ignore la excepción no capturada y no la trate como un 
        error crítico que detendrá la ejecución de la prueba
    */
    Cypress.on('uncaught:exception',(err, runnable)=>{
         return false
    })

    /*Declaramos una variable que no cambiara su valor por medio de "const"
      A la variable "Master" le asignamos la instancia de la clase "Project_test" utilizando el operador "new".
      Con esto decimos que Master es una referencia a un objeto apartir de la clase "Project_test"  
    */
    const Master=new Project_Test()

    Master.visit_site()
  
    it('Full form validation', () => {
        Master.form_validation("a","perez","juan@test.com","8455551212","industria 304","Barcelona", "Colorado","08026","test.com","eestamos testeando",500)
        //cy.Verification_fields("[data-bv-validator='phone']", "Please supply a valid phone number with area code", 500)
        Master.Error_verificaction('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]', "Please enter more than 2 characters","Nombre")
        cy.screenshot("Test Finalizado")
    });


});