import express   from 'express';

export function airlines() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) {
   res.json({"result":[
    {"id": "0","img":"",label:"All",},
    {"id": "1","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/A3.png","label":"aegean airlines a3",},
    {"id": "2","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/AF.png","label":"air france af",},
    {"id": "3","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/AZ.png","label":"alitalia az",},
    {"id": "4","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/BA.png","label":"british airways ba",},
    {"id": "5","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/IR.png","label":"iran air ir",},
    {"id": "6","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/J2.png","label":"azerbaijan airlines j2",},
    {"id": "7","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/KK.png","label":"atlasglobal kk",},
    {"id": "8","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/KL.png","label":"klm kl",},
    {"id": "9","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/LH.png","label":"lufthansa lh",},
    {"id": "10","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/OS.png","label":"austrian airlines-os",},
    {"id": "11","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/PC.png","label":"pegasus airlines-pc",},
    {"id": "12","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/PS.png","label":"ukraine international airlines ps",},
    {"id": "13","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/QB.png","label":"qeshm airlines qb",},
    {"id": "14","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/QR.png","label":"qatar airways qr",},
    {"id": "15","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/ST.png","label":"germania st",},
    {"id": "16","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/SU.png","label":"aeroflot su",},
    {"id": "17","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/TK.png","label":"turkish airlines tk",},
    {"id": "18","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/W5.png","label":"mahan air w5",},
    {"id": "19","img":"https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/XQ.png","label":"sunexpress xq",},
    ]});   
    });
    return router
}

