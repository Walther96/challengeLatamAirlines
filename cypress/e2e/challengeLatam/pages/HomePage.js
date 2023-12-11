require('cypress-xpath');

class HomePage {

    goToLatam(){
        cy.visit("https://www.latamairlines.com/co/es", {
            headers: {
              "Accept-Encoding": "gzip, deflate"
            }
    })}

    clickButtonRejectChange(){
        cy.get('#country-suggestion-reject-change').should('be.visible')
        cy.get('#country-suggestion-reject-change').click()
    }
    clickButtonTripType(){
        cy.get('#btnTripTypeCTA').click()
    }
    clickItemOneWayOnly(){
        cy.get('#btnTripType0').click()
    }
    clickButtonTripTypeConfirm(){
        cy.get('#btnTripTypeConfirmCTA').click()
    }
    clickButtonCabinType(){
        cy.get('#btnCabinTypeCTA').click()
    }
    clickItemPremiumType(){
        cy.get('#btnCabinType1').click()
    }
    clickButtonCabinTypeConfirm(){
        cy.get('#btnCabinTypeConfirmCTA').click()
    }
    addChildPassenger(){
        cy.get('#btnAddPassengerCTA').click()
        cy.get('#btnPlusChildren').should('be.visible').click()
    }
    typeOrigin(origin){
        cy.get('#txtInputOrigin').type(origin)
        cy.get('#btnItemAutoComplete_0').should('be.visible').click()
    }
    typeDestination(destination){
        cy.get('#txtInputDestination').type(destination)
        cy.get('#btnItemAutoComplete_0').should('be.visible').click()
    }
    selectDepartureDate(){
        cy.get('#departureDate').click()
        cy.xpath('//*[@id="calendarContainer"]/div/div/div/div/div[2]/div[2]/div/div[4]/div/table/tbody/tr[5]/td[1]').should('be.visible').click()
    }
    clickButtonSearchFlight(){
        cy.get('#btnSearchCTA').click()
    }

}

export default new HomePage();