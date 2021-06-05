///<reference types="cypress"/>

describe('Minha suite de teste', function() 
{
    it('Verificando ecommercer', function() 
    {
      cy.visit('http://automationpractice.com/index.php')
      cy.title().should('eq','My Store')
    })
    it('procurando elemento', function() 
    {
        cy.get('#search_query_top').click().type('Faded Short Sleeve')
        cy.get('#searchbox > .btn').click()
    })
    it('Validando o produto', function() 
    {
        cy.contains('More').click()
        
    })
})