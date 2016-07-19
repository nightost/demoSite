var provinces = require('./getProvinces');
var _ = require('underscore');
var request = require('request-promise');
var uri = 'http://xzqh.mca.gov.cn/selectJson';
var iconv = require('iconv-lite');
function cityCode() {
    var provinceP = getCityInfo(provinces[0]);
    provinceP
    .then(function(data){
        // if(value=="北京市(京)"||value=="天津市(津)"||value=="重庆市(渝)"||value=="上海市(沪)"){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    });
}
function getCityInfo(obj){ 
    var cityName = obj.provinceName;
    console.log(cityName);
    var options;
    options = {
        method: 'POST',
        json : true,
        uri : uri,
        header : {
            'content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        form : {
            shengji : cityName
        }
    };
    return request(options)
}
function encodeURIComponent_GBK(str)
{
  if(str==null || typeof(str)=='undefined' || str=='') 
    return '';
  
  var a = str.toString().split('');
  
  for(var i=0; i<a.length; i++) {
    var ai = a[i];
    if( (ai>='0' && ai<='9') || (ai>='A' && ai<='Z') || (ai>='a' && ai<='z') || ai==='.' || ai==='-' || ai==='_') continue;
    var b = iconv.encode(ai, 'gbk');
    var e = ['']; // 注意先放个空字符串，最保证前面有一个%
    for(var j = 0; j<b.length; j++) 
      e.push( b.toString('hex', j, j+1).toUpperCase() );
    a[i] = e.join('%');
  }
  return a.join('');
}
module.exports = cityCode;