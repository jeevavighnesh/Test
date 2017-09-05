var timerapp = angular.module('myApp', []);


timerapp.controller('timerController', function($scope) {

  $scope.seconds = 16;
  $scope.fillClass = "c100 p"+$scope.seconds.toString();
  $scope.end=false;
  // Timer logic
  function countDownTimer() {
    var sec = angular.element( document.querySelector( '#sec' ) );
    var min = angular.element( document.querySelector( '#min' ) );
    var hr = angular.element( document.querySelector( '#hr' ) );
    timerVar = setTimeout(function() {
      --$scope.seconds;
      $scope.fillClass = "c100 p"+$scope.seconds.toString();
      console.log($scope.fillClass);
      if ($scope.seconds==0) {
        $scope.end=true;
      }
      else {
        if ($scope.seconds<15) {
          // $('#timer').css("background-color","red");
          sec.css("border","0.08em solid red");
        }
        countDownTimer();
      }
      $scope.$apply()
    }, 1000);
  }
  countDownTimer();
});
