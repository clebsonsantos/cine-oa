import Cards from '../../Components/Cards'
import { Content } from './styles'
import VisitImage from '../../assets/admin.png'
import AdminImage from '../../assets/visitante.png'


export default function Films(){

  return (
    <Content>
      <Cards title='Administrador' imageUrl={AdminImage} linkRoute='/admin'/>
      <Cards title='Visitante' imageUrl={VisitImage} linkRoute='/profile'/>
    </Content>
  )
}