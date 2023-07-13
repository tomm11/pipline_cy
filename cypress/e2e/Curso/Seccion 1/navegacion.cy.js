// Shows commands
///<reference types="Cypress"/>
require('cypress-plugin-tab')
import 'cypress-fill-command'
require('@4tw/cypress-drag-drop')

describe('Navegacion', () => {
  it('Navegation with back and forward', () => {
    let time = 2000
    cy.visit('https://demoqa.com/')
    //cy.title().should('eq','titulo');
    cy.wait(time)    
    cy.get('.category-cards > :nth-child(1) > :nth-child(1)').should('be.visible').click({force:true})
    cy.go('back')    
    
    cy.go('forward')
    cy.go('forward')

    
  });


  

});