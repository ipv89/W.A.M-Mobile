/**
 * Created by mike on 16/08/15.
 */
angular.module('WAM').service('locationsvc', function ($http) {
//set options
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(onSuccess, onError,posOptions);

var my_location;

    function onSuccess(position) {
      my_location = position;
        this.my_locstion = position;
     return my_location;
    };
function onError(error) {
        /* alert('code: '    + error.code    + '\n' +
         'message: ' + error.message + '\n');*/
        }




});
