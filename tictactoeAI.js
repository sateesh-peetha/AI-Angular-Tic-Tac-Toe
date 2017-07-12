var app = angular.module('tictactoe', []);

function boardController($scope) {
  
  
  $scope.boardSize = 3;
  $scope.boardLength = $scope.boardSize * $scope.boardSize;
  
  $scope.maxWins =  $scope.boardSize + $scope.boardSize + 2;
    
  $scope.board = [];
  $scope.wins = {};
  
  $scope.player = "x";
  $scope.hPlayer = "x";
  $scope.cPlayer = "c";
 
  //init board
  
  for(i=0;i<$scope.boardLength;i++) {
    
    board[i] = i;
    
  }
  

  
}


app.component('board', {

  templateUrl: 'board.tpl',
  controller: boardController

});
