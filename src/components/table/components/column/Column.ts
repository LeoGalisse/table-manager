import styled from 'styled-components'

export const Container = styled.div<{ isSelected: boolean }>`
  position: relative;
  flex: 1;

  background-color: ${({ isSelected }) => (isSelected ? '#93c5fd' : 'white')};
  border-radius: 0 0 8px 8px;

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
