
import express   from 'express';

export function search() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) {
        res.json([
            {
                "originCityId" : "1",
                "destinationCityId" : "2",
                "DepartureTime" : "2014-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2014-08-02T18:36:53.2+04:30",
                "airlineId" : "1",
                "AircraftId" : "8",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : ""
            },
            {
                "originCityId" : "3",
                "destinationCityId" : "4",
                "DepartureTime" : "2014-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2014-08-02T18:36:53.2+04:30",
                "airlineId" : "4",
                "AircraftId" : "1",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : ""
            },
            {
                "originCityId" : "7",
                "destinationCityId" : "8",
                "DepartureTime" : "2014-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2014-08-02T18:36:53.2+04:30",
                "airlineId" : "5",
                "AircraftId" : "3",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : ""
            },
            {
                "originCityId" : "1",
                "destinationCityId" : "7",
                "DepartureTime" : "2014-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2014-08-02T18:36:53.2+04:30",
                "airlineId" : "7",
                "AircraftId" : "5",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : ""
            },
            {
                "originCityId" : "1",
                "destinationCityId" : "6",
                "DepartureTime" : "2014-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2014-08-02T18:36:53.2+04:30",
                "airlineId" : "3",
                "AircraftId" : "2",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : ""
            },
            {
                "originCityId" : "3",
                "destinationCityId" : "2",
                "DepartureTime" : "2014-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2014-08-02T18:36:53.2+04:30",
                "airlineId" : "7",
                "AircraftId" : "8",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : ""
            }
        ]);   
    });
    return router
}