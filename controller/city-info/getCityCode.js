var provinces = require('./getProvinces');
var _ = require('underscore');
var request = require('request-promise');
var uri = 'http://xzqh.mca.gov.cn/selectJson';
var provinceIndex = 0;
/**
 * 根据省名获取城市信息
 */
function requestInfoByProvince() {
    var cur = provinces[provinceIndex];
    if(!cur){
        return;
    }
    var provinceP = request(getCityInfo(cur));
    provinceP
    .then(function(data){
        // if(value=="北京市(京)"||value=="天津市(津)"||value=="重庆市(渝)"||value=="上海市(沪)"){
        console.log(data);
        console.log('----------------------------------------------------->');
        provinceIndex ++ ;
        requestInfoByProvince();
    })
    .catch(function(error){
        console.log(error);
    });
}
/**
 * 获取城市信息
 * request
 */
function getCityInfo(obj){ 
    var cityName = obj.provinceName;
    console.log(cityName);
    var options;
    options = {
        method: 'POST',
        json : true,
        uri : uri,
        headers : {
            'content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        form : {
            shengji : cityName
        }
    };
    return options;
}
module.exports = requestInfoByProvince;