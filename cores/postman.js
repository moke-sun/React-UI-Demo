/**
 * Created by sunkj on 11/24/2016.
 * Restful接口呼叫核心类，提供GET, POST, DELETE, PUT方法
 */

var request = require('request');
var Q       = require('q');

var Postman = {
  get: function(url){
    var deferred = Q.defer();
    request({url:url,method:"GET"},
      function(err,httpResponse,body){
        if (err) {
          deferred.reject(err);
        }else{
          deferred.resolve(body);
        }
      });
    return deferred.promise;
  },
  post: function(url, data, header){
    var deferred = Q.defer();
    if(!header){
      header = {'Content-type':'application/json'};
    }
    request({url:url,method:"POST",headers : header, body : JSON.stringify(data)},
      function(err,httpResponse,body){
        if (err) {
          deferred.reject(err);
        }else{
          deferred.resolve(body);
        }
      });
    return deferred.promise;
  }
};

module.exports = Postman;
