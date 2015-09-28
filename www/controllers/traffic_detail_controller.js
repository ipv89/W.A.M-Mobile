/**
 * Created by mike on 23/09/2015.
 */
angular.module('WAM').controller('trafficdtlctrl', function($scope, $ionicLoading, traffic_service) {

    var this_traffic = traffic_service.selected_traffic_event;
    console.log(traffic_service.selected_traffic_event);
    $scope.traffic = this_traffic;

    console.log("we are playing with traffic item:::", this_traffic)

})