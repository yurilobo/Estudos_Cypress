///<reference types="cypress"/>

import loc from'../../support/locators'
import '../../support/commandsContas'

describe('Should test at a functional level',() =>{
    after(() => {
        cy.clearLocalStorage()
    })
    before(()=>{
        cy.server()
        cy.route({
            method: 'POST',
            url: '/signin',
            response: {
                id: 1000,
                nome: 'Usuario falso',
                token: 'Uma string muito grande que nao deveria ser aceito mas na verdade, vai'
            }
        }).as('signin')
        cy.route({
            method: 'GET',
            url: '/saldo',
            response: [{
                conta_id: 999,
                conta: "Carteira",
                saldo: "100.00"
            },
            {
                conta_id: 9909,
                conta: "Banco",
                saldo: "10000000.00"
            },
            ]
        }).as('saldo')
        cy.login('yuri.teste@teste.com','15246')
        
        
    })
    beforeEach(()=>{
        cy.get(loc.MENU.HOME).click()
       
    })

    it.only('Should criate an accont',()=>{
        cy.route({
            method: 'GET',
            url: '/contas',
            response: [
                {id:1 ,nome:"Carteira", visivel:true,usuario_id:1},
                {id:1 ,nome:"Banco", visivel:true,usuario_id:1}
            ]
        }).as('contas')
        cy.route({
            method: 'POST',
            url: '/contas',
            response: [
                {id:3 ,nome:"Conta nova teste", visivel:true,usuario_id:1}
            ]
        }).as('saveContas')
        
        
        cy.acessarMenuConta()
        cy.route({
            method: 'GET',
            url: '/contas',
            response: [
                {id:1 ,nome:"Carteira", visivel:true,usuario_id:1},
                {id:1 ,nome:"Banco", visivel:true,usuario_id:1},
                {id:3 ,nome:"Conta nova teste", visivel:true,usuario_id:1}
            ]
        }).as('contasFake')

        cy.inserirConta('Conta nova teste')
        
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })
    it('Should update an accont', ()=>{
        cy.acessarMenuConta()

        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
    it('Should not creat an account with same name',()=>{
        cy.acessarMenuConta()

        cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','code 400' )
    })
    it('Should create a transation', ()=>{
        cy.get(loc.MENU.MOVIMENTACAO).click();

        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacoes')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        //verifico se na pagina tem 7 elementos
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist')
    })
    it('Should get balance', ()=>{
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain','534,00')

        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        
        //a movimentação abaixo ajuda a fazer um sincronismo fazendo com que não seja necessario faze um wait
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '4.034,00')

    })
    it('Should remover movimentação', ()=>{
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
    })
    
})