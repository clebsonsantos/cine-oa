import { Content, Thumb} from './styles'
import {Link } from 'react-router-dom'
export default function Cards({title, imageUrl, linkRoute}){
  return (
    <Content >
      <Link to={linkRoute} className='link'>
          <Thumb>
            <img src={imageUrl} alt="logo" width='120px' />
          </Thumb>
          <h1>{title}</h1>
      </Link>
    </Content>
  )
}