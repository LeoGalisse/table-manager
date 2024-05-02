import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useContext } from 'react'
import { TableContext } from '../../../../context/TableContext'
import {
  TRow,
  TableContainer,
  Container,
  THeader,
  ButtonContainer,
  Button,
  TData,
} from './Column'

interface ColumnProps {
  column: {
    header: string
    row: string[]
    isSelected: boolean
  }
  index: number
}

export default function Column({ column, index }: ColumnProps) {
  const table = useContext(TableContext)

  return (
    <Container
      isSelected={column.isSelected}
      onClick={(event) => table.handleColumnSelection(event, index)}
    >
      <TableContainer>
        <thead>
          <TRow isSelected={column.isSelected} index={index}>
            <THeader isSelected={column.isSelected}>
              {column.header}
              <ButtonContainer
                isSelected={column.isSelected}
                ref={(el) => (table.columnsRef.current[index] = el)}
              >
                <Button
                  hidden={table.isPreviewMode}
                  orientation="left"
                  onClick={() => table.moveColumn(index, 'left')}
                >
                  <ArrowLeft size={12} />
                </Button>
                <Button
                  hidden={table.isPreviewMode}
                  orientation="right"
                  onClick={() => table.moveColumn(index, 'right')}
                >
                  <ArrowRight size={12} />
                </Button>
              </ButtonContainer>
            </THeader>
          </TRow>
        </thead>
        <tbody>
          {column.row.map((row, index) => {
            return (
              <TRow key={index} isSelected={column.isSelected}>
                <TData isSelected={column.isSelected}>{row}</TData>
              </TRow>
            )
          })}
        </tbody>
      </TableContainer>
    </Container>
  )
}
