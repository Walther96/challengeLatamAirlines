import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import UtilsManager from '../utils/UtilsManager'
import HomePage from '../pages/HomePage'
import OffersPage from '../pages/OffersPage'
import FlightPage from '../pages/FlightPage'
import LuggagePage from '../pages/LuggagePage'

  Given('user visits Latam Airlines page', () => {
    HomePage.goToLatam()
    HomePage.clickButtonRejectChange()
    UtilsManager.waitTo(2)
  });

  When('user selects {string} and {string}', (tripType, cabinType) => {
    
    if(tripType === "One-way only")
      HomePage.clickButtonTripType()
      HomePage.clickItemOneWayOnly()

    if(cabinType === "Premium Economy")
      HomePage.clickButtonCabinType()
      HomePage.clickItemPremiumType()

    UtilsManager.waitTo(1)
  });

  When('selects two passengers: 1 Adult and 1 Children',() => {
    HomePage.addChildPassenger()
    UtilsManager.waitTo(1)
  });

  When('enters origin {string} and destination {string}', (origin, destination) => {
    HomePage.typeOrigin(origin)
    HomePage.typeDestination(destination)
    UtilsManager.waitTo(1)
  });

  When('selects departure date', () => {
    HomePage.selectDepartureDate()
    UtilsManager.waitTo(2)
  })

  When('clicks Search Flight button', () => {
    HomePage.clickButtonSearchFlight()
  })

  When('user selects a flight', () => {
    OffersPage.selectFirstFligh()
  })

  When('selects the seats', () =>{
    FlightPage.clickButtonSeeCabin()
    FlightPage.clickButtonSeeSeats()
    FlightPage.selectSeat1()
    FlightPage.selectSeat2()
    FlightPage.clickButtonConfirm()
  })

  When('user adds luggage', () => {
    LuggagePage.addLuggage()
  })

  Then('verify special luggage section', () => {
    LuggagePage.verifySpecialLuggage()
  })

  UtilsManager.removeLogs()
  UtilsManager.hideFetchLog()

  