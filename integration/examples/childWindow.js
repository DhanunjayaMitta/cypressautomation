describe('childwindow', ()=>{
    it('cwTestCase',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(e1){
            const url=e1.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get('.sub-menu-bar a[href*=contact]').click()
               cy.contains('GaddiAnnaram').should('be.visible')
            
            })
        })
    })
})