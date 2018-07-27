'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _search = require('./search');

var _cities = require('./cities');

var _airlines = require('./airlines');

var _aircrafts = require('./aircrafts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var allowCrossDomain = function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(allowCrossDomain);

var port = process.env.PORT || 8000;

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// REGISTER ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/search', (0, _search.search)());
app.use('/api/cities', (0, _cities.cities)());
app.use('/api/airlines', (0, _airlines.airlines)());
app.use('/api/aircrafts', (0, _aircrafts.aircrafts)());
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('system run in  ' + port);