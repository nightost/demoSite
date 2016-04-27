/**
 * Created by nightost on 16/4/26.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/get', function(req, res, next) {
    res.json({ error : 0,
                msg : '获取数据成功',
                data : {
                    name : 'nightost'
                }});
});

module.exports = router;