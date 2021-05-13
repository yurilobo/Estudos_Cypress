///<reference types = "cypress"/>
describe('work if alert', ()=>{
    
        before(()=>{
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })
        beforeEach(()=>{
            cy.reload()
        })

        it.only('Alert',()=>{
            //cy.get('#alert').click()
           //    cy.on('window:alert',msg=>{
                //console.log(msg)
               // expect(msg).to.be.equal('Alert Simples')
            //})
            cy.clickAlert('Alert',"Alert Simples")
        })
        //uso de mooks
        it('Alert com mook',()=>{
            const stub = cy.stub().as('alerta')
            cy.on('window:alert',stub)
            cy.get('#alert').click().then(()=>{
                expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
            })
        })
        it('confirme',()=>{
            cy.get('#confirm').click()
            cy.on('window:confirm',msg=>{
                console.log(msg)
                expect(msg).to.be.equal('Confirm Simples')
            })
            cy.on('window:alert',msg=>{
                console.log(msg)
                expect(msg).to.be.equal('Confirmado')
            })
            cy.get('#confirm').click()
            
        })
        it('Deny',()=>{
            cy.get('#confirm').click()
            cy.on('window:confirm',msg=>{
                expect(msg).to.be.equal('Confirm Simples')
                return false
            })
            cy.on('window:alert',msg=>{
                expect(msg).to.be.equal('Negado')
            })
            cy.get('#confirm').click()
            
        })
        it('prompt',()=>{
            cy.on('window:prompt',msg=>{
                expect(msg).to.be.equal('Confirm Simples')
            })
            cy.get('#prompt').click()
            
        })
        it('Desafio: validando mensagens',()=>{
            const stub =cy.stub().as('alerta')
            cy.on('window:alert',stub)
            cy.get('#formCadastrar').click()
                .then(()=>expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
            cy.get('#formNome').type('Yuri')
            cy.get('#formCadastrar').click()
                .then(()=>expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
            
            cy.get('[data-cy=dataSobrenome]').type('Anderson')
            cy.get('#formCadastrar').click()
            .then(()=>expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))    
            
            cy.get('#formSexoMasc').click()
            cy.get('#formCadastrar').click()

            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado')
        })
})