///<reference types="cypress"/>

describe('Ui Elements', function()
    {   
        it("verify inputsbox e radiobuttons", function()
            {
            cy.visit("http://demo.automationtesting.in/Register.html")

            cy.get(':nth-child(1) > :nth-child(2) > .form-control')
                .type('Yuri Anderson ')
                .should('have.value', 'Yuri Anderson ')
                
            cy.get(':nth-child(1) > :nth-child(3) > .form-control')
                .type('Lobo')
                .should('have.value', 'Lobo')

        }
            
        )

    }
)