var app = angular.module('tictactoe', []);

function boardController($scope) {


  init = function($scope, boardSize, callback) {

    $scope.boardSize = boardSize;
    $scope.boardLength = $scope.boardSize * $scope.boardSize;

    $scope.maxWins = $scope.boardSize + $scope.boardSize + 2;

    $scope.board = [];
    $scope.wins = [];

    $scope.player = "x";
    $scope.hPlayer = "x";
    $scope.cPlayer = "c";

    callback($scope);

    for (i = 0; i < $scope.boardLength; i++) {
      $scope.board[i] = i;
    }

    i = 0

    for (j = 0; j < $scope.boardLength; j = j + $scope.boardSize) {
      win = []

      for (k = 0; k < $scope.boardSize; k++) {
        win[k] = k + j;
      }

      $scope.wins[i] = win;
      i++;
    }

    for (l = 0; l < $scope.boardSize; l++) {
      win = [];
      k = l;
      for (j = 0; j < $scope.boardSize; j++) {
        win[j] = k + j;
        k = k + ($scope.boardSize - 1);
      }

      $scope.wins[i] = win;
      i++;
    }

    k = 0;
    win = []
    for (j = 0; j < $scope.boardSize; j++) {

      win[j] = k;
      k = k + $scope.boardSize + 1;

    }

    $scope.wins[i] = win;
    i++;

    k = $scope.boardSize - 1;
    win = []
    for (j = 0; j < $scope.boardSize; j++) {

      win[j] = k;
      k = k + ($scope.boardSize - 1);

    }

    $scope.wins[i] = win;

  }

  //init board

  init($scope, 3, function($scope) {
    // console.log("log  ")
    //  console.log($scope.wins)
    //  console.log($scope.board)

  })



}


app.component('board', {

  templateUrl: 'board.tpl',
  controller: boardController

});
