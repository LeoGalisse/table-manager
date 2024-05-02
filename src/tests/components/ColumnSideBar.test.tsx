import { render, fireEvent, screen } from '@testing-library/react'
import ColumnSideBar from '../../components/sidebar/column-sidebar/ColumnSideBar'
import { TableContext } from '../../context/TableContext'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'

const mockTableContext = {
  title: 'Mock Title',
  columns: [{ header: 'Column 1', isSelected: false, row: ['Row 1', 'Row 2'] }],
  activeColumn: 0,
  isSelected: false,
  isPreviewMode: false,
  columnsRef: { current: [] },
  updateColumnHeader: jest.fn(),
  updateRowContent: jest.fn(),
  moveColumn: jest.fn(),
  handleColumnSelection: jest.fn(),
  changeTitle: jest.fn(),
  changeSelected: jest.fn(),
  changeEditing: jest.fn(),
}

describe('ColumnSideBar', () => {
  beforeEach(() => {
    render(
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
          return typeof elementToBeRendered === 'string'
            ? isPropValid(propName)
            : true
        }}
      >
        <TableContext.Provider value={mockTableContext}>
          <ColumnSideBar />
        </TableContext.Provider>
      </StyleSheetManager>,
    )
  })

  it('renders without crashing', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('toggles dropdown visibility on button click', () => {
    expect(screen.getByLabelText('Column header')).not.toBeVisible()
    expect(screen.getByLabelText('Row content')).not.toBeVisible()

    fireEvent.click(screen.getByText('Visual'))

    expect(screen.getByLabelText('Column header')).toBeVisible()
    expect(screen.getByLabelText('Row content')).toBeVisible()
  })
})
