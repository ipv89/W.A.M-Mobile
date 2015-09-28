/**
 * Created by mike on 16/08/15.
 */
angular.module('WAM').service('locationsvc', function ($http) {
//set options
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(onSuccess, onError,posOptions);



var p;

    function onSuccess(position) {
 p = position;
        return p;
    }
var x = onSuccess(p);
    console.log("x = ", x);
function onError(error) {


    /* alert('code: '    + error.code    + '\n' +
     'message: ' + error.message + '\n');*/
        }



});
