///<reference types = "cypress"/>
describe('Minha suite de teste', function() 
{
    it('Verificando titulo da pagina', function() 
    {
      cy.visit('https://www.nopcommerce.com/en')
      cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')
      
      cy.get('.userlink').click()
      cy.get('.user-wrapper > :nth-child(2)').click()
      cy.title().should('eq','Register - nopCommerce')//reg page

      cy.go('back')
      cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')//home

      cy.go('forward')
      cy.title().should('eq','Register - nopCommerce')//reg page

      cy.go(-1)
      cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')//home

      cy.go(1)
      cy.title().should('eq','Register - nopCommerce')//reg page
      
      cy.reload()
    })
})