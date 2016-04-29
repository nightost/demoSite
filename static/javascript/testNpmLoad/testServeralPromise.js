/*
 Created by nightost on 16/4/29.
 *create request promise
 */
import {promiseAny} from '../modules/plugins/promiseAny'
function promiseHandle (resolve,reject,role){
    if(Math.random() > .5){
        resolve('request' + role +' success');
    }
    else{
        reject('request' + role +' failed');
    }
}
var requestA = new Promise((resolve,reject) => {
    promiseHandle(resolve,reject,'A');
});
var aggregativePros = promiseAny([requestA]);
aggregativePros.then((msg) => console.log(msg),(msg) => console.log(msg));
