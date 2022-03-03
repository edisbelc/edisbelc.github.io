import {useState} from "react";
import {Casilla, Fila, Pieza, Tablero} from "./board-styled";

function Board({}) {
    const [board, setBoard] = useState([
        [0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ])

    function obtenerColor(x, y) {
        if (x % 2 === 0 && y % 2 === 0) return "blanco";
        if (x % 2 === 0 && y % 2 !== 0) return "negro";
        if (x % 2 !== 0 && y % 2 === 0) return "negro";
        if (x % 2 !== 0 && y % 2 !== 0) return "blanco";
    }

    function crearCasillas() {
        let casillas = []
        for (let y = 0; y < 8; y++) {
            let fila = []
            for (let x = 0; x < 8; x++) {
                fila.push(
                    <Casilla className={obtenerColor(x, y)}>{
                        board[y][x] !== 0 &&
                        <Pieza className={'jugador'+board[y][x]}/>
                    }</Casilla>)
            }
            casillas.push(fila)
        }
        return casillas
    }

    return <Tablero>
        {crearCasillas().map(fila =>
            <Fila>{fila}</Fila>
        )}
    </Tablero>
}

export default Board