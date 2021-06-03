///<reference types="cypress"/>

describe('Ui Elements', function()
    {   
        it("verify inputsbox e radiobuttons", function()
            {
            cy.visit("http://demo.automationtesting.in/Register.html")

            cy.get(':nth-child(1) > :nth-child(2) > .form-control')
                .type('Yuri Anderson ')
                //.should('have.value', 'Yuri Anderson ')
                .should('be.visible')
                
            cy.get(':nth-child(1) > :nth-child(3) > .form-control')
                .type('Lobo')
                //.should('have.value', 'Lobo')
                .should('be.visible')

            cy.get('.col-md-8 > .form-control')
                .type('Este é um teste de como preencher um formulario e ultilizar o cypress')
                //.should('have.value', 'Lobo')
                .should('be.visible')

            cy.get('#eid > .form-control')
                .type('teste@teste.com')
                .should('be.visible')
            
            cy.get(':nth-child(4) > .col-md-4 > .form-control')
                .type('9999999999')
                .should('be.visible')


            cy.get('input[type="radio"]').check('Male').should('be.checked')

            cy.get('input[type="checkbox"]').check(['Cricket']).should('be.checked')
                //eu sei que esta rodando duas vezes mas fiz pra ver como se comporta
            cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value', 'Cricket')
            cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
            cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value', 'Hockey')
        }
            
        )

    }
)