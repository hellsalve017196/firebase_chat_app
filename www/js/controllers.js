//default controllers

angular.module('starter.controller', [])


.controller('usernameCtrl',function($scope,$state) {

      $scope.add_username = function(username) {

          if(username != undefined)
          {
            if(username != '')
            {
                localStorage.setItem("username",username);

                $state.go('chatroomState',{},true);
            }
          }
          else {
            alert("Select A username");
          }

      }

      $scope.current_user = function() {

          if(localStorage.getItem("username") != undefined) {
            $scope.username = localStorage.getItem("username");
          }

      }

      $scope.current_user();

  })


.controller("chatCtrl",function($scope,$firebase,$ionicScrollDelegate) {
    var firebaseObj = new Firebase('https://chatapphudai.firebaseio.com/');

    $scope.messages = []; // messages
    $scope.send = '';
    $scope.hideTime = true; // hinding time
    $scope.current = localStorage.getItem("username"); // setting username


    // if new message arrives this event occures
    $scope.$watch("messages",function() {
      // for scrolling bottom
      $ionicScrollDelegate.scrollBottom(true);
    })

    // loading the message array
    $scope.updated_messages = function() {
      obj = $firebase(firebaseObj.child("messages")).$asObject();

      obj.$bindTo($scope,"messages");

      $ionicScrollDelegate.scrollBottom(true);
    }


    $scope.send_message = function() {
          msg = $scope.send;

          if(msg != '')
          {
            var timestamp = new Date().valueOf();
            var firebaseObj = new Firebase("https://chatapphudai.firebaseio.com/messages/"+timestamp);

            $firebase(firebaseObj).$set(
              {
                c_id : timestamp,
                name : localStorage.getItem("username"),
                message : msg
              }
            );

            $scope.send = '';
          }
          else {
            alert("enter a message")
          }

          $ionicScrollDelegate.scrollBottom(true);
    }

    $scope.clear_message = function() {
          $scope.messages = [];
    }

    $scope.updated_messages();

    $scope.myId = 11;

  })
