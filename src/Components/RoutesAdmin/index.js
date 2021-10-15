
import {RoutesAdminList, Text} from './styles'
import {Link } from 'react-router-dom'


export default function List({title, items}) {
  return (
    <RoutesAdminList>
      <Link to='/admin'>
        <Text>Adicionar</Text>
      </Link>
      <Link to='/admin/list'>
        <Text>Lista de Filmes</Text>
      </Link>
    </RoutesAdminList>
  )
}
