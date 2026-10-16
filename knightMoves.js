// Los 8 movimientos prosibles del caballo de ajedrez

const MOVES = [
    [2, 1], [2, -1],
    [-2, 1], [-2, -1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2]

];

// Comprobar si una posición está dentro del tablero

function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

//Función principal: entrar el camino más corto

function knightMoves(start, end) {
    // La cola empieza con un camino que solo contiene la posición inicial
    const queue = [[start]];

    while (queue.length >0) {
        // sacar el primer camino de la cola
        const path = queue.shift();

        // La posición actual es la última del camino
        const current = path[path.length -1];

        // ¿ Hemos llegado al destino? 
        if (current[0] === end[0] && current[1] === end[1]) {
            return path;
        }

        // Generar los 8 movimientos posibles desde aquí
        for (const [dx, dy] of MOVES) {
            const next = [current[0] + dx, current[1] + dy];

            if (isValid(next)) {
                // Crear un nuevo camino con la nueva posición añadida
                queue.push([...path, next]);
            }
        }
    }

    //Si no se encuentra ( no debería pasar en un tablero 8x8)
    return null;

}
export { knightMoves };
