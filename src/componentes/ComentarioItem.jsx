import {React, useState} from 'react'

const ComentarioItem = ({calificacion,comentario}) => {
    //manejo del westado de un comentario:
    //comentario y calificacion como atributos
    //mediante eol uso de Estados
    const [comment, setComentario] = useState(comentario);
    const [rating, setRating]= useState(calificacion)

    const cambiarRating = () =>{
        setRating((prev)=>prev+1)
    }
    //estilos para el
  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{comment}</div>
        <button onClick={cambiarRating} style={{ backgroundColor: '#007BFF', color: '#FFFFFF', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'}>cambiar calificacion</button>

        
    </div>
    
  )
}

export default ComentarioItem
