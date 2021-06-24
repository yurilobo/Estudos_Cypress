///<reference types = "cypress"/>
describe('work if alert', ()=>{
    
    before(()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    })
    beforeEach(()=>{
        
    })
    it('Seletores', ()=>{
        cy.log('estratégia 1: voltar para elemento pai, e avançar para um td img attr')

        cy.get('td.description')
            .contains('Mesada')
            .parent()//encontrar o elemento pai
            .find('img[onclick=remove]')//busca um atributo no elmento

        cy.log('estratégia 2: buscar todos os irmaos, e buscar o que tem img + attr')
        cy.get('td.description') 
            .contains('Mesada')
            .siblings()//busca o elemento com as mesmas caracteristicas
            .children('img[onclick=remove]')

        cy.log('estratégia 3: buscar todos os irmaos, e filtra pelo que em img + attr')
        cy.get('td.description')    
            .contains('Mesada')
            .siblings()
            .children()
            .filter('img[onclick=remove]')///filtro os elementos
        cy.log('estratégia 4: buscar todos os irmaos mais novos, selecionar o caçula e buscar seu filho img')
        cy.get('td.description')    
            .contains('Mesada')
            .nextAll//numa lista
            .eq(1)//uma posição na lista
            .find('img')
    
    
    
    })
})