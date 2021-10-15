import { useEffect, useState} from 'react'
import {Table, Button, Content} from './styles'
import {Link } from 'react-router-dom'



import { ref, onValue, remove } from "firebase/database";
import database from '../../firebase/firebase'
import RoutesAdminList  from '../RoutesAdmin';
import Header from '../Header';

export default function ListAdmin() {

  const [films, setFilms ] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    const getDbFilms = ref(database, 'filmes/');
    onValue(getDbFilms, (snapshot) => {
      const data = snapshot.val();
      setFilms(data)
      setLoading(false)
    })

  }, [loading])

  const OnDelete = (id) => {
    console.log(id)
    if(window.confirm("Tem certeza que deseja excluir esse registro?")){
      const getDbFilms = ref(database, 'filmes/' + id);
     remove(getDbFilms, (err) => {
      if(err){
        console.log(err)
      }else{
        alert('Deletado com sucesso')
      }
    })
    }

  }

  return (
    <Content>
    <Header/>
    <RoutesAdminList/>
    <section className='lists'>

          <Table >
            <thead>
              <tr style={{color: '#fff'}}>
                  <td>Nome</td>
                  <td>Categoria</td>
                  <td>Ano de Lançamento</td>
                  <td>Valor por dia</td>
                  <td>Açoes</td>
              </tr>
            </thead>
            <tbody>
        {Object.keys(films).map((id)=>(
              <tr>
                  <td>{films[id].name}</td>
                  <td>{films[id].categorie}</td>
                  <td>{films[id].year}</td>
                  <td>{films[id].price}</td>
                  <td>
                    <Button style={{backgroundColor: '#faa200'}} onClick={()=> OnDelete(id)}>Excluir</Button>
                    <Button style={{backgroundColor: '#00fa19'}}>
                      <Link to={'/update/'+ id}>Editar</Link>
                    </Button>
                  </td>
              </tr>
              ))}
            </tbody>
          </Table>
                    

      </section>
    </Content>

  )
}
