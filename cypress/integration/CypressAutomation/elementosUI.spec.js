///<reference types = "cypress"/>
describe('Minha suite de teste', function() 
{
    it('Verificando titulo da pagina', function() 
    {
      cy.visit("http://testautomationpractice.blogspot.com/")

      cy.get("[onclick='myFunction()']").click()
       
      cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Press a button!')
        })
        cy.get('#frame-one1434677811').then( iframe=>{
        const body =iframe.contents().find('body')
        cy.wrap(body).find('#RESULT_TextField-1').type('eu')
      })
     
    })
})