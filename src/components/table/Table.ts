import styled from 'styled-components'

export const Container = styled.main<{
  isSelected: boolean
  length: number
  isPreviewMode: boolean
}>`
  display: grid;
  position: absolute;
  grid-template-columns: ${({ length }) =>
    length < 6 ? 'repeat(8, 100px)' : `repeat(${length + 2}, 150px)`};
  grid-template-rows: ${({ isPreviewMode }) =>
    isPreviewMode ? '60px 6fr' : '50px 6fr 50px'};

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

export const Nav = styled.nav<{ length: number; isPreviewMode: boolean }>`
  ${({ length, isPreviewMode }) =>
    length < 6
      ? `grid-column: span ${isPreviewMode === false ? 7 : 8}`
      : `grid-column: span ${isPreviewMode === false ? length + 1 : length + 2}`};
  display: flex;
`
export const Section = styled.section<{ isPreviewMode: boolean }>`
  ${({ isPreviewMode }) => isPreviewMode === false && 'grid-column: span 1'};
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
