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
  isPreviewMode: boolean
  columnsRef: React.MutableRefObject<Array<HTMLDivElement | null>>
  updateColumnHeader: (event: ChangeEvent<HTMLInputElement>) => void
  updateRowContent: (
    event: ChangeEvent<HTMLInputElement>,
    rowIndex: number,
  ) => void
  addColumn?: () => void
  addRow?: () => void
  moveColumn: (index: number, operation: Operation) => void
  handleColumnSelection: (event: React.MouseEvent, index: number) => void
  changeTitle: (newTitle: string) => void
  changeSelected: (selected: boolean) => void
  changeEditing: (editing: boolean) => void
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
  const [isSelected, setIsSelected] = useState(false)
  const [isPreviewMode, setisPreviewMode] = useState(false)
  const columnsRef = useRef<Array<HTMLDivElement | null>>([])

  const updateColumnHeader = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (activeColumn === null) {
        return
      }

      const newColumns = [...columns]

      newColumns[activeColumn].header = event.target.value

      setColumns(newColumns)
    },
    [columns, activeColumn],
  )

  const updateRowContent = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, rowIndex: number) => {
      if (activeColumn === null) {
        return
      }

      const newColumns = [...columns]

      newColumns[activeColumn].row[rowIndex] = event.target.value

      setColumns(newColumns)
    },
    [columns, activeColumn],
  )

  const addColumn = useCallback(async () => {
    const newColumns = [...columns]

    newColumns.push({
      header: `Column ${columns.length + 1}`,
      isSelected: false,
      row: columns[0].row.map(() => ''),
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
    async (event: React.MouseEvent, index: number) => {
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

  const changeSelected = useCallback((selected: boolean) => {
    setIsSelected(selected)
  }, [])

  const changeEditing = useCallback((editing: boolean) => {
    setisPreviewMode(editing)
  }, [])

  return (
    <TableContext.Provider
      value={{
        title,
        columns,
        activeColumn,
        isSelected,
        isPreviewMode,
        columnsRef,
        updateColumnHeader,
        updateRowContent,
        addColumn,
        addRow,
        moveColumn,
        handleColumnSelection,
        changeTitle,
        changeSelected,
        changeEditing,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
