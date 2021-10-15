
import { ListArea, MovieRow, MovieRowItem, ListMovie, Image, Title} from './styles'
import {Link } from 'react-router-dom'


export default function List({title, items}) {


  return (
    <ListMovie>
      <Title>{title}</Title>
      <ListArea>
        <MovieRow>

        {Object.keys(items).map((id, key)=>(
          <Link to={`/filme/${id}`} key={key}>
            {items[id].categorie === title ?  <MovieRowItem > <Image src={items[id].url_image} /> </MovieRowItem> : undefined }
          </Link>
         ))} 
        </MovieRow>
      </ListArea>
    </ListMovie>
  )
}
