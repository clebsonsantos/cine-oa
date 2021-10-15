import { useState, useEffect} from 'react'

import { Content } from './styles'

import List from '../../Components/List'
import FeatureMovie from '../../Components/FeatureMovie'
import Header  from '../../Components/Header';

import { ref, onValue } from "firebase/database";
import database from '../../firebase/firebase'


export default function Films(){

  const [films, setFilms ] = useState({})
  const [loading, setLoading] = useState(true)
  const [featureData, setFeatureData] = useState(null)
  
  
  useEffect(()=>{
    
    const getDbFilms = ref(database, 'filmes/');
    onValue(getDbFilms, (snapshot) => {
      const data = snapshot.val();
      setFilms(data)
      setLoading(false)
      
      setFeatureData({
        name: "Clebson",
        url_image: "https://github.com/clebsonsantos.png",
      })
    })
    
  }, [loading])


  


  return (
    <Content>
      <Header />
       {featureData &&
      <FeatureMovie item={featureData}/>
       } 
      <section>
        {Object.keys(films).map((id, key)=>(
          <List title={films[id].categorie} items={films} key={key}/>

        ))}
      </section>
    </Content>
  )
}