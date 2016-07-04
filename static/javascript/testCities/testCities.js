/**
 * Created by nightost on 16/7/4.
 */

/**
 * all resourse all loaded
 */
var loadFnc = () => {
    fetch('/users/cities',{
            method: "POST"
        })
        .then(function(response){
            console.log(response);
        });
};
window.onload = loadFnc;