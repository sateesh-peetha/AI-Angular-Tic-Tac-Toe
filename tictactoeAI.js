var app = angular.module('tictactoe', []);

function boardController($scope) {


  init = function($scope, boardSize, callback) {

    $scope.boardSize = boardSize;
    $scope.boardLength = $scope.boardSize * $scope.boardSize;

    $scope.maxWins = $scope.boardSize + $scope.boardSize + 2;

    $scope.board = [];
    $scope.wins = [];
    $scope.range = [];
    $scope.range1 = [];

    $scope.player = "x";
    $scope.hPlayer = "x";
    $scope.cPlayer = "c";


    for (i = 0; i < $scope.boardLength; i++) {
      $scope.board[i] = i;
    }
    k = 0;
    for (i = 0; i < $scope.boardSize; i++) {
      $scope.range[i] = i;
      $scope.range1[i] = k;
      k = k + $scope.boardSize;
    }
    //
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

    callback($scope);


  }

  checkWin = function($scope, brd, player) {


    for (i = 0; i < $scope.maxWins; i++) {
      winFlag = false;
      for (j = 0; j < $scope.boardSize; j++) {

        if (brd[wins[i][j]] == player) {
          winFlag = true;
        } else {
          winFlag = false;
        }

      }

      if (winFlag)
        return true;
      else
        return false;

    }

  }


  checkFull = function($scope, brd) {

    for (i = 0; i < $scope.boardLenght; i++) {
      if (brd[i] == $scope.hPlayer || brd[i] == $scope.cPlayer)
        return true

    }

    return false;

  }


  getScore = function($scope, brd, depth, player) {

    var opponent = player == $scope.hPlayer ? $scope.hPlayer : $scope.cPlayer;

    var score = $scope.boardLength + 1;


    if (checkWin($scope, brd, player))
      return score - depth;
    else if (checkWin($scope, brd, opponent))
      return depth - score;
    else if (checkFull($scope, brd)) {
      return 0
    }

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
