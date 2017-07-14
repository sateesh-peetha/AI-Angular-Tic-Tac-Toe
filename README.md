# AI Powered Tic-Tac-Toe Game using minmax alogrithm. Uses AngularJS for rendering board.

#### Supports 3x3,4x4,5x5 boards due to limitations on client side computing power and cost of execution.

For example just 3x3 board needs minimum 9!(factorial approximately 3,68,000 ) function calls to calculate best move for every iteration. It just goes exponentially as the board size goes up. added some tweaks for boards 4x4 and 5x5 just to boost performance. otherwise clientside page will hang due to out of memory. There is scope for imrovement in the 4x4 and 5x5 board due to added tweaks. Will fix it in due course.


#### Breif overview of minmax algorithm.

It iterates through all the available moves that a computer can play and recursively plays as computer and human till either of the wins or game draws. Score is calculated for each end state, that is either computer wins or human player wins or game is draw. Eliminate all the moves that will maximize the opponent chances of winning.


Checkout the livedemo here : https://sateeshpeetha.github.io/Tic-Tac-Toe-/

#### Algorithm screen shots


#### App sample screenshots

<img src="https://sateeshpeetha.github.io/Tic-Tac-Toe-/tictactoeimage1.jpg">
</img>


<img src="https://sateeshpeetha.github.io/Tic-Tac-Toe-/tictactoeimage2.jpg">
</img>


