(function(){

  var pg = require('pg'),
    SERVER = require("../configs/Server"),
    AUTH = require("../configs/AuthKeys");

  //构造连接数据库的连接字符串："tcp://用户名:密码@ip/相应的数据库名"
  var conString = "tcp://";//postgres:postgres@localhost/my";
  conString += AUTH.
  var client = new pg.Client();  //构造一个数据库对象

  //连接数据库，连接成功，执行回调函数
  client.connect(function(error, results) {
    if(error){
      console.log('ClientConnectionReady Error: ' + error.message);
      client.end();
      return;
    }
    console.log("client.connect OK.\n");
    server.start(client,router.route,handle); //启动server
  });

})();