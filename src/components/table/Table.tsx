import { useContext } from 'react'
import { TableContext } from '../../context/TableContext'
import {
  TRow,
  TableContainer,
  Container,
  Header,
  Column,
  Nav,
  THeader,
  ButtonContainer,
  Button,
  TData,
  Section,
  AddColumnButton,
  Footer,
} from './Table'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Table() {
  const table = useContext(TableContext)

  return (
    <Container isSelected={table.isSelected} length={table.columns.length}>
      <Header length={table.columns.length}>{table.title}</Header>
      <Nav length={table.columns.length}>
        {table.columns.map((column, index) => {
          return (
            <Column
              key={index}
              isSelected={column.isSelected}
              onClick={(event) => table.handleColumnSelection(event, index)}
            >
              <TableContainer>
                <TRow isSelected={column.isSelected} index={index}>
                  <THeader isSelected={column.isSelected}>
                    {column.header}
                    <ButtonContainer
                      isSelected={column.isSelected}
                      ref={(el) => (table.columnsRef.current[index] = el)}
                    >
                      <Button
                        orientation="left"
                        onClick={() => table.moveColumn(index, 'left')}
                      >
                        <ArrowLeft size={12} />
                      </Button>
                      <Button
                        orientation="right"
                        onClick={() => table.moveColumn(index, 'right')}
                      >
                        <ArrowRight size={12} />
                      </Button>
                    </ButtonContainer>
                  </THeader>
                </TRow>
                {column.row.map((row, index) => {
                  return (
                    <TRow key={index} isSelected={column.isSelected}>
                      <TData isSelected={column.isSelected}>{row}</TData>
                    </TRow>
                  )
                })}
              </TableContainer>
            </Column>
          )
        })}
      </Nav>
      <Section>
        <AddColumnButton onClick={table.addColumn}>Add column</AddColumnButton>
      </Section>
      <Footer length={table.columns.length}>
        <AddColumnButton onClick={table.addRow}>Add row</AddColumnButton>
      </Footer>
    </Container>
  )
}
