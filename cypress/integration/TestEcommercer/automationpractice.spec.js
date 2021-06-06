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
        cy.get('#search_query_top').type('Faded Short Sleeve')
        cy.get('#searchbox > .btn').click()
        //cy.get('.button-container').contains('Add to cart').click()
      
    })
    //it('Adicionando o produto no carrinho', function() 
    //{
      //cy.get('#layer_cart_product_title').should('eq', 'Product successfully added to your shopping cart')
      //cy.get('#layer_cart_product_quantity').should('have.value', '1')
      
   //   cy.get('.button-container > .button-medium > span').contains('Proceed to checkout').click()
    //})
    it('clicando o item fora do carrinho', function(){
      cy.get('.block_content > :nth-child(1) > .product-content > h5 > .product-name').click()
      
      cy.get('.exclusive').contains('Add to cart').click()
      cy.get('.button-container > .button-medium > span').contains('Proceed to checkout').click()
    })
    
    
    
    
    
})