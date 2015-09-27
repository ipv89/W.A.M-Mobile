/**
 * Created by mike on 16/08/15.
 */
//this is going to be used to control the side menu
angular.module('WAM').controller('homectrl', function($scope,$ionicSideMenuDelegate, wamApi ) {

   /* var prams = {
        //get gps data
        //longitude=174.777290&latitude=-41.306481
        longitude : 174.777290,
        latitude : -41.306481
    }*/


        $scope.toggleLeft = function() {
            console.log("move the menu");
            $ionicSideMenuDelegate.toggleLeft();

        };

   /* wamApi('getWeather', prams).then(function (response) {
        //console.log("getWeather", response)
        if (response.success) {
            // var $data = JSON.parse(response.data);
            console.log("getWeather", response.data)
            // $scope.event_items = response.data;
            // $scope.hide();
        }

    })*/


})
