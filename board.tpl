  <h3 align="center"> Choose Board </h3> 
  <div align="center">
  <button ng-click="defaultSize=3;restartGame()" class="boardSize"> 3x3</button>
	  <button ng-click="defaultSize=4;restartGame()" class="boardSize">4x4</button>
	  <button ng-click="defaultSize=5;restartGame()" class="boardSize">5x5</button>
  </div>
  <div align="center">
	  
  <h2> {{endMessage}} </h2>
  
 	
	
 <div ng-show="player===cPlayer && gamestart===true" >
 Computer Playing 
 </div>
 <div ng-show="player===hPlayer && gamestart===true" >
 Play your turn <b style="font-size:24px"> {{player}} </b>
 </div>	
 
  <br>
  <div ng-repeat="j in rows">
 
  <span ng-repeat="i in rows">
  	  
  <button  ng-bind="board[i+(j*boardSize)]" class={{bClass[i+(j*boardSize)]}} ng-click='board[i+(j*boardSize)]=player;state[i+(j*boardSize)]=true;bClass[i+(j*boardSize)] = bClass[i+(j*boardSize)] + " human";playGame()' ng-disabled="state[i+(j*boardSize)]">
 </button>

 </span>
  <br>

  </div>

  <br>

  
  
  <div>
  <button ng-click="player=cPlayer;gamestart=true;playGame();" ng-disabled="gamestart" class="toolbar">
  Computer First
  </button>
  <button ng-click="player=hPlayer;gamestart=true;startGame()" ng-disabled="gamestart" class="toolbar">
  Human First
  </button>
  
  <button ng-click="restartGame()" class="toolbar">Restart Game  </button>   
