/**
 * Created by mike on 23/09/2015.
 */
angular.module('WAM').controller('trafficdtlctrl', function($scope, $ionicLoading, traffic_service) {

    var this_trafic = traffic_service.selected_traffic_event;
    $scope.traffic = this_trafic;

    console.log("we are playing with traffic item:::", this_trafic)

})