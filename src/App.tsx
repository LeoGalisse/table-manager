import { Container } from './App'
import ColumnSideBar from './components/sidebar/column-sidebar/ColumnSideBar.tsx'
import Table from './components/table/Table.tsx'

export default function App() {
  return (
    <Container>
      <Table />
      <ColumnSideBar />
    </Container>
  )
}
