import express   from 'express';

export function cities() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) {
        res.json({"result":[
            {"id": "1","label": "Frankfurt"},
            {"id": "2","label": "Dresden"},
            {"id": "3","label": "Westerland"},
            {"id": "4","label": "Munich"},
            {"id": "5","label": "Leipzig"},
            {"id": "6","label": "Memmingen Allgäu"},
            {"id": "7","label": "Berlin"},
            {"id": "8","label": "Bremen"},
            {"id": "9","label": "Erfurt"},
            {"id": "10","label": "Dusseldorf"},
            {"id": "11","label": "Munster Osnabruck"},
            {"id": "12","label": "Rostock"},
            {"id": "13","label": "Hamburg"},
            {"id": "14","label": "Dortmund"},
            {"id": "15","label": "Mannheim"},
            {"id": "16","label": "Stuttgart"},
            {"id": "17","label": "Karlsruhe"},
            {"id": "18","label": "Heringsdorf"},
            {"id": "19","label": "Cologne"},
            {"id": "20","label": "Friedrichshafen"},
            {"id": "21","label": "Wyk Auf Foehr     "},
            {"id": "22","label": "Hannover"},
            {"id": "23","label": "Paderborn"},
            {"id": "24","label": "Nuremberg"},
            {"id": "25","label": "Saarbruecken "},
            ]});   
    });
    return router
}
