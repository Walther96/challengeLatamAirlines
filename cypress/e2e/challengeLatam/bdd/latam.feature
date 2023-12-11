Feature: Search for a flight in Latam Colombia

    Background: Preconditions
        Given user visits Latam Airlines page

    Scenario: Validate special luggage section
        When user selects 'One-way only' and 'Premium Economy'
        And selects two passengers: 1 Adult and 1 Children
        And enters origin 'Medellin' and destination 'Bogota'
        And selects departure date
        And clicks Search Flight button
        And user selects a flight
        And selects the seats
        And user adds luggage
        Then verify special luggage section




