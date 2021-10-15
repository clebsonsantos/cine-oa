import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import  Header from '../Header'

import { Content, Title, ContentFilm, ContentDescription, Span, ContentMovie, Image, ButtonLocation } from './styles'
import { ref, onValue } from "firebase/database";

import database from '../../firebase/firebase'

export default function List() {

  // const [ state, setState] = useState(initialState)
  // const { name, categorie, price, year, url_image, description} = state
  const {id } = useParams()

  const [films, setFilms] = useState({})

  useEffect(()=>{

    const getDbFilms = ref(database, 'filmes/'+ id);
    onValue(getDbFilms, (snapshot) => {
      const data = snapshot.val();
      setFilms(data)
    })
    

  }, [id])

  function handleLocation() {
    alert('Excelente escolha!! \n\r Aguarde nosso feedback para realizar a retirada em loja.')

  }


  return (
    <Content>
      <Header/>
      <ContentMovie>
      <ContentFilm>
       <Image src={films.url_image} alt="" />
       
      </ContentFilm>
      <ContentDescription>
        <Title>{films.name}</Title>
        <Span>Gênero: {films.categorie}</Span><br /> <br />
        <Span>Sinopse: {films.description}</Span><br /> <br />
        <Span>Ano de Lançamento: {films.year}</Span> <br /> <br />
        <Span>Valor por dia: {films.price}</Span> <br /> 
        <ButtonLocation onClick={handleLocation}>Alugar este filme</ButtonLocation>
      </ContentDescription>

      </ContentMovie>
    </Content>
  )
}
