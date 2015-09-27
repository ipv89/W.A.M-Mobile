/**
 * Created by mike on 21/09/2015.
 */
angular.module('WAM').controller('newsdtlCtrl', function($scope, $ionicLoading, news_service) {

    var this_news = news_service.selected_article;
    $scope.news = this_news;



})