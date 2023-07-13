// Shows commands
///<reference types="Cypress"/>
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

describe('Hooks examples', () => {

    //before, le estamos diciendo que antes que todo haga lo siguiente
    before(()=>{
        let time=2000
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("admin123")
        cy.get('.oxd-button').click()

    })

  it('Basic hooks', () => {
    let time=2000
    cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({force:true})    
    cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click({force:true})
    cy.wait(time)
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').select("Admin").click()

   
  });

 

});