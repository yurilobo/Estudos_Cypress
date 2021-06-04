///<reference types="cypress"/>

describe('Ui Elements', function()
    {   
        it("Verify text, inputsbox e radiobuttons", function()
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
        })
        it("Languages Multi select", function(){
            cy.get('#msdd')
            .click({force: true})
            cy.get('.ui-corner-all').contains('Portuguese').click().should('not.be.visible')
            cy.get('.ui-corner-all').contains('English').click().should('not.be.visible')
        
        })
        it("Skills drop down", function(){
            //fiz essa gambiarra para sair do select que não estava saindo do campo da linguagem
            cy.get(':nth-child(7) > .col-md-3').click({force: true})
            //assim consegui passar para poder selecionar a skill, mas vou melhorar o codigo
            cy.get('#Skills').select("Software") 
                .should('have.value', 'Software') 
        })
        
        it("Country Multi select", function(){
            cy.get('#countries').select("Argentina") 
            .should('have.value', 'Argentina')    
        } )

        it("Select countries searchable drop downs Multi select", function(){
           
            cy.get('[role=combobox]').click({force: true})
            cy.get('.select2-search__field').type('aus').click()
            cy.get('.select2-search__field').type('{enter}')  
            
        
        } )

        

    }
)