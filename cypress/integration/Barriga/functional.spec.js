///<referencetypes="cypress"/>

describe('Should test at a functional level',() =>{
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    it('login',()=>{
        cy.get('[data-test=email]').type('yuri.teste@teste.com')
        cy.get('[data-test=passwd]').type('123456')
        cy.get('.btn').click()
    })
})