///<reference types = "cypress"/>
describe('Minha suite de teste', function() 
{
    it('Verificando titulo da pagina', function() 
    {
      cy.visit('https://www.nopcommerce.com/en')
      cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')
    })
})