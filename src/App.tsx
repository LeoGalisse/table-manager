import { useContext, useState } from 'react'
import { Container, Drag } from './App'
import ColumnSideBar from './components/sidebar/column-sidebar/ColumnSideBar.tsx'
import Table from './components/table/Table.tsx'
import { TableContext } from './context/TableContext.tsx'

export default function App() {
  const [containerPosition, setContainerPosition] = useState({ x: 100, y: 200 })
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const table = useContext(TableContext)

  const handleDragStart = (event: React.DragEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()

    setMouseOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const handleDragEnd = (event: React.DragEvent) => {
    event.preventDefault()
    setContainerPosition({
      x: event.clientX - mouseOffset.x,
      y: event.clientY - mouseOffset.y,
    })

    table.changeSelected(true)
  }

  const handleClickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      table.changeSelected(false)
    }
  }

  return (
    <Container onClick={handleClickOutside}>
      <Drag
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={() => table.changeSelected(!table.isSelected)}
        x={containerPosition.x}
        y={containerPosition.y}
      >
        <Table />
      </Drag>
      <ColumnSideBar />
    </Container>
  )
}
