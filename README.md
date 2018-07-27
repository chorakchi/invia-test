# Task

Create a simple flight-search with a offer list

## Usage

```
yarn install
```

```
yarn server-start
yarn start
```
open http://localhost:3000  for access  to client-side App

open http://localhost:8000  for access  to server-side App


## APIs

 Search :
 - get >>  http://localhost:8000/api/search?originCityId=1&destinationCityId=2&airlineId=0&passengers=1

List Of Cities :
- get >>  http://localhost:8000/api/cities

List of Airecraft :
- get >>  http://localhost:8000/api/airecrafts

list of Airlines :
- get >>  http://localhost:8000/api/airlines



-------------------------------------------------------
## project requirements

- create an SPA
- spa should minimal consist two routes (search/search-results)
- application should "feel" like responsive

## technical requirements





parameters 
  - each flight should contain
    - Origin & Destination (OnD)
    - Time & Date of the flight (departure & arrival)
    - Airline
    - Aircraft
    - Flight-Number
    - Availability (free seats)
    - Price (per pax)



