import imgPieza from "./assets/pieces.jpg"
import styled from "styled-components";

export const Tablero = styled.div`
  position: relative;
  display: block;
  background-color: #ffffff;
  padding-top: 20px;
`
export const Fila = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  height: 40px;
`

export const Casilla = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0;

  &.blanco {
    background-color: antiquewhite;
  }

  &.negro {
    background-color: cadetblue;
  }

`
export const Pieza = styled.div`
  position: absolute;
  display: inline-block;
  background-image: url(${imgPieza});
  left: 2px;
  top: 2px;
  width: 36px;
  height: 36px;
  background-size: 90px 90px;
  background-position: -3px -3px;
  border-radius: 50%;

  &.jugador1 {
    background-position: 42px -6px;
  }
  &.jugador2 {
    background-position: -6px 42px;
  }
`