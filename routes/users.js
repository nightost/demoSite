var express = require('express');
var router = express.Router();
var cityInfo = require('../controller/city-info/cityInfo');
var cityCode = require('../controller/city-info/getCityCode');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/* post city info */
router.post('/cities', function (req, res, next) {
    var cityPromise = cityInfo('天安门');
    cityPromise.then(function (data) {
        res.json({
            error: 0,
            msg: '获取数据成功',
            data: JSON.parse(data)
        });
    }).catch(function () {

    });
});
router.get('/cityCodes' , function (req, res, next) {
    cityCode();
    res.json('运行中');
});
module.exports = router;
