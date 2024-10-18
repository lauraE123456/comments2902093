import {React,useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion';

const ComentarioForm =({handleAdd}) =>{
    const[text, setText]=useState('');
    const[calificacion, setCalificacion]=useState();

    const handleTextChange =(e)=>{
        setText(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //Crear el objeto comentario
        const newComentario={
            comentario:text,
            calificacion: calificacion
        }
        handleAdd(newComentario)
        // setText(e.target.calificacion)
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <ComentarioCalificacion select={(calificacion) => {setCalificacion(calificacion)}} />
            <div className='input-group'>
                <input type="text"
                value={text}
                placeholder='Ingrese su comentario aquí'
                onChange={handleTextChange} />
                <button className='input-group' type="submit">Guardar</button>
            </div>
        </form>
    </Card>
  )
}

export default ComentarioForm

