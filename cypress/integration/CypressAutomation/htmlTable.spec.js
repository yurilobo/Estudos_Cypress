///<reference types = "cypress"/>
describe('Minha suite de teste', function() 
{
    it('Verificando titulo da pagina', function() 
    {
      cy.visit("http://testautomationpractice.blogspot.com/")
        //checamdo presença na tabela

      cy.get('table[name=BookTable]').contains('td','Master In Selenium').should('be.visible')
       
      // checando em liinha e coluna especifica
      cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

      //verifica o livro pelo nome
      cy.get('table[name=BookTable] > tbody > tr:nth-child(2)').each(($e, index, $list) =>
      {
          const  text = $e.text()
          if(text.includes('Amod'))
            {
                cy.get('table[name=BookTable] > tbody > tr:nth-child(2)').eq(index).then(function(bname)
                {
                    const bookName = bname.text()
                    expect(bookName).to.equal('Master in Java')
                })
            }
      })
      
    })
})