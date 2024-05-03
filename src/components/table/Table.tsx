import { useContext } from 'react'
import { TableContext } from '../../context/TableContext'
import {
  Container,
  Header,
  Nav,
  Section,
  AddColumnButton,
  Footer,
  AddRowButton,
} from './Table'
import Column from './components/column/Column.tsx'

export default function Table() {
  const table = useContext(TableContext)

  return (
    <Container
      isPreviewMode={table.isPreviewMode}
      isSelected={table.isSelected}
      length={table.columns.length}
    >
      <Header length={table.columns.length}>{table.title}</Header>
      <Nav isPreviewMode={table.isPreviewMode} length={table.columns.length}>
        {table.columns.map((column, index) => {
          return <Column key={index} column={column} index={index} />
        })}
      </Nav>
      <Section isPreviewMode={table.isPreviewMode}>
        <AddColumnButton hidden={table.isPreviewMode} onClick={table.addColumn}>
          Add column
        </AddColumnButton>
      </Section>
      <Footer length={table.columns.length}>
        <AddRowButton hidden={table.isPreviewMode} onClick={table.addRow}>
          Add row
        </AddRowButton>
      </Footer>
    </Container>
  )
}
