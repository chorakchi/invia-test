
import express   from 'express';
import  bodyParser from 'body-parser';
import {search} from './search';
import {cities} from './cities';
import {airlines} from './airlines';
import {aircrafts} from './aircrafts';



var app = express()
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);

var port = process.env.PORT || 8000;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// REGISTER ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/search', search());
app.use('/api/cities', cities());
app.use('/api/airlines', airlines());
app.use('/api/aircrafts', aircrafts());
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('system run in  ' + port);