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

    })
    it('Should not creat an account with same name', () => {

    })
    it('Should create a transation', () => {


    })
    it('Should get balance', () => {

    })
    it('Should remover movimentação', () => {

    })

})