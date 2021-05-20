///<reference types="cypress"/>


describe('Should test at a functional level',() =>{
    before(()=>{
       // cy.login('yuri.teste@teste.com','123456')
        
    })
    beforeEach(()=>{
       // cy.get(loc.MENU.HOME).click()
        //cy.resetApp()
    })

    it('Login',()=>{
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body:{
                email: "yuri.teste@teste.com",
                redirecionar: false,
                senha: "123456"
            }
        }).its('body.token').should('not.be.empty')//then(res=>console.log(res))
    })
    it('Should update an accont', ()=>{
        
    })
    it('Should not creat an account with same name',()=>{
       
    })
    it('Should create a transation', ()=>{
        
      
    })
    it('Should get balance', ()=>{
        
    })
    it('Should remover movimentação', ()=>{
        
    })
    
})