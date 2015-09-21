/**
 * Created by mike on 21/09/2015.
 */
angular.module('WAM').controller('newsdtlCtrl', function($scope, $ionicLoading, news_service) {

    var this_news = news_service.selected_article;
    $scope.event = this_news;

    console.log("we are playing with", this_news.id)

})