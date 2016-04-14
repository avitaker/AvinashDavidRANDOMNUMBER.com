var app = angular.module('personalWebsite', ['controllersJs','ngRoute','DesignFactory','ngMaterial','ngMessages','CommentFactory','duScroll']);

app.config(function($routeProvider, $locationProvider, $mdThemingProvider){
  $routeProvider
  .when('/personalWebsite/home',{
      templateUrl:'personalWebsite/templates/homepage.html',
      controller:'homepageCtrl'
  })
  .when('/personalWebsite/apps',{
    templateUrl:'personalWebsite/templates/apps.html',
    controller:'appsCtrl'
  })
  .when('/personalWebsite/resume',{
    templateUrl:'personalWebsite/templates/resume.html',
    controller:'resumeCtrl'
  })
  .when('/personalWebsite/contactMe',{
    templateUrl:'personalWebsite/templates/contact_me.html',
    controller:'contactCtrl'
  })
  .otherwise({
        redirectTo: '/personalWebsite/home',
        controller: 'homepageCtrl'
      });

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo', {
      'default': '800', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('light-green', {
      'default': '700',
      'hue-1':'50'
    })
    .warnPalette('red');
    // $locationProvider.html5Mode(true);
  // $locationProvider.html5mode(true);
  // $locationProvider.html5Mode({enabled: true,requireBase: false});
})
.value('duScrollDuration', 300)
  .value('duScrollOffset', 30);
