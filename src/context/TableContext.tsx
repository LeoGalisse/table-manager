import {
  ChangeEvent,
  ReactNode,
  createContext,
  useCallback,
  useRef,
  useState,
} from 'react'

type Operation = 'left' | 'right'

interface Column {
  header: string
  isSelected: boolean
  row: string[]
}

interface TableContextType {
  title: string
  columns: Column[]
  activeColumn: number | null
  isSelected: boolean
  updateColumnHeader?: (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void
  updateRowContent?: (
    event: ChangeEvent<HTMLInputElement>,
    columnIndex: number,
    rowIndex: number,
  ) => void
  addColumn?: () => void
  addRow?: () => void
  moveColumn?: (index: number, operation: Operation) => void
  handleColumnSelection?: (event: MouseEvent, index: number) => void
  changeTitle: (newTitle: string) => void
}

interface TableProviderProps {
  children: ReactNode
}

export const TableContext = createContext({} as TableContextType)

export function TableProvider({ children }: TableProviderProps) {
  const [columns, setColumns] = useState<Column[]>([
    { header: 'Column 1', isSelected: false, row: [] },
  ])
  const [title, setTitle] = useState('Dynamic Table #1')
  const [activeColumn, setActiveColumn] = useState<number | null>(null)
  const columnsRef = useRef<Array<HTMLDivElement | null>>([])

  const updateColumnHeader = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, index: number) => {
      const newColumns = [...columns]

      newColumns[index].header = event.target.value

      setColumns(newColumns)
    },
    [columns],
  )

  const updateRowContent = useCallback(
    async (
      event: ChangeEvent<HTMLInputElement>,
      columnIndex: number,
      rowIndex: number,
    ) => {
      const newColumns = [...columns]

      newColumns[columnIndex].row[rowIndex] = event.target.value

      setColumns(newColumns)
    },
    [columns],
  )

  const addColumn = useCallback(async () => {
    const newColumns = [...columns]

    newColumns.push({
      header: `Column ${columns.length + 1}`,
      isSelected: false,
      row: [],
    })

    setColumns(newColumns)
  }, [columns])

  const addRow = useCallback(async () => {
    const newColumns = [...columns]

    newColumns.forEach((column) => {
      column.row.push('')
    })

    setColumns(newColumns)
  }, [columns])

  const moveColumn = useCallback(
    async (index: number, operation: Operation) => {
      if (operation === 'left' && index === 0) {
        return
      }

      if (operation === 'right' && index === columns.length - 1) {
        return
      }

      const newColumns = [...columns]
      const temp = newColumns[index]

      newColumns[index] = newColumns[index + (operation === 'left' ? -1 : 1)]
      newColumns[index + (operation === 'left' ? -1 : 1)] = temp

      setActiveColumn(index + (operation === 'left' ? -1 : 1))

      setColumns(newColumns)
    },
    [columns],
  )

  const handleColumnSelection = useCallback(
    async (event: MouseEvent, index: number) => {
      if (
        columnsRef.current[index] &&
        columnsRef.current[index]!.contains(event.target as Node)
      ) {
        return
      }

      const newColumns = [...columns]

      if (activeColumn !== null && activeColumn === index) {
        newColumns[index].isSelected = false
        setActiveColumn(null)
      } else {
        if (activeColumn !== null) {
          newColumns[activeColumn].isSelected = false
        }

        newColumns[index].isSelected = true
        setActiveColumn(index)
      }

      setColumns(newColumns)
    },
    [activeColumn, columns],
  )

  const changeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle)
  }, [])

  return (
    <TableContext.Provider
      value={{
        title,
        columns,
        activeColumn,
        isSelected: false,
        updateColumnHeader,
        updateRowContent,
        addColumn,
        addRow,
        moveColumn,
        handleColumnSelection,
        changeTitle,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
