import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-isBoxedPrimitive;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  backfround-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 90%;
`

export default EstiloGlobal
