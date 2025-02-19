describe('Facebook Login Test', () => {
    it('New Test Function', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($e1, index, $list)=>{
            const text= $e1.text()
            if (text.includes("Jenkins"))
            {
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(value){
                    expect(value.text()).equal('20')
                })
                //cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
                  //  const pricetext = price.text()
                    //expect(pricetext).to.equal('25')
                //})
            }
        })
    })
  })
  