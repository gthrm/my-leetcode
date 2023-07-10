const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]; // true

const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]; // false

const board3 = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
]; // false

// function checkColumn(board, index) {
//   const row = [];
//   let columnIndex = 0;
//   while (columnIndex < 9) {
//     const item = board[columnIndex][index];
//     if (item !== divide) {
//       if (row.includes(item)) {
//         return false;
//       }
//       row[columnIndex] = item;
//     }

//     columnIndex++;
//   }
//   return true;
// }

// function checkRow(board, index, parts) {
//   const row = board[index];
//   const map = {};
//   for (let i = 0; i < row.length; i++) {
//     const yBox = i < 3 ? 0 : i < 6 ? 1 : 2;
//     const xBox = index < 3 ? 0 : index < 6 ? 1 : 2;
//     const partsIndex = yBox * 3 + xBox;
//     const element = row[i];
//     if (element !== divide) {
//       if (parts[partsIndex].includes(element)) {
//         return false;
//       }
//       parts[partsIndex].push(element);
//       if (map[element]) {
//         return false;
//       }
//       map[element] = element;
//     }
//   }
//   return true;
// }
// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//   const parts = new Array(9).fill(true).map(() => []);
//   for (let index = 0; index < board.length; index++) {
//     const row = checkRow(board, index, parts);

//     const column = checkColumn(board, index);

//     if (!row || !column) {
//       return false;
//     }
//   }
//   return true;
// };

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const divide = '.';
  const boxesHash = Array.from(new Array(9), () => new Array());
  const columnsHash = Array.from(new Array(9), () => new Array());
  const rowsHash = Array.from(new Array(9), () => new Array());
  for (let index = 0; index < board.length; index++) {
    const row = board[index];
    const yBoxIndex = index < 3 ? 0 : index < 6 ? 1 : 2;
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const item = row[columnIndex];
      if (item !== divide) {
        const xBoxIndex = columnIndex < 3 ? 0 : columnIndex < 6 ? 1 : 2;
        const boxIndex = yBoxIndex * 3 + xBoxIndex;
        if (rowsHash[index][item]) {
          return false;
        }
        rowsHash[index][item] = true;

        if (columnsHash[columnIndex][item]) {
          return false;
        }
        columnsHash[columnIndex][item] = true;

        if (boxesHash[boxIndex][item]) {
          return false;
        }
        boxesHash[boxIndex][item] = true;
      }
    }
  }
  return true;
};

console.log(isValidSudoku(board1), 'true');
console.log(isValidSudoku(board2), 'false');
console.log(isValidSudoku(board3), 'false');
