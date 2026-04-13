// This was my attempt at the checkState function in the js-exercises folder. Mine is very long winded compared to the solution. Mine also doesn't work.

function checkState(board) {
  // Your implementation here

  // Check if all elements are ''
  const allEqual = board => board.every(val => val === '');

  if (allEqual) {
    return 'X to play';
  }

  // If there is one more 'X' than '0', return '0 to play'
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < board.length; i++)
  {
    if (board[i] === 'X') {
      xCount++;
    } else {
      oCount++;
    }
  }

  if (xCount > oCount) {
    return 'O to play'
  }

  // If there are three 'X's or 'O's in a row, a column, or diagonally, return 'X wins' or 'O wins' respectively.

  // Column check

  let firstColCount = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = i + 3; j < board.length; j++) {
      if (board[i] === board[j]) {
        firstColCount++;
      }
    }
    let temp;
    temp = j;
    i = temp;
    j = j + 3;
  }

  if (firstColCount === 3) {
    return `${board[0]} wins`
  }
 
  let secondColCount = 0;

  for (let i = 1; i < board.length; i++) {
    for (let j = i + 3; j < board.length; j++) {
      if (board[i] === board[j]) {
        secondColCount++;
      }
    }
    let temp;
    temp = j;
    i = temp;
    j = j + 3;
  }

  if (secondColCount === 3) {
    return `${board[1]} wins`
  }


  let thirdColCount = 0;

  for (let i = 2; i < board.length; i++) {
    for (let j = i + 3; j < board.length; j++) {
      if (board[i] === board[j]) {
        thirdColCount++;
      }
    }
    let temp;
    temp = j;
    i = temp;
    j = j + 3;
  }

  if (thirdColCount === 3) {
    return `${board[2]} wins`
  }

  // Diagonal check

  // Top-left to bottom-right diagonal

  let firstDiagonal = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = i + 4; j < board.length; j++) {
      if (board[i] === board[j]) {
        firstDiagonal++;
      }
    }

    let temp;
    temp = j;
    i = temp;
    j = j + 4;
  }

  if (firstDiagonal === 3) {
    return `${board[0]} wins`
  }

  // Top-right to bottom-left diagonal

  let secondDiagonal = 0;

  for (let i = 2; i < board.length; i++) {
    for (let j = i + 2; j < board.length; j++) {
      if (board[i] === board[j]) {
        secondDiagonal++;
      }
    }

    let temp;
    temp = j;
    i = temp;
    j = j + 2;
  }

  if (secondDiagonal === 3) {
    return `${board[2]} wins`
  }

  // If all 9 cells are filled and there's no winner, return 'It is a tie'.

  const allFull = board.every(item => typeof item === 'string' && item.length === 1);

  if (allFull && firstColCount < 3 && secondColCount < 3 && thirdColCount < 3 && firstDiagonal < 3 && secondDiagonal < 3) {
    return 'It is a tie';
  }


}