/// <reference types="Cypress"/>
describe('Test suite', function () {
    it('My another Case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option1', 'option3']).should('be.checked')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($e1, index, $list) => {
            if ($e1.text() == 'India') {
                cy.wrap($e1).click()
            }

        })
        cy.get('#autocomplete').should('have.value', 'India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('.radioButton').check(['radio2']).should('be.checked')
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get('.ml-auto a[href*=about]').click()
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy')
            //cy.get('#openwindow').invoke('removeAttr','onclick').click()
        })
        



    })

})