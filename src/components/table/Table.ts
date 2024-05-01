import styled from 'styled-components'

export const Container = styled.main<{ isSelected: boolean; length: number }>`
  display: grid;
  position: absolute;
  grid-template-columns: ${({ length }) =>
    length < 6 ? 'repeat(8, 100px)' : `repeat(${length + 2}, 150px)`};
  grid-template-rows: 50px 6fr 50px;

  min-height: 300px;
  outline: ${({ isSelected }) => (isSelected ? '4px solid #cbd5e1' : 'none')};
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`

export const Header = styled.header<{ length: number }>`
  display: flex;
  ${({ length }) =>
    length < 6 ? 'grid-column: span 8' : `grid-column: span ${length + 2}`};
  align-items: center;

  padding: 0 8px;
  border-radius: 8px 8px 0 0;
  background-color: white;
`

export const Nav = styled.nav<{ length: number }>`
  ${({ length }) =>
    length < 6 ? 'grid-column: span 7' : `grid-column: span ${length + 1}`};
  display: flex;
`

export const Column = styled.div<{ isSelected: boolean }>`
  position: relative;
  flex: 1;

  background-color: ${({ isSelected }) => (isSelected ? '#93c5fd' : 'white')};

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#93c5fd' : '#f1f5f9'};
  }
`

export const TableContainer = styled.table`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TRow = styled.tr<{ isSelected: boolean; index?: number }>`
  display: flex;
  width: 100%;

  background-color: ${({ isSelected }) => (isSelected ? '#60a5fa' : '#e2e8f0')};
  border-left: ${({ index }) =>
    index && index !== 0 ? '1px solid #cbd5e1' : 'none'};
`

export const THeader = styled.th<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 4px 8px;
  background-color: ${({ isSelected }) => (isSelected ? '#60a5fa' : '#e2e8f0')};
`

export const ButtonContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;

  padding: 4px;
  visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
`

export const Button = styled.button<{ orientation: 'left' | 'right' }>`
  border: none;
  cursor: pointer;
  background-color: #cbd5e1;

  padding: 4px;
  border-radius: ${({ orientation }) =>
    orientation === 'left' ? '4px 0 0 4px' : '0 4px 4px 0'};
`

export const TData = styled.td<{ isSelected: boolean }>`
  width: 100%;
  height: 20px;
  padding: 0 8px;
  border: ${({ isSelected }) =>
    isSelected ? '1px solid #60a5fa' : '1px solid #e2e8f0'};

  background-color: white;
`

export const Section = styled.section`
  grid-column: span 1;
  display: flex;
`

export const AddColumnButton = styled.button`
  border: none;
  cursor: pointer;
  flex: 1;

  border-bottom: 2px solid #e2e8f0;
`

export const Footer = styled.footer<{ length: number }>`
  ${({ length }) =>
    length < 6 ? 'grid-column: span 8' : `grid-column: span ${length + 2}`};
  display: flex;
`

export const AddRowButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
`
