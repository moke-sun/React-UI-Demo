/**
 * Created by sunkj on 11/24/2016.
 * 阿姨管理服务类
 */

var Postman = require('../cores/postman');
var sysCfg  = require('../conf/sys.json');
var Q       = require('q');
var _       = require('underscore');
var log4js  = require('log4js');
var logger  = log4js.getLogger('default');

//获取API的host信息
var getElasticsearchUrl = function(){
  return 'http://' + sysCfg.elasticsearch.host + ":" + sysCfg.elasticsearch.port;
};

var searchWorkers = function(filter){
  var deferred = Q.defer();
  var url = getElasticsearchUrl() + '/aimama/worker/_search';
  Postman.post(url, filter).then(function(ret){
    var workersList = JSON.parse(ret);
    deferred.resolve(workersList.hits);
  },function(err){
    logger.error('Get worker list error:' + err);
    deferred.reject(err);
  });
  return deferred.promise;
};

var WorkersService = {
  find:function(keyword,skip,limit){
    var data = {
      "from": parseInt(skip),
      "size": parseInt(limit),
      "sort": { "Booked.BookedDate": { "order": "desc" }}
    };
    if(keyword){
      data.query = {};
      data.query.bool = {};
      data.query.bool.should = [];
      data.query.bool.should.push({"match_phrase" : {"IdCard.Name" : keyword}});
      data.query.bool.should.push({"match" : {"Contact.Phone" : keyword}});

      if(_.isNumber(parseInt(keyword)) && !_.isNaN(parseInt(keyword))){
        data.query.bool.should.push({"term" : {"Booked.Id" : parseInt(keyword)}});
      }

    }
    return searchWorkers(data);
  },
  findOne:function(id){
    var deferred = Q.defer();
    var url = getElasticsearchUrl() + '/aimama/worker/' + id;
    Postman.get(url).then(function(ret){
      var result = JSON.parse(ret);
      deferred.resolve(result._source);
    },function(err){
      logger.error('Get worker details error:' + err);
      deferred.reject(err);
    });
    return deferred.promise;
  },
  filter:function(filter,skip,limit){
    var data = {
      "from": parseInt(skip),
      "size": parseInt(limit),
      "sort": { "Booked.BookedDate": { "order": "desc" }},
      "query" : {
        "bool":{
          "should" : [
            {"match" : {"Booked.StatusId" : "4"}},
            {"match" : {"Booked.StatusId" : "5"}},
            {"match" : {"Booked.StatusId" : "6"}},
            {"match" : {"Booked.StatusId" : "7"}}
          ]
        }
      }
    };

    var filterMap = {
      "ServiceTypes": "{\"match_phrase\" : {\"Booked.ServiceTypes\" : \"#value#\"}}",
      "SalaryRequirement": "{\"match\" : {\"Booked.SalaryRequirement\" : \"#value#\"}}",
      "Homtown": "{\"match_phrase\" : {\"Booked.Homtown\" : \"#value#\"}}",
      "Age": "{\"range\" : {\"IdCard.Age\" : #value#}}",
      "HighestEducation": "{\"match\" : {\"Education.HighestEducation\" : \"#value#\"}}",
      "Zodiac": "{\"term\" : {\"IdCard.Zodiac\" : \"#value#\"}}",
      "Constellation": "{\"match_phrase\" : {\"IdCard.Constellation\" : \"#value#\"}}"
    };

    if(filter){
      data.query.bool.must = [];
      for(var i in filter){
        data.query.bool.must.push(JSON.parse(filterMap[filter[i]['field']].replace('#value#',filter[i]['value'])));
      }
    }

    return searchWorkers(data);
  },
  search:function(key,skip,limit){
    var data = {
      "from": parseInt(skip),
      "size": parseInt(limit),
      "sort": { "Booked.BookedDate": { "order": "desc" }},
      "query" : {
        "bool":{
          "should" : [
            {"match" : {"Booked.StatusId" : "4"}},
            {"match" : {"Booked.StatusId" : "5"}},
            {"match" : {"Booked.StatusId" : "6"}},
            {"match" : {"Booked.StatusId" : "7"}}
          ]
        }
      }
    };

    if(key){
      data.query.bool.must = {};
      data.query.bool.must.bool = {};
      data.query.bool.must.bool.should = [];
      var must = [];
      must.push({"match_phrase" : {"IdCard.Name" : key}});
      must.push({"match" : {"Contact.Phone" : key}});
      if(_.isNumber(parseInt(key)) && !_.isNaN(parseInt(key))){
        must.push({"term" : {"Booked.Id" : parseInt(key)}});
      }
      data.query.bool.must.bool.should.push(must);
    }

    return searchWorkers(data);
  }
};

module.exports = WorkersService;
