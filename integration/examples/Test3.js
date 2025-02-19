/// <reference types="Cypress"/>
describe('Test suite', function()
{

    
    it('fb-checkup',function(){
        cy.visit('https://facebook.com')
        cy.get(':nth-child(2) > .x1ypdohk > .xozqiw3 > .xl56j7k > .x9f619 > .x193iq5w > .x1lliihq').click()
        cy.get('[data-testid="royal-email"]').type('dhana12.ece@gmail.com')
        cy.get('[data-testid="royal-pass"]').type('hgfhgdjd')
        cy.get('[data-testid="royal-login-button"]').click()
    })
}
)