///<reference types="cypress"/>

import loc from'../../support/locators'
import '../../support/commandsContas'

describe('Should test at a functional level',() =>{
    before(()=>{
        cy.login('yuri.teste@teste.com','123456')
        cy.resetApp()
        
    })
    it('login',()=>{
        cy.acessarMenuConta()
        cy.inserirConta('Conta nova teste')
        
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })
    it('Should update an accont', ()=>{
        cy.acessarMenuConta()

        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
    it('Should not creat an account with same name',()=>{
        cy.acessarMenuConta()

        cy.get(loc.CONTAS.NOME).type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','code 400' )
    })
})