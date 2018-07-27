'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.airlines = airlines;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function airlines() {
    var router = _express2.default.Router();

    router.get('/', function (req, res) {
        res.json([{ "id": "1", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/A3.png", "name": "aegean-airlines-a3" }, { "id": "2", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/AF.png", "name": "air-france-af" }, { "id": "3", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/AZ.png", "name": "alitalia-az" }, { "id": "4", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/BA.png", "name": "british-airways-ba" }, { "id": "5", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/IR.png", "name": "iran-air-ir" }, { "id": "6", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/J2.png", "name": "azerbaijan-airlines-j2" }, { "id": "7", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/KK.png", "name": "atlasglobal-kk" }, { "id": "8", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/KL.png", "name": "klm-kl" }, { "id": "9", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/LH.png", "name": "lufthansa-lh" }, { "id": "10", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/OS.png", "name": "austrian-airlines-os" }, { "id": "11", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/PC.png", "name": "pegasus-airlines-pc" }, { "id": "12", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/PS.png", "name": "ukraine-international-airlines-ps" }, { "id": "13", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/QB.png", "name": "qeshm-airlines-qb" }, { "id": "14", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/QR.png", "name": "qatar-airways-qr" }, { "id": "15", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/ST.png", "name": "germania-st" }, { "id": "16", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/SU.png", "name": "aeroflot-su" }, { "id": "17", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/TK.png", "name": "turkish-airlines-tk" }, { "id": "18", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/W5.png", "name": "mahan-air-w5" }, { "id": "19", "img": "https://res.cloudinary.com/wego/w_30,h_27,f_auto,fl_lossy,q_80/v20180727/flights/airlines_square/XQ.png", "name": "sunexpress-xq" }]);
    });
    return router;
}