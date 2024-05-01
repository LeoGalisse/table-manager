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
} from './TableSideBar'
import { Pencil, ChevronUp, ChevronDown } from 'lucide-react'
import { TableContext } from '../../context/TableContext'

export default function TableSideBar() {
  const [isClicked, setIsClicked] = useState(false)
  const table = useContext(TableContext)
  return (
    <Aside>
      <Header>
        <h1>Dynamic Table</h1>
      </Header>
      <Nav>
        <Button onClick={() => setIsClicked(!isClicked)}>
          <Text>
            <Pencil />
            <div>
              <h4>Title</h4>
              <small>{table.title}</small>
            </div>
          </Text>
          {isClicked ? <ChevronUp /> : <ChevronDown />}
        </Button>
        <Dropdown isClicked={isClicked}>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={table.title}
            maxLength={25}
            onChange={(event) => table.changeTitle(event.target.value)}
          />
        </Dropdown>
      </Nav>
    </Aside>
  )
}
