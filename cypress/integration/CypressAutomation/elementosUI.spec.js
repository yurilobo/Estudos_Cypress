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
     
    })
})