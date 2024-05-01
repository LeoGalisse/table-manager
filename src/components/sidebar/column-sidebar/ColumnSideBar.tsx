import { Fragment, useContext, useState } from 'react'
import {
  Aside,
  Button,
  Dropdown,
  Header,
  Input,
  Label,
  Nav,
  Text,
} from '../SideBar'
import { ChevronUp, ChevronDown, Eye } from 'lucide-react'
import { TableContext } from '../../../context/TableContext'
import TableSideBar from '../table-sidebar/TableSideBar'

export default function ColumnSideBar() {
  const [isClicked, setIsClicked] = useState(false)
  const table = useContext(TableContext)

  if (table.activeColumn === null) {
    return <TableSideBar />
  }

  return (
    <Aside>
      <Header>
        <h1>Column</h1>
      </Header>
      <Nav>
        <Button onClick={() => setIsClicked(!isClicked)}>
          <Text>
            <Eye />
            <div>
              <h4>Visual</h4>
              <small>{table.columns[table.activeColumn].header}</small>
            </div>
          </Text>
          {isClicked ? <ChevronUp /> : <ChevronDown />}
        </Button>
        <Dropdown isClicked={isClicked}>
          <Label htmlFor="header">Column header</Label>
          <Input
            id="header"
            type="text"
            value={table.columns[table.activeColumn].header}
            maxLength={25}
            onChange={table.updateColumnHeader}
          />
        </Dropdown>
        <Dropdown isClicked={isClicked}>
          <Label htmlFor="header">Row content</Label>
          {table.columns[table.activeColumn].row.length > 0 ? (
            table.columns[table.activeColumn].row.map((row, index) => {
              return (
                <Fragment key={index}>
                  <Label htmlFor="row">Row {index + 1}</Label>
                  <Input
                    type="text"
                    value={row}
                    maxLength={25}
                    onChange={(event) => table.updateRowContent(event, index)}
                  />
                </Fragment>
              )
            })
          ) : (
            <div>There is no rows in this column</div>
          )}
        </Dropdown>
      </Nav>
    </Aside>
  )
}
