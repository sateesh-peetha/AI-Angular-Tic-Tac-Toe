var app = angular.module('tictactoe', []);

function boardController($scope) {

  $scope.defaultSize = 3;

  init = function($scope, boardSize, callback) {

    $scope.boardSize = boardSize;
    $scope.boardLength = $scope.boardSize * $scope.boardSize;

    $scope.maxWins = $scope.boardSize + $scope.boardSize + 2;

    $scope.board = [];
    $scope.bClass = [];
    $scope.state = [];
    $scope.wins = [];
    $scope.rows = [];
    $scope.score = $scope.boardLength + 1;
    $scope.scores = [];
    $scope.moves = [];
    $scope.bestMove = 0;
    $scope.gamestart = false;
    $scope.endMessage = "";
    $scope.beststart = [
      [4],
      [5, 6, 9, 10, 0, 4, 15],
      [12, 6, 7, 8, 16, 17, 18, 0, 4, 24, 20]
    ];


    $scope.player = "x";
    $scope.hPlayer = "x";
    $scope.cPlayer = "c";
    $scope.empty = "E";


    for (i = 0; i < $scope.boardLength; i++) {
      $scope.board[i] = $scope.empty;
      $scope.bClass[i] = "board";
      $scope.state[i] = true;
    }
    for (i = 0; i < $scope.boardSize; i++) {
      $scope.rows[i] = i;
    }
    //
    i = 0;

    for (j = 0; j < $scope.boardLength; j = j + $scope.boardSize) {
      win = [];

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
    win = [];
    for (j = 0; j < $scope.boardSize; j++) {

      win[j] = k;
      k = k + $scope.boardSize + 1;

    }

    $scope.wins[i] = win;
    i++;

    k = $scope.boardSize - 1;
    win = [];
    for (j = 0; j < $scope.boardSize; j++) {

      win[j] = k;
      k = k + ($scope.boardSize - 1);

    }

    $scope.wins[i] = win;

    callback($scope);


  };

  checkWin = function(brd, player) {
    //console.log(brd);
    //console.log($scope.maxWins);
    var i = 0;
    for (i = 0; i < $scope.maxWins; i++) {
      var winCount = 0;

      for (j = 0; j < $scope.boardSize; j++) {
        //  console.log(i,j,$scope.wins[i],player)
        if (brd[$scope.wins[i][j]] === player) {
          winCount++;
          //console.log(winCount);
        }

      }

      if (winCount === $scope.boardSize) {
        return true;
      }


    }

    return false;

  };

  winCounter = function(brd, player) {

    var i = 0;



    for (i = 0; i < $scope.maxWins; i++) {
      var winCount = 0;
      var j = 0;
      for (j = 0; j < $scope.boardSize; j++) {
        //console.log(i,j,$scope.wins[i],player,$scope.wins[i][j])
        if (brd[$scope.wins[i][j]] === player) {
          winCount++;

          if (winCount == ($scope.boardSize - 1)) {
            var k = 0;
            for (k = 0; k < $scope.boardSize; k++)
              if (brd[$scope.wins[i][k]] === $scope.empty)
                return $scope.wins[i][k];
          }

          //console.log(winCount);
        }

      }



    }

    return -1;


  };


  checkFull = function(brd) {

    var i = 0;
    for (i = 0; i < $scope.boardLength; i++) {
      if (brd[i] === $scope.empty) {
        //cosnole.log('in checkfull function')
        return false;

      }

    }
    //console.log('board full');
    return true;

  };

  endGame = function() {

    $scope.gamestart = true;

    for (j = 0; j < $scope.boardLength; j++) {
      if ($scope.board[j] === $scope.empty)
        $scope.state[j] = true;

    }

  };


  minMaxAI = function(brd, depth, player) {

    var max = -25000;
    var score = 0;
    var opponent;


    if (player === $scope.hPlayer)
      opponent = $scope.cPlayer;
    else
      opponent = $scope.hPlayer;

    if (checkWin(brd, opponent))
      return -$scope.score + depth;
    if (checkFull(brd)) {
      return 0;
    }

    var bestMove = 0;


    var i = 0;
    var limit = 0;

    var start = 0;
    var end = $scope.boardLength;

    var j = 0;
    var temparr = $scope.beststart[$scope.defaultSize - 3];
    //console.log($scope.board);


    for (j = 0; j < temparr.length; j++) {

      if ($scope.board[temparr[j]] === $scope.empty) {


        var pos = winCounter($scope.board, $scope.hPlayer);

        //console.log(pos);
        var intmove;
        if (pos != -1) {

          intmove = pos;
        } else {
          //console.log("in the if loop",temparr);
          intmove = temparr[j];
        }
        //console.log(intmove);
        $scope.board[intmove] = player;
        $scope.bClass[intmove] = $scope.bClass[bestMove] + ' computer';
        //($scope.state)
        $scope.state[intmove] = true;

        if (checkWin($scope.board, player)) {
          $scope.endMessage = "You lost the game! Try again.";

          endGame();
          return;
        }

        if (checkFull($scope.board)) {
          //console.log('came to draw')

          $scope.endMessage = "Game Draw!";
          endGame();
          return;
        }
        //console.log($scope.state)
        $scope.player = $scope.hPlayer;
        var k = 0;
        for (k = 0; k < $scope.boardLength; k++) {
          if ($scope.board[k] === $scope.empty)
            $scope.state[k] = false;

        }

        return;
      }
    }


    for (i = start; i < end; i++) {

      if (brd[i] === $scope.empty) {
        //console.log("inside if", i,brd, "board length" , $scope.boardLength);
        var newboard = brd.slice();
        newboard[i] = player;


        score = -(minMaxAI(newboard, depth + 1, opponent));

        if (score > max) {
          max = score;
          bestMove = i;
        }

      }
      limit++;
    }


    if (depth === 0) {

      $scope.board[bestMove] = player;
      $scope.bClass[bestMove] = $scope.bClass[bestMove] + ' computer';
      //($scope.state)
      $scope.state[bestMove] = true;
      //console.log($scope.state)
      $scope.player = $scope.hPlayer;



      var fbrd = $scope.board.slice();
      //console.log(fbrd);
      if (checkWin(fbrd, player)) {
        $scope.endMessage = "You lost the game! Try again.";

        endGame();
        return;
      }

      if (checkWin(fbrd, opponent)) {
        $scope.endMessage = "You won the game.";
        endGame();
        return;
      }

      if (checkFull(fbrd)) {
        //console.log('came to draw')

        $scope.endMessage = "Game Draw!";
        endGame();
        return;
      }

      for (j = 0; j < $scope.boardLength; j++) {
        if ($scope.board[j] === $scope.empty)
          $scope.state[j] = false;

      }
    }

    return max;

  };


  $scope.startGame = function() {

    var i = 0;
    for (i = 0; i < $scope.boardLength; i++) {

      if ($scope.board[i] === $scope.empty)
        $scope.state[i] = false;

    }
    //console.log($scope.state)

  };


  init($scope, $scope.defaultSize, function($scope) {



  });

  $scope.restartGame = function() {

    init($scope, $scope.defaultSize, function($scope) {



    });


  };

  $scope.playGame = function() {

    $scope.player = $scope.cPlayer;
    var player = $scope.player;

    var i = 0;
    for (i = 0; i < $scope.boardLength; i++) {
      $scope.state[i] = true;
    }
    //($scope.state);

    brd = $scope.board.slice();
    // console.log(brd);

    if (checkFull(brd)) {
      //console.log('came to draw')
      $scope.endMessage = "Game Draw!";
      endGame();
      return;
    } else if (checkWin(brd, $scope.hPlayer)) {
      $scope.endMessage = "You won the game.";
      endGame();
      return;
    } else {
      score = minMaxAI(brd, 0, player);
      // console.log(score);
    }

  };

}

app.component('board', {

  templateUrl: 'board.tpl',
  controller: boardController

});
