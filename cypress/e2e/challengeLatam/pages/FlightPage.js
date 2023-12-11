require('cypress-xpath');

class FlightPage {

    clickButtonSeeCabin(){
        cy.get('#bundle-detail-0-flight-select').should('be.visible').click()
    }

    clickButtonSeeSeats(){
        cy.get('#button9').should('be.visible').click()
    }
    selectSeat1(){
        cy.xpath('//*[@id="cabins-group"]/div[1]/div[3]/div[1]/div/button').should('be.visible').click()
    }
    selectSeat2(){
        cy.xpath('//*[@id="cabins-group"]/div[1]/div[2]/div[3]/div/button').click()
    }
    clickButtonConfirm(){
        cy.get('btn-confirm-and-continue').click()
    }

}

export default new FlightPage();
