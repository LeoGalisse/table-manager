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

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  padding: 8px 24px;
  border-radius: 8px;
  gap: 12px;

  left: 40%;
  top: 1%;
`

export const Toggle = styled.div<{ isClicked: boolean }>`
  position: relative;
  width: 60px;
  border-radius: 8px;
  background-color: ${({ isClicked }) => (isClicked ? '#22c55e' : ' #cbd5e1')};
  cursor: pointer;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DialogButton = styled.div<{ isClicked: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;

  background-color: white;
  width: 25px;
  height: 16px;
  top: 10%;
  left: ${({ isClicked }) => (isClicked ? '53%' : '4%')};
  border-radius: 8px;
  transition: all 0.3s ease;
`

export const InnerContainer = styled.div`
  overflow: scroll;
  width: auto;
  grid-column: span 4;
  position: relative;

  @media (max-width: 1024px) {
    grid-column: span 3;
  }
`

export const Drag = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;

  cursor: grab;
`
