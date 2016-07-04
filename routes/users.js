var express = require('express');
var router = express.Router();
var cityInfo = require('../main/src/city-info/cityInfo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* post city info */
router.post('/cities', function(req, res, next) {
  var cityPromise = cityInfo();
  cityPromise.then(function(data){
    res.json({
      error : 0,
      msg : '获取数据成功',
      data : data
    });
  });

});

module.exports = router;
