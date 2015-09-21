/**
 * Created by mike on 15/08/15.
 */
angular.module('WAM').controller('NewsCtrl', function($scope,$ionicLoading,wamApi, locationsvc, news_service) {


    console.log("Use it you fuck: ", locationsvc.get);


        $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function () {
        $ionicLoading.hide();
    };

    $scope.show();
    //get the events


    wamApi('getNews', prams).then(function (response) {
        //console.log("getNews", response)
        if (response.success) {
            // var $data = JSON.parse(response.data);
            console.log("getNews",response.data)
            $scope.news_items = response.data;
            $scope.hide();
        }

    })


    $scope.getnewsdetail = function (info){

news_service.selected_article = info


        // test that the data is being passed correctly
        console.log('news id is : ',info.id );

      $state.go("news_details");
    }
});