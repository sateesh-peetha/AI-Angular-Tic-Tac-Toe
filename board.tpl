<div align="center">
<div ng-repeat="i in rows">
<span ng-repeat="j in rows">
<button ng-bind="board[i+(j*boardSize)]" class={{bClass[i+(j*boardSize)]}} ng-click='board[i+(j*boardSize)]=player;state[i+(j*boardSize)]=false;playGame(this);' ng-disabled="state[i+(j*boardSize)]">
</button>
</span>  
<br>

</div>

<br>
<br>

<table>
<td>
<button ng-click="player=cPlayer;gamestart=true;playGame();" ng-disabled="gamestart">
Computer First
</button>
</td>
<td>

<div ng-show="player===cPlayer" >
Computer Playing
</div>

<div ng-show="player===hPlayer" >
Play your turn
</div>

</td>
<td>
<button ng-click="player=hPlayer;gamestart=true;startGame()" ng-disabled="gamestart">
Human First
</button>
</td>
</table>

</div>
