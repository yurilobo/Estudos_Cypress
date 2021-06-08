///<reference types = "cypress"/>
describe('work if ifame', ()=>{
  
    it('Deve preencher campo de texto', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe=>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?') 
                .should('have.value', 'funciona?')
                
        })
    })
    
})
//cy.get('.ajax_add_to_cart_button > span')