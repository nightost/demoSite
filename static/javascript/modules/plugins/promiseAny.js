/**
 * Created by nightost on 16/4/29.
 */
'use strict';
var reversePromise = promise =>  new Promise((resolve,reject) => promise.then(reject,resolve));
export function promiseAny(promises){
    return  reversePromise(Promise.all([...promises].map(reversePromise)));
}