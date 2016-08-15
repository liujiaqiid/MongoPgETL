//var Date = require("./app/libs/Date");
//var op = require("./app/spouts/UpInsertDate");
var Q = require("Q");


(function(){
  var defer = Q.defer();

  //Q.fcall(function(){ console.log("00000"); return 0;})
  //  .then(function(d){
  //    throw new Error("a")
  //    console.log("11111"+d);
  //    return 1;
  //  })
  //  .then(function(d){
  //    console.log("22222"+d);
  //    return 2;
  //  },function(d){
  //    console.log("33333"+d);
  //  });

  //console.log("444444");

  //Q.fcall(function(){ console.log(" "); return 0;})
  //  .then(function(d){
  //    console.log("11111"+d);
  //    return Q.fcall(function(){
  //        console.log("11111");
  //        throw new Error("xxxxx");
  //        return 1;})
  //      .then(function(d){
  //        console.log("22222"+d);
  //        return 2;
  //      });
  //  })
  //  .then(function(d){
  //    console.log("333333"+d);
  //    return 3;
  //  },function(d){
  //    console.log("555555"+d);
  //  });

  var func = {
    init: function(f1){
      f1();
    },
    then: function(f2){

    }
  }



})();
