///<reference types = "cypress"/>

it('FixturesDemoTest', function(){
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('input[name=Email]')//.type('admin@yourstore.com')//email
    cy.get('input[name=Password]')//.type('admin')//password
    cy.get('.button-1').click()//sinin
    //cy.get('input[type=submit]').click()//sinin
})