import {React, useState, useContext} from 'react'
import Card from './Card';
import {FaTimes} from 'react-icons/fa'
import ComentariosContext from '../contexto/ComentariosContext';


const ComentarioItem = ({comentario}) => {

    const [comment, setComentario] = useState(comentario.comentario);
    const [rating, setRating]= useState(comentario.calificacion)
    const [identificacion, setIdentificacion]= useState(comentario.id)

    const cambiarRating = () =>{
        setRating((prev)=>prev+1)
    }

    const borrarItem=(identificacion)=>{
      console.log(`App ${comentario.id}`)

    }
  return (
    <Card reverse={false}>
        <div className='num-display'>{rating}</div>
        <button 
          onClick={ () => borrarItem(identificacion) }
          className='close'
          >
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{comment}</div>
    </Card>
    
  )
}

export default ComentarioItem
