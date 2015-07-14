/**
 * App Main Entrance
 */
var express = require('express')
  //, connect = require('connect')
  , favicon = require('serve-favicon')
  , serveStatic = require('serve-static')
  , bodyParser = require('body-parser')
  , jsonParser = bodyParser.json()
  //, urlencodedParser = bodyParser.urlencoded({ extended: false }
  , router = require('./app/router.js')
  , PORT = require('./app/configs/server').port
  , DIR = '/public'//'/tests/pagination'
  , ICO_DIR = '/public/juliye.ico';

var app = express();

//set web public view
app.use(serveStatic(__dirname + DIR));
//set web logo
app.use(favicon(__dirname + ICO_DIR));
//body parse  application/json
app.use(jsonParser);

//set app routers
router(app);

//start app, will load
app.listen(PORT);
