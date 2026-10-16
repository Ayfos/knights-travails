import { knightMoves } from "./knightMoves.js";

function printPath(start, end) {
    const path = knightMoves(start, end);
    const moves = path.length - 1;
    console.log(`> knightMoves([${start}],[${end}])`);
    console.log(`=> You made it in ${moves} moves! Here's your path:`);
    for (const pos of path) {
        console.log(`  [${pos}]`);
    }
    console.log("");
}

// Pruebas
printPath([0, 0], [1, 2]);
printPath([0, 0], [3, 3]);
printPath([3, 3], [0, 0]);
printPath([0, 0], [7, 7]);
printPath([3, 3], [4, 3]);   