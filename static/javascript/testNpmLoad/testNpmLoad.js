/**
 * Created by nightost on 16/4/24.
 */
import superagent from 'superagent';
var testRequest;
testRequest = {};
testRequest.getRequest = () =>{
    superagent.post('/hello/get1')
              .end(function(err, res){
                    if (err || !res.ok) {
                        console.log('Oh no! error');
                    } else {
                        console.log('yay got ' + JSON.stringify(res.body));
                    }
              });
}
testRequest.getRequest();
