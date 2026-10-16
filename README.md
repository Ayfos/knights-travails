# Knights Travails

Solución al problema del **caballo de ajedrez** (Knights Travails), desarrollada como parte del currículo de [The Odin Project](https://www.theodinproject.com/).

## ¿Qué es el problema?

Un caballo de ajedrez se mueve en forma de "L": dos pasos en una dirección y uno en perpendicular. Desde cualquier casilla, tiene 8 movimientos posibles:

```
     +2
  +1
        [x,y]
  -1
     -2
```

El problema consiste en encontrar **la ruta más corta** que puede hacer el caballo desde una casilla de inicio hasta una casilla de destino en un tablero de **8x8**.

## ¿Por qué es un problema de grafos?

- Cada **casilla** del tablero es un **nodo**.
- Cada **movimiento válido** del caballo es una **arista**.
- Buscar la ruta más corta = **BFS** (búsqueda en anchura).

Se usa **BFS** porque explora por niveles, garantizando que la primera vez que se llega al destino, se ha llegado por el camino más corto. DFS podría quedar atrapado en ciclos infinitos.

## Estructura del proyecto

- `knightMoves.js` — Función principal `knightMoves(start, end)`.
- `main.js` — Pruebas y formato de salida bonito.
- `package.json` — Configuración para módulos ES6.

## Cómo funciona

### Los 8 movimientos del caballo

```javascript
const MOVES = [
    [2, 1], [2, -1],
    [-2, 1], [-2, -1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2]
];
```

### Algoritmo BFS

1. La **cola** empieza con un camino que solo contiene la posición inicial: `[[start]]`.
2. Mientras la cola tenga elementos:
   - Se saca el primer camino.
   - Si su última posición es el **destino** → devolver el camino.
   - Si no, se generan los 8 movimientos posibles y se filtran los que salgan del tablero.
   - Para cada movimiento válido, se añade un **nuevo camino** a la cola.
3. El primer camino que llegue al destino es el **más corto** (gracias a BFS).

## Cómo ejecutar

```bash
node main.js
```

## Ejemplo de uso

```javascript
import { knightMoves } from "./knightMoves.js";

const path = knightMoves([0, 0], [7, 7]);
console.log(path);
// [
//   [0,0], [2,1], [4,2], [6,3], [4,4], [6,5], [7,7]
// ]
```

## Salida del script

```
> knightMoves([0,0],[1,2])
=> You made it in 1 moves! Here's your path:
  [0,0]
  [1,2]

> knightMoves([0,0],[7,7])
=> You made it in 6 moves! Here's your path:
  [0,0]
  [2,1]
  [4,2]
  [6,3]
  [4,4]
  [6,5]
  [7,7]
```

## Aprendizajes

- Representación de grafos implícitos (sin crear objetos de vértices y aristas).
- Búsqueda en anchura (BFS) con cola.
- Uso de `shift()` y `push()` para gestionar una cola.
- Guardado del camino completo en cada elemento de la cola.
- Uso de spread (`[...path, next]`) para no modificar arrays compartidos.
- Validación de movimientos dentro del tablero.

## Recursos

- [The Odin Project - Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails)
- [Khan Academy - Graphs](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs)