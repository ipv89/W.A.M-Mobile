
angular.module('WAM', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

   /* .service('thisservice', function () {

        var thisvar = {idex:1};


})
*/

 .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('news', {
    url: '/news',
    templateUrl: 'views/news.html'

  })
      .state('events', {
        url: '/events',
        templateUrl: 'views/events.html'
      })

      .state('traffic', {
        url: '/traffic',
        templateUrl: 'views/traffic.html'
      })

      .state('event_details', {
          url: '/event_details',
          templateUrl: 'views/event_details.html'
      })

      .state('news_details', {
          url: '/news_details',
          templateUrl: 'views/news_details.html'
      })
      .state('traffic_details', {
          url: '/traffic_details',
          templateUrl: 'views/traffic_details.html'
      })



        $urlRouterProvider.otherwise('news');

});
