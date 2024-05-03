import { useContext } from 'react'
import { Aside, Header } from '../SideBar'
import { TableContext } from '../../../context/TableContext'
import ColumnSideBar from '../column-sidebar/ColumnSideBar'

export default function PreviewSideBar() {
  const table = useContext(TableContext)

  if (!table.isPreviewMode) {
    return <ColumnSideBar />
  }

  return (
    <Aside>
      <Header>
        <h1>Preview options</h1>
      </Header>
    </Aside>
  )
}
