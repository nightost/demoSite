var $ = require('jquery');
var env = require('jsdom').env;
var provinces = '<select name="shengji" id="ss" style="width: 145px">'+
                    '<option value="11">北京市(京)</option>'+
                    '<option selected="" value="12">天津市(津)</option>'+
                    '<option value="13">河北省(冀)</option>'+
                    '<option value="14">山西省(晋)</option>'+
                    '<option value="15">内蒙古自治区(内蒙古)</option>'+
                    '<option value="21">辽宁省(辽)</option>'+
                    '<option value="22">吉林省(吉)</option>'+
                    '<option value="23">黑龙江省(黑)</option>'+
                    '<option value="31">上海市(沪)</option>'+
                    '<option value="32">江苏省(苏)</option>'+
                    '<option value="33">浙江省(浙)</option>'+
                    '<option value="34">安徽省(皖)</option>'+
                    '<option value="35">福建省(闽)</option>'+
                    '<option value="36">江西省(赣)</option>'+
                    '<option value="37">山东省(鲁)</option>'+
                    '<option value="41">河南省(豫)</option>'+
                    '<option value="42">湖北省(鄂)</option>'+
                    '<option value="43">湖南省(湘)</option>'+
                    '<option value="44">广东省(粤)</option>'+
                    '<option value="45">广西壮族自治区(桂)</option>'+
                    '<option value="46">海南省(琼)</option>'+
                    '<option value="50">重庆市(渝)</option>'+
                    '<option value="51">四川省(川、蜀)</option>'+
                    '<option value="52">贵州省(黔、贵)</option>'+
                    '<option value="53">云南省(滇、云)</option>'+
                    '<option value="54">西藏自治区(藏)</option>'+
                    '<option value="61">陕西省(陕、秦)</option>'+
                    '<option value="62">甘肃省(甘、陇)</option>'+
                    '<option value="63">青海省(青)</option>'+
                    '<option value="64">宁夏回族自治区(宁)</option>'+
                    '<option value="65">新疆维吾尔自治区(新)</option>'+
                    '<option value="91">香港特别行政区(港)</option>'+
                    '<option value="92">澳门特别行政区(澳)</option>'+
                    '<option value="71">台湾省(台)</option>'+
                '</select>';
var province = [];
env(provinces, function (errors, window) {
    console.log(errors);
    var $ = require('jquery')(window);
    province = $('option').each(function(i , item){
        var $item = $(item);
        province.push({
            provinceCode : $item.attr('value'),
            provinceName : $item.text()
        });
    });
  });
module.exports = province;