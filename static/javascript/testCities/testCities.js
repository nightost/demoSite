/**
 * Created by nightost on 16/7/4.
 */

/**
 * all resourse all loaded
 */
var citySearcher = {
    loadFnc : () => {
        fetch('/users/cities',{
            method: "POST"
        })
        .then(function(response){
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        });
    },
    initUI : () =>{

    }
};
window.onload = function(){
    citySearcher.loadFnc();
};