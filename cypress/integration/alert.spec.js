///<reference types = "cypress"/>
describe('work if alert', ()=>{
    
        before(()=>{
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })
        beforeEach(()=>{
            cy.reload()
        })

        it('Alert',()=>{
            cy.get('#alert').click()
            cy.on('window:alert',msg=>{
                console.log(msg)
                expect(msg).to.be.equal('Alert Simples')
            })
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
})