/**
 * Created by nightost on 16/7/4.
 */
var cityInfoUrl = 'http://mobile.weather.com.cn/js/citylist.xml';
var parseString = require('xml2js').parseString;
var request = require('request');
var promise;
/**
 * 获取城市信息
 * request
 */
function getCityInfo(resolve , reject){
    var cityInfo;
    request(cityInfoUrl , function(error , response , body){
        cityInfo = parseXml(body);
        resolve(cityInfo);
    });
    return cityInfo;
}

//parse xml
function parseXml(xml){
    return parseString(xml, function (err, result) {
        return result;
    });
}

promise = new Promise(getCityInfo);

module.exports = promise;