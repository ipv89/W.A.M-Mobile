/**
 * Created by mike on 27/09/2015.
 */
angular.module('WAM').controller('weatherctrl', function($scope,$state, $ionicLoading,wamApi) {


    wamApi('getWeather', prams).then(function (response) {
        //console.log("getWeather", response)
        if (response.success) {
            // var $data = JSON.parse(response.data);
            console.log("getWeather", response.data)
           // $scope.event_items = response.data;
           // $scope.hide();
        }

    })
});
