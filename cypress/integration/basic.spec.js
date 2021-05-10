///<reference types = "cypress"/>

describe('Cypress basic', ()=>{
    it('Shold visit a page and assert title',()=>{
        cy.pause()

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo ').debug()

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo ')
       
    })
    it('Shold visit a page and assert title',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonSimple')
            .click()
            .should('have.value','Obrigado!')
    })

})