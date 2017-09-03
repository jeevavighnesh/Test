var timerapp = angular.module('myApp', []);


timerapp.controller('timerController', function($scope) {

  $scope.percent = 16;
  $scope.fillClass = "c100 p"+$scope.percent.toString();
  $scope.end=false;
  // Timer logic
  function countDownTimer() {
    timerVar = setTimeout(function() {
      --$scope.percent;
      $scope.fillClass = "c100 p"+$scope.percent.toString();
      console.log($scope.fillClass);
      if ($scope.percent==0) {
        $scope.end=true;
      }
      else {
        if ($scope.percent<15) {
          var timer = angular.element( document.querySelector( '#timer' ) );
          // $('#timer').css("background-color","red");
          timer.css("border","0.08em solid red");
        }
        countDownTimer();
      }
      $scope.$apply()
    }, 1000);
  }
  countDownTimer();
});
