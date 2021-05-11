///<reference types = "cypress"/>

describe('Esperas', ()=>{
    
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })
    it('Deve aguardar o elemento disponivel',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    it('Deve fazer retrys',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonDelay').click()
        
        cy.get('#novoCampo')
        
            .should('exist')
            
    })
    it('Uso do find',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonListDOM').click()
        
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        //cy.get('#lista li')
          //  .find('span')
            //.should('contain', 'Item 2')
        cy.get('#lista li span').should('contain', 'Item 2')
            
    })
    it.only('Uso do time out',()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        //cy.get('#novoCampo',{timeout: 1000}).should('exist')
    })
})