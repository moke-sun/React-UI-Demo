var express       = require('express');
var router        = express.Router();
var WorkerService = require('../services/workers');

/* GET worker listing. */

/*
 * 获取列表
 */
router.get('/list', function(req, res, next) {
  var skip = req.query.skip ? req.query.skip : 0,
      limit = req.query.limit ? req.query.limit : 16;
  var promise = WorkerService.find('', skip, limit);
  promise.then(function(ret){
    res.json(ret);
  },function(err){
    res.json(500, {error:err});
  });
});

/*
 * 获取详情
 */
router.get('/details', function(req, res, next) {
  var id = req.query.id;
  var promise = WorkerService.findOne(id);
  promise.then(function(ret){
    res.json(ret);
  },function(err){
    res.json(500, {error:err});
  });
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
