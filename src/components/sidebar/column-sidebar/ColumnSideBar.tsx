import { useContext, useState } from 'react'
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
      </Nav>
    </Aside>
  )
}
