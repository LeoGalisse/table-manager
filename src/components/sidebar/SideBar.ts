import styled from 'styled-components'

export const Aside = styled.aside`
  grid-column-start: 5;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  width: 100%;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    grid-column-start: 4;
    grid-column: span 2;
  }
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 12px;
  border-bottom: 1px solid rgb(148, 163, 184, 0.4);
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  all: unset;
  cursor: pointer;

  background-color: #eee;
  color: #444;

  padding: 18px;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.div`
  display: flex;
  gap: 8px;

  small {
    word-break: break-all;
  }
`

export const Dropdown = styled.div<{ isClicked: boolean }>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  flex-direction: column;
  overflow: hidden;

  background-color: white;
  padding: 8px 16px;
  gap: 2px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  text-decoration: dashed underline;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #444;
  }
`
