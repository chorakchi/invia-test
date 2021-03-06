
import express   from 'express';

export function search() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) {
        console.log(req.query)
        let data = ({
            "result":[
            {
                "id": '1',
                "originCityId" : "1",
                "destinationCityId" : "2",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "1",
                "AircraftId" : "8",
                "flightNumber" : "1111",
                "availability" :  3,
                "price" : "200"
            },
            {
                "id": '2',
                "originCityId" : "3",
                "destinationCityId" : "4",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "4",
                "AircraftId" : "1",
                "flightNumber" : "1111",
                "availability" :  8,
                "price" : "300"
            },
            {
                "id": '3',
                "originCityId" : "7",
                "destinationCityId" : "8",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "5",
                "AircraftId" : "3",
                "flightNumber" : "1111",
                "availability" :  5,
                "price" : "400"
            },
            {
                "id": '4',
                "originCityId" : "1",
                "destinationCityId" : "7",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "7",
                "AircraftId" : "5",
                "flightNumber" : "1111",
                "availability" :  12,
                "price" : "500"
            },
            {
                "id": '5',
                "originCityId" : "1",
                "destinationCityId" : "6",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "3",
                "AircraftId" : "2",
                "flightNumber" : "1111",
                "availability" :  10,
                "price" : "600"
            },
            {
                "id": '6',
                "originCityId" : "3",
                "destinationCityId" : "2",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "7",
                "AircraftId" : "8",
                "flightNumber" : "1111",
                "availability" :  9,
                "price" : "700"
            },
            {
                "id": '7',
                "originCityId" : "1",
                "destinationCityId" : "4",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "1",
                "AircraftId" : "8",
                "flightNumber" : "1111",
                "availability" :  4,
                "price" : "200"
            },
            {
                "id": '8',
                "originCityId" : "1",
                "destinationCityId" : "2",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "4",
                "AircraftId" : "1",
                "flightNumber" : "1111",
                "availability" :  1,
                "price" : "300"
            },
            {
                "id": '9',
                "originCityId" : "7",
                "destinationCityId" : "4",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "5",
                "AircraftId" : "3",
                "flightNumber" : "1111",
                "availability" :  8,
                "price" : "400"
            },
            {
                "id": '10',
                "originCityId" : "1",
                "destinationCityId" : "3",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "7",
                "AircraftId" : "5",
                "flightNumber" : "1111",
                "availability" :  9,
                "price" : "500"
            },
            {
                "id": '11',
                "originCityId" : "1",
                "destinationCityId" : "7",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "3",
                "AircraftId" : "2",
                "flightNumber" : "1111",
                "availability" :  20,
                "price" : "600"
            },
            {
                "id": '12',
                "originCityId" : "2",
                "destinationCityId" : "7",
                "DepartureTime" : "2018-08-02T19:36:53.2+04:30",
                "ArrivalTime" : "2018-08-02T18:36:53.2+04:30",
                "airlineId" : "7",
                "AircraftId" : "8",
                "flightNumber" : "1111",
                "availability" :  7,
                "price" : "700"
            }
        ]}); 
        res.json({result:data.result.filter(item => 
            item.originCityId === req.query.originCityId &&
            item.destinationCityId === req.query.destinationCityId &&
            (req.query.airlineId ==='0' ? true : item.airlineId === req.query.airlineId )&&
            item.availability >= parseInt(req.query.passengers)
        )})
    });
    return router
}