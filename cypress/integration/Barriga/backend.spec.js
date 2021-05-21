///<reference types="cypress"/>


describe('Should test at a functional level', () => {
    let token
    before(() => {
        cy.getToken('yuri.teste@teste.com', '123456')
            .then(tkn => {
                token = tkn
            })

    })
    beforeEach(() => {
        // cy.get(loc.MENU.HOME).click()
        cy.resetRest()
    })

    it('Login', () => {
        
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta de teste do nome'
            }
            //.then(res => console.log(res))
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta de teste do nome')
        })
    })
    it('Should update an accont', () => {
        cy.request({
            method: 'GET',
            url:'/contas',
            headers: { Authorization: `JWT ${token}` },
            qs:{
                nome: 'Conta para alterar'
            }
        }).then(res=>{
            cy.request({
                
                url: `/contas/${res.body[0].id}`,
                 method: 'PUT',
                 headers: { Authorization: `JWT ${token}` },
                 body: {
                   nome: 'Conta para alterar via rest'
                 }
             }).as('response')
        })
        cy.get('@response').its('status').should('be.equal',200)        
    })
    it('Should not create an account with same name', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
            //atributo para qundo eu esiver esperando erro 400/500
        }).as('response')

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })
    it.only('Should create a transation', () => {
        

    })
    it('Should get balance', () => {

    })
    it('Should remover movimentação', () => {

    })

})