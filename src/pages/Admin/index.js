import {useRef, useEffect, useState} from 'react' 
import { Form} from "@unform/web";
import * as Yup from 'yup'
import { Content, Button, ContentForm } from './styles'
import InputFild from '../../Components/Input'

import fireDb from '../../firebase/firebase'
import { ref, set, onValue } from "firebase/database";
import Header from '../../Components/Header';
import RoutesAdmin from '../../Components/RoutesAdmin';

import database from '../../firebase/firebase'
import { useHistory, useParams} from 'react-router-dom';

const initialState = {
  name: '',
  categorie: '',
  price : '',
  year: '',
  url_image: '',
  description: ''

}


export default function Admin(){


  const [ state, setState] = useState(initialState)
  const { name, categorie, price, year, url_image, description} = state
  const {id } = useParams()
  const history = useHistory()

  const [films, setFilms] = useState({})

  useEffect(()=>{

    const getDbFilms = ref(database, 'filmes/');
    onValue(getDbFilms, (snapshot) => {
      const data = snapshot.val();
      setFilms(data)
    })

  }, [id])


  useEffect(()=>{

   if(id){
     setState({...films[id]})
   }else{
     setState({...initialState})
   }
   return ()=>{
    setState({...initialState})

   }

  }, [id, films])

  function UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c === 'x' ? r :(r & 0x3 || 0x8)).toString(16);
    });
    return uuid;
}

  const addFilms = (data)=> {

    set(ref(fireDb, 'filmes/' + UUID() ), {
        name: data.name,
        categorie: data.categorie,
        price : data.price,
        year: data.year,
        url_image: data.url_image,
        description: data.description

    });
  }

  
  const formRef = useRef()

  async function handleFormSubmit(data, {reset}) {

    if(!id){
      try{
        const schemaValidation = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          categorie: Yup.string().required('A categoria é obrigatória'),
          price: Yup.string().required('Informe o preço do produto')
        })
        await schemaValidation.validate(data, {
          abortEarly: false,
        })
    
        addFilms(data)
       
        reset()
        formRef.current.setErrors({})
        alert('Item salvo com Sucesso')

  
      }catch(error){
        if(error instanceof Yup.ValidationError){
          const errosMessages = {}
  
          error.inner.forEach(error =>{
            errosMessages[error.path] = error.message;
  
          })
          formRef.current.setErrors(errosMessages)
        }
      }

    }else{

      set(ref(fireDb, 'filmes/' + id ), {
        name: data.name,
        categorie: data.categorie,
        price : data.price,
        year: data.year,
        url_image: data.url_image,
        description: data.description
    })
    reset()
    alert('Atualizado com Sucesso')
    setTimeout(()=> history.push('/admin/list'), 500)
  }
}
  const handleInputchange = (e) => {

    const {name, value} = e.target 
    setState({...state, [name]:value})
   }

  return (
    <Content>
      <Header/>
      <RoutesAdmin/>
      <br />
      <ContentForm>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <InputFild name="name" placeholder="Nome do Filme" value={name || ''} onChange={handleInputchange}/>
          <InputFild name="categorie" placeholder="Categoria" value={categorie || ''} onChange={handleInputchange}/>
          <InputFild name="price" placeholder="R$ Preço por dia" value={price || '' } onChange={handleInputchange}/>
          <InputFild name="year" placeholder="Ano de lançamento" value={year || ''} onChange={handleInputchange}/>
          <InputFild name="url_image" placeholder="Url do pôster" value={url_image || ''} onChange={handleInputchange}/>
          <InputFild name="description" placeholder="Breve descrição do filme" value={description || ''} onChange={handleInputchange}/>
          <br />
          <Button type="submit"><h2>{id ? 'Atualizar' : 'Salvar Registro'}</h2></Button>
        </Form>
      </ContentForm>

    </Content>
  )
}

 