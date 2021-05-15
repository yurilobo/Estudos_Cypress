const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table//td[contains(. , 'Conta nova teste')]/..//i[@class='far fa-edit']"
    },
    MOVIMENTACAO:{
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO:{
        LINHAS: '.list-group > li',
        XP_BUSCA_ELEMENTO: "//span[contains(., 'Desc')]/following-sibling::small[contains(., '123')]",
    },
    
    MESSAGE: '.toast-message'


}
export default locators;