require('cypress-xpath');

class LuggagePage {

    addLuggage(){
        cy.get('btn-up-segment-BOG-MDE-bag-15-passenger-ADT_1').should('be.visible').click()
    }

    verifySpecialLuggage(){
        cy.get('accordion-special-baggages').click()
        cy.xpath('//*[@id="content-special-baggages"]/div/div[1]/span').should('have.any.keys', 'COP')
    }
}

export default new LuggagePage();