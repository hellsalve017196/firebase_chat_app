//modules that are required for this app
var app = angular.module('starter', ['ionic','ngCordova','firebase','starter.controller']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
});


// default routes

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('usernameState', {
    url: '/',
    templateUrl: 'templates/username.html',
    controller : 'usernameCtrl'
  });

  $stateProvider.state('chatroomState',{
    url : '/chatroom',
    templateUrl: 'templates/chatroom.html',
    controller : 'chatCtrl'
  })

  $urlRouterProvider.otherwise('/');

});
