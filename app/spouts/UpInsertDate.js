/**
 * App Main Entrance
 */
var pg = require('pg'),
  users = require('../../private/User'),
  conString = require('../../private/Auth').PG_CONN_STR,
  BEGIN = 1388505600000, //Begin: 2014-01-01  1388505600000
  END = 1483142400000, //End:   2016-12-31  1483142400000;
  STEP = 86400000;

console.log("Init app.");

pg.connect(conString, function(err, client, done) {

  console.log("Connect callback.");

  if(err) {
    return console.error('error fetching client from pool', err);
  }

  //Date Record Insert Pattern
  var insert = 'INSERT INTO Date(timestamp,year,month,day,weekNo) ' +
    'VALUES($1::bigint, $2::smallint, $3::smallint, $4::smallint)';
  //Timestamp
  var tmp = BEGIN;
  //Gen Date Record
  var genParams = function (ts){
    var date = new Date(ts);
    return [
      ts,
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getWeekNumber(),
      date.getDay()
    ];
  };
  //Insert queue
  while (tmp < END){
    tmp += STEP;
    client.query(insert,genParams(tmp));
  }

  var query = client.query("SELECT COUNT(*) FROM Date");

  query.on('row', function(row) {
    console.log("Row:" + row);
  });

  query.on('end', function(res) {
    client.end("End: " + res);
  });

});