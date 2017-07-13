
<div align="center">
<div ng-repeat="i in rows">
<span ng-repeat="j in rows">
<button ng-bind="board[i+(j*boardSize)]" class="board">
</button>
</span>  
<br>  
</div>
</div>
