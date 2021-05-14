///<referencetypes="cypress"/>

describe('Should test at a functional level',() =>{
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('yuri.teste@teste.com')
        cy.get('[data-test=passwd]').type('123456')
        cy.get('.btn').click()
        //cy.get('.toast-message').should('exist')
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })
    it('login',()=>{
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta nova teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
    })
})