import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: end;

  height: 100vh;
  width: 100vw;
  background-color: #f1f5f9;

  background-image: radial-gradient(#cbd5e1 20%, transparent 20%),
    radial-gradient(#cbd5e1 20%, transparent 20%);
  background-position:
    0 0,
    50px 50px;
  background-size: 10px 10px;
`
