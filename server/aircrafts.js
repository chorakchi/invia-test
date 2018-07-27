import express from 'express';

export function aircrafts() {
    var router = express.Router();

    router.get('/', function (req, res) {
        res.json({"result":[
            { "id": "1", "link": "/wiki/A%C3%A9rospatiale-BAC_Concorde", "label": "Aérospatiale-BAC Concorde" },
            { "id": "2", "link": "/wiki/Airbus_A220", "label": "Airbus A220" },
            { "id": "3", "link": "/wiki/Airbus_A300", "label": "Airbus A300" },
            { "id": "4", "link": "/wiki/Airbus_A310", "label": "Airbus A310" },
            { "id": "5", "link": "/wiki/Airbus_A318", "label": "Airbus A318" },
            { "id": "6", "link": "/wiki/Airbus_A320_family", "label": "Airbus A320 family" },
            { "id": "7", "link": "/wiki/Airbus_A330", "label": "Airbus A330" },
            { "id": "8", "link": "/wiki/Airbus_A340", "label": "Airbus A340" },
            { "id": "9", "link": "/wiki/Airbus_A350_XWB", "label": "Airbus A350 XWB" },
            { "id": "10", "link": "/wiki/Airbus_A380", "label": "Airbus A380" },
            { "id": "11", "link": "/wiki/Antonov_An-148", "label": "Antonov An-148" },
            { "id": "12", "link": "/wiki/Avro_Canada_C102_Jetliner", "label": "Avro Canada C102 Jetliner" },
            { "id": "13", "link": "/wiki/Baade_152", "label": "Baade 152" },
            { "id": "14", "link": "/wiki/BAC_One-Eleven", "label": "BAC One-Eleven" },
            { "id": "15", "link": "/wiki/BAC_One-Eleven", "label": "BAC One-Eleven" },
            { "id": "16", "link": "/wiki/Boeing_707", "label": "Boeing 707" },
            { "id": "17", "link": "/wiki/Boeing_717", "label": "Boeing 717" },
            { "id": "18", "link": "/wiki/Boeing_720", "label": "Boeing 720" },
            { "id": "19", "link": "/wiki/Boeing_727", "label": "Boeing 727" },
            { "id": "20", "link": "/wiki/Boeing_737", "label": "Boeing 737" },
            { "id": "21", "link": "/wiki/Boeing_747", "label": "Boeing 747" },
            { "id": "22", "link": "/wiki/Boeing_757", "label": "Boeing 757" },
            { "id": "23", "link": "/wiki/Boeing_767", "label": "Boeing 767" },
            { "id": "24", "link": "/wiki/Boeing_777", "label": "Boeing 777" },
            { "id": "25", "link": "/wiki/Boeing_787_Dreamliner", "label": "Boeing 787 Dreamliner" },
            { "id": "26", "link": "/wiki/Bombardier_CRJ200", "label": "Bombardier CRJ200" },
            { "id": "27", "link": "/wiki/Bombardier_CRJ700_series", "label": "Bombardier CRJ700 series" },
            { "id": "28", "link": "/wiki/British_Aerospace_146", "label": "British Aerospace 146" },
            { "id": "29", "link": "/wiki/Comac_C919", "label": "Comac C919" },
            { "id": "30", "link": "/wiki/Convair_880", "label": "Convair 880" },
            { "id": "31", "link": "/wiki/Convair_990_Coronado", "label": "Convair 990 Coronado" },
            { "id": "32", "link": "/wiki/Dassault_Mercure", "label": "Dassault Mercure" },
            { "id": "33", "link": "/wiki/De_Havilland_Comet", "label": "De Havilland Comet" },
            { "id": "34", "link": "/wiki/Douglas_DC-8", "label": "Douglas DC-8" },
            { "id": "35", "link": "/wiki/Embraer_ERJ_145_family", "label": "Embraer ERJ 145 family" },
            { "id": "36", "link": "/wiki/Embraer_E-Jet_family", "label": "Embraer E-Jet family" },
            { "id": "37", "link": "/wiki/Fairchild-Dornier_328JET", "label": "Fairchild-Dornier 328JET" },
            { "id": "38", "link": "/wiki/Fokker_F28_Fellowship", "label": "Fokker F28 Fellowship" },
            { "id": "39", "link": "/wiki/Fokker_70", "label": "Fokker 70" },
            { "id": "40", "link": "/wiki/Fokker_100", "label": "Fokker 100" },
            { "id": "41", "link": "/wiki/Hawker_Siddeley_Trident", "label": "Hawker Siddeley Trident" },
            { "id": "42", "link": "/wiki/Ilyushin_Il-62", "label": "Ilyushin Il-62" },
            { "id": "43", "link": "/wiki/Ilyushin_Il-86", "label": "Ilyushin Il-86" },
            { "id": "44", "link": "/wiki/Ilyushin_Il-96", "label": "Ilyushin Il-96" },
            { "id": "45", "link": "/wiki/Irkut_MC-21", "label": "Irkut MC-21" },
            { "id": "46", "link": "/wiki/Lockheed_L-1011_TriStar", "label": "Lockheed L-1011 TriStar" },
            { "id": "47", "link": "/wiki/McDonnell_Douglas_DC-9", "label": "McDonnell Douglas DC-9" },
            { "id": "48", "link": "/wiki/McDonnell_Douglas_MD-80", "label": "McDonnell Douglas MD-80" },
            { "id": "49", "link": "/wiki/McDonnell_Douglas_DC-10", "label": "McDonnell Douglas DC-10" },
            { "id": "50", "link": "/wiki/McDonnell_Douglas_MD-11", "label": "McDonnell Douglas MD-11" },
            { "id": "51", "link": "/wiki/McDonnell_Douglas_MD-90", "label": "McDonnell Douglas MD-90" },
            { "id": "52", "link": "/wiki/Mitsubishi_Regional_Jet", "label": "Mitsubishi Regional Jet" },
            { "id": "53", "link": "/wiki/Shanghai_Y-10", "label": "Shanghai Y-10" },
            { "id": "54", "link": "/wiki/Sud_Aviation_Caravelle", "label": "Sud Aviation Caravelle" },
            { "id": "55", "link": "/wiki/Sukhoi_Superjet_100", "label": "Sukhoi Superjet 100" },
            { "id": "56", "link": "/wiki/Tupolev_Tu-104", "label": "Tupolev Tu-104" },
            { "id": "57", "link": "/wiki/Tupolev_Tu-110", "label": "Tupolev Tu-110" },
            { "id": "58", "link": "/wiki/Tupolev_Tu-124", "label": "Tupolev Tu-124" },
            { "id": "59", "link": "/wiki/Tupolev_Tu-134", "label": "Tupolev Tu-134" },
            { "id": "60", "link": "/wiki/Tupolev_Tu-144", "label": "Tupolev Tu-144" },
            { "id": "61", "link": "/wiki/Tupolev_Tu-154", "label": "Tupolev Tu-154" },
            { "id": "62", "link": "/wiki/Tupolev_Tu-204", "label": "Tupolev Tu-204" },
            { "id": "63", "link": "/wiki/Tupolev_Tu-334", "label": "Tupolev Tu-334" },
            { "id": "64", "link": "/wiki/VFW-Fokker_614", "label": "VFW-Fokker 614" },
            { "id": "65", "link": "/wiki/Vickers_VC10", "label": "Vickers VC10" },
            { "id": "66", "link": "/wiki/Yakovlev_Yak-40", "label": "Yakovlev Yak-40" },
            { "id": "67", "link": "/wiki/Yakovlev_Yak-42", "label": "Yakovlev Yak-42" },
        ]});
    });
    return router
}


