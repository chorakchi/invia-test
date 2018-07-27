import express   from 'express';

export function cities() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) {
        res.json([
            {"id": "1","name": "Frankfurt"},
            {"id": "2","name": "Dresden"},
            {"id": "3","name": "Westerland"},
            {"id": "4","name": "Munich"},
            {"id": "5","name": "Leipzig"},
            {"id": "6","name": "Memmingen Allgäu"},
            {"id": "7","name": "Berlin"},
            {"id": "8","name": "Bremen"},
            {"id": "9","name": "Erfurt"},
            {"id": "10","name": "Dusseldorf"},
            {"id": "11","name": "Munster Osnabruck"},
            {"id": "12","name": "Rostock"},
            {"id": "13","name": "Hamburg"},
            {"id": "14","name": "Dortmund"},
            {"id": "15","name": "Mannheim"},
            {"id": "16","name": "Stuttgart"},
            {"id": "17","name": "Karlsruhe"},
            {"id": "18","name": "Heringsdorf"},
            {"id": "19","name": "Cologne"},
            {"id": "20","name": "Friedrichshafen"},
            {"id": "21","name": "Wyk Auf Foehr     "},
            {"id": "22","name": "Hannover"},
            {"id": "23","name": "Paderborn"},
            {"id": "24","name": "Nuremberg"},
            {"id": "25","name": "Saarbruecken "},
            ]);   
    });
    return router
}
