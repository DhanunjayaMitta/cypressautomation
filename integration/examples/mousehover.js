describe('mousehover', ()=>{
    it('mhTestCase', () =>{
        cy.visit(Cypress.env('url'))
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })

})