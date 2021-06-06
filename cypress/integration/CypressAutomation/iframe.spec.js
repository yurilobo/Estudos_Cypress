

describe("Test IFRAME", function()
    {
        it("teste com iframe", function()
        {
            cy.visit("https://www.zkoss.org/zkdemo/composite/iframe")
           // cy.xpath("//div[@id='search-box'").click()
            cy.xpath("//*[@class='z-iframe']").then(function($ele)
            {
                var ifele = $ele.contents().find("#seach-box")
                cy.wrap(ifele).click()
            })
        })
    }

)