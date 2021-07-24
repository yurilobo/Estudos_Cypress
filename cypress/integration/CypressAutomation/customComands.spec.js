///<reference types = "cypress"/>
describe('MytestSuit', function () {


    it('LoginTest', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]')//.type('admin@yourstore.com')//email
        cy.get('input[name=Password]')//.type('admin')//password
        cy.get('.button-1').click()//sinin
        //cy.get('input[type=submit]').click()//sinin
    })
    it('Add customer', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]')
        cy.get('input[name=Password]')
        cy.get('.button-1').click()

        //add customer
        cy.log('Adding customer .........')
    })
    it('Edit customer', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]')
        cy.get('input[name=Password]')
        cy.get('.button-1').click()

        //add customer
        cy.log('Editing customer .........')
    })
})
