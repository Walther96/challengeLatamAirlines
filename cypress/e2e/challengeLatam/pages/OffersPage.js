class OffersPage {

    selectFirstFligh(){
        cy.get('#WrapperCardFlight0').click()
    }

}

export default new OffersPage();
