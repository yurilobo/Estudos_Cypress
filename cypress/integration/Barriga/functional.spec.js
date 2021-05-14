///<reference types="cypress"/>

import loc from'../../support/locators'

describe('Should test at a functional level',() =>{
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('yuri.teste@teste.com')
        cy.get(loc.LOGIN.PASSWORD).type('123456')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        //cy.get('.toast-message').should('exist')
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    })
    it('login',()=>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta nova teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })
    it('Should update an accont', ()=>{
        //cy.get(':nth-child(7)>:nth-child(2)>.fa-edit')
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
})