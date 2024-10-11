import {React, useState} from 'react'
import Card from './Card';
import {FaTimes} from 'react-icons/fa'
const ComentarioItem = ({calificacion,
                          comentario,
                          id,
                          handleDelete}) => {
    //manejo del westado de un comentario:
    //comentario y calificacion como atributos
    //mediante eol uso de Estados
    const [comment, setComentario] = useState(comentario);
    const [rating, setRating]= useState(calificacion)
    const [identificacion, setIdentificacion]= useState(id)

    const cambiarRating = () =>{
        setRating((prev)=>prev+1)
    }
    //estilos para el
    //metodo para ekl boton borrarItem
    const borrarItem=(identificacion)=>{
      console.log(`App ${id}`)

    }
  return (
    <Card reverse={false}>
        <div className='num-display'>{rating}</div>
        <button 
          onClick={ () => handleDelete(identificacion) }
          className='close'
          >
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{comment}</div>
    </Card>
    
  )
}

export default ComentarioItem
