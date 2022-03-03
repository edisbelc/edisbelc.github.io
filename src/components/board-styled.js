import imgPieza from "./assets/pieces.jpg"
import styled from "styled-components";

export const Tablero = styled.div`
  position: relative;
  display: block;
  background-color: #ffffff;
  padding: 40px;
`
export const Fila = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  height: 50px;
`

export const Casilla = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
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
  width: 46px;
  height: 46px;
  background-size: 114px 114px;
  background-position: -7px -7px;
  border-radius: 50%;

  &.jugador1 {
    background-position: 54px -7px;
  }
  &.jugador2 {
    background-position: -7px 54px;
  }
`