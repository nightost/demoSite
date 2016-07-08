/**
 * Created by nightost on 16/7/4.
 */
var cityInfoUrl = 'http://121.41.75.147:8081/carfashion/json/cityList.do';

var request = require('request-promise');
/**
 * 获取城市信息
 * request
 */
function getCityInfo(qStr){
    var options;
    options = {
        uri : cityInfoUrl
    };
    return request(cityInfoUrl)
}

module.exports = getCityInfo;