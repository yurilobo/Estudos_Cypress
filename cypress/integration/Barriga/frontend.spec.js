///<reference types="cypress"/>

import loc from'../../support/locators'
import '../../support/commandsContas'
import buildEnv from '../../support//buildEnv.js'

describe('Should test at a functional level',() =>{
    after(() => {
        cy.clearLocalStorage()
    })
    
    beforeEach(()=>{
        buildEnv()
        cy.login('yuri.teste@teste.com','15246')
        cy.get(loc.MENU.HOME).click()
       
    })

    it('Should criate an accont',()=>{
        
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
       
        cy.route({
            method: 'PUT',
            url: '/contas/1',
            response: [
                {id:1 ,nome:"Carteira ALTERADA", visivel:true,usuario_id:1},
               
            ]
        })
        cy.acessarMenuConta()

        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Carteira')).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta aterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
    it.only('Should not creat an account with same name',()=>{
        cy.route({
            method: 'POST',
            url: '/contas',
            response: {"error": "Já existe uma conta com esse nome"},
            status: 400
            
        }).as('saveContasMesmoNome')

        cy.acessarMenuConta()

        cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','code 400' )
    })
    it.only('Should create a transation', ()=>{
        cy.route({
            method: 'POST',
            url: '/transacoes',
            response: { "id": 31433, "descricao": "asdasd", "envolvido": "sdfsdfs", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "232.00", "status": false, "conta_id": 42069, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null }
        })


        cy.get(loc.MENU.MOVIMENTACAO).click();

        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Banco')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.route({
            method: 'GET',
            url: '/extrato/**',
            response: [
                { "conta": "Conta para movimentacoes", "id": 31434, "descricao": "Movimentacao para exclusao", "envolvido": "AAA", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1500.00", "status": true, "conta_id": 42077, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta com movimentacao", "id": 31435, "descricao": "Movimentacao de conta", "envolvido": "BBB", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1500.00", "status": true, "conta_id": 42078, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31436, "descricao": "Movimentacao 1, calculo saldo", "envolvido": "CCC", "observacao": null, "tipo": "REC", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "3500.00", "status": false, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31437, "descricao": "Movimentacao 2, calculo saldo", "envolvido": "DDD", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-1000.00", "status": true, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para saldo", "id": 31438, "descricao": "Movimentacao 3, calculo saldo", "envolvido": "EEE", "observacao": null, "tipo": "REC", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "1534.00", "status": true, "conta_id": 42079, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para extrato", "id": 31439, "descricao": "Movimentacao para extrato", "envolvido": "FFF", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "-220.00", "status": true, "conta_id": 42080, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null },
                { "conta": "Conta para extrato", "id": 31439, "descricao": "Desc", "envolvido": "FFF", "observacao": null, "tipo": "DESP", "data_transacao": "2019-11-13T03:00:00.000Z", "data_pagamento": "2019-11-13T03:00:00.000Z", "valor": "123", "status": true, "conta_id": 42080, "usuario_id": 1, "transferencia_id": null, "parcelamento_id": null }]
        })

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