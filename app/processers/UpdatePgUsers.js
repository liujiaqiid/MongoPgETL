/**
 * App Main Entrance
 */
var pg = require('pg'),
  users = require('./private/User'),
  conString = require('./private/Auth').PG_CONN_STR;

//this starts initializes a connection pool
//it will keep idle connections open for a (configurable) 30 seconds
//and set a limit of 20 (also configurable)

console.log("Init app.");
var begin = Date.now();
pg.connect(conString, function(err, client, done) {

  console.log("Connect callback.");

  if(err) {
    return console.error('error fetching client from pool', err);
  }

  var parseData = function(err, result) {
    //call `done()` to release the client back to the pool
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.command);//result.rows[0].number);

    //client.end();//注销,则默认使用连接池
    //console.log("Time Consume: "+(Date.now() - begin));
  };

  //1. Create:
  //client.query('INSERT INTO TEST(name,age) VALUES($1::varchar, $2::smallint)', ['Jerry',22], parseData);

  //2. Query:
  //client.query('SELECT $1::int AS number', ['1'], parseData);
  //client.query('SELECT NOW() AS "time_now"', parseData);
  //for (var i = 0 ; i < 10 ; i++)
  //  client.query('SELECT COUNT(*) FROM users', parseData);
  //client.query('SELECT * FROM test', parseData);

  //3. Update:
  var updates = 'UPDATE USERS SET belongOrgProvince=$1::varchar, ' +
    'belongOrgCity=$2::varchar WHERE id=$3::varchar(24)';

  var i = 800 ;
  var timer = setInterval(function() {
    (function (i) {

      if (i >= users.length) {
        console.log("Game over...");
        clearInterval(timer);
        return;
      }

      console.log(i);
      var user = users[i];
      var params = [user.province, user.city, user.id];

      client.query(updates, params, parseData);

    })(i++)
  }, 200);

});