/**
 * Created by mike on 16/08/15.
 */
angular.module('WAM').service('locationsvc', function ($http) {
//set options
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(onSuccess, onError,posOptions);






    function onSuccess(position) {

        return position;
    }

function onError(error) {


    /* alert('code: '    + error.code    + '\n' +
     'message: ' + error.message + '\n');*/
        }



});
