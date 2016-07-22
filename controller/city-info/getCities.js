var provinces = require('./getProvinces');
var _ = require('lodash');
var request = require('request-promise');
var qp = require('q');
var uri = 'http://xzqh.mca.gov.cn/selectJson';
var provinceIndex = 0;
// if(value=="北京市(京)"||value=="天津市(津)"||value=="重庆市(渝)"||value=="上海市(沪)"){
function GetCities() {
    this.cities = [];
    this.promises = [];
}
GetCities.prototype = {
    /**
     * initialize
     */
    init: function () {
        return this.requestInfoByProvince();
    },
    /**
     * 获取城市信息
     * request
     */
    getCityInfo: function (obj) {
        var cityName = obj.provinceName;
        var options;
        console.log(cityName);
        options = {
            method: 'POST',
            json: true,
            uri: uri,
            headers: {
                'content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            form: {
                shengji: cityName
            }
        };
        return request(options);
    },
    /**
     * 获取城市信息
     * request
     */
    requestInfoByProvince: function () {
        var _this = this;
        var promises = [];
        _.forEach(provinces, function (item) {
            var cur = item;
            var promise;
            if (!cur) {
                return;
            }
            promise = _this.getCityInfo(cur);
            promise
                .then(function(data){
                    var result;
                    result = _.map(data , function(resultItem){
                        resultItem.provinceCode = item.provinceCode;
                    });
                    return result;
                })
                .catch(function(error){
                    console.log(error);
                });
            promises.push(promise);
        });
        return qp.allSettled(promises);
    }
};
module.exports = new GetCities();