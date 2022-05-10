let cells = document.querySelectorAll('.cell')
let results = document.querySelector('.result')
cells = Array.from(cells)

let currentPlayer = 'X'

let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkForWinner (){
  winningCombination.forEach(function(combination){
    let check = combination.every(index =>  cells[index].innerText.trim() == currentPlayer)
    if(check == true ){
      document.querySelector('.result').innerHTML = `Winner: Player ${currentPlayer}`
    }else{
      return
    }
  })
}

cells.forEach(function(cell){
  cell.addEventListener('click', function(){
    if(cell.innerText.trim() == ''){
      cell.innerText = currentPlayer;
      checkForWinner()
      currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    }else{
      return
    }
    
  })
}
)


// class Game{
//   constructor(currentPlayer, nextPlayer){
//     this._currentPlayer = currentPlayer
//     this._nextPlayer = nextPlayer
  
//   }
//   get currentPlayer(){
//     return this._currentPlayer
//   }
//   get nexttPlayer(){
//     return this._nextPlayer
//   }
//   checkForWinner (){
//     winningCombination.forEach(function(combination){
//       let check = combination.every(index =>  cells[index].innerText.trim() == currentPlayer)
//       if(check == true ){
//         document.querySelector('.result').innerHTML = `Winner: Player ${currentPlayer}`
//       }else{
//         return
//       }
//     })
    
//     cells.forEach(function(cell){
//       cell.addEventListener('click', function(){
//         if(cell.innerText.trim() == ''){
//           cell.innerText = currentPlayer;
//           checkForWinner()
//           currentPlayer = currentPlayer == this._currentPlayer ? this._nextPlayer : this._currentPlayer
//         }else{
//           return
//         }
        
//       })
//     }
//     )
  
  
//   }

// }

// let game = new Game('X', 'O')