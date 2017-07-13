var app = angular.module('tictactoe', []);

function boardController($scope) {


  init = function($scope, boardSize, callback) {

    $scope.boardSize = boardSize;
    $scope.boardLength = $scope.boardSize * $scope.boardSize;

    $scope.maxWins = $scope.boardSize + $scope.boardSize + 2;

    $scope.board = [];
    $scope.wins = [];
    $scope.rows = [];
    $scope.score = $scope.boardLength + 1;
    $scope.scores = [];
    $scope.moves = [];
    $scope.bestMove = 0;

    $scope.player = "x";
    $scope.hPlayer = "x";
    $scope.cPlayer = "c";


    for (i = 0; i < $scope.boardLength; i++) {
      $scope.board[i] = " ";
    }
    for (i = 0; i < $scope.boardSize; i++) {
      $scope.rows[i] = i;
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

        if (brd[wins[i][j]] === player) {
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
      if (brd[i] === " ")
        return false

    }

    return true;

  }


  minMaxAI = function($scope, brd, depth, player) {

    var opponent = player == $scope.hPlayer ? $scope.hPlayer : $scope.cPlayer;

    if (checkWin($scope, brd, player))
      return $scope.score - depth;
    else if (checkWin($scope, brd, opponent))
      return depth - $scope.score;
    else if (checkFull($scope, brd)) {
      return 0;
    }

    for (i = 0; i < $scope.boardLength; i++) {

      if (brd[i] === " ") {

        newboard = brd.splice();
        newboard[i] = opponent;
        score = minMaxAI($scope, newboard, depth + 1, opponent);
        $scope.moves.push(i);
        $scope.scores.push(score);

      }

    }


    if ($scope.player === player) {

      maxScore = -10000;

      for (i = 0; i < $scope.scores.length; i++) {
        if ($scope.scores[i] > maxScore)
          maxScore = $scope.scores[i]
      }

      for (i = 0; i < $scope.scores.length; i++) {
        if ($scope.scores[i] == maxScore) {
          $score.bestMove = $scope.moves[i];

          if (depth === 0)
            $scope.board[$score.bestMove] = player;

          return maxScore;
        }

      }


    } else {
      minScore = 10000;

      for (i = 0; i < $scope.scores.length; i++) {
        if ($scope.scores[i] < minScore)
          minScore = $scope.scores[i]
      }

      for (i = 0; i < $scope.scores.length; i++) {
        if ($scope.scores[i] == minScore) {
          $score.bestMove = $scope.moves[i]
          return minScore;

        }
      }

    }


  }

  //init board

  init($scope, 3, function($scope) {
    // console.log("log  ")
    //  console.log($scope.wins)
    //  console.log($scope.board)


  });




}


app.component('board', {

  templateUrl: 'board.tpl',
  controller: boardController

});
