import {React,useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion';

const ComentarioForm =() =>{
    const[text, setText]=useState('');

    const handleTextChange =(e)=>{
        setText(e.target.value)

    }
  return (
    <Card>
        <form>
            <ComentarioCalificacion/>
            <div className='input-group'>
                <input type="text"
                value={text}
                placeholder='Ingrese su comentario aquí'
                onChange={handleTextChange} />
                <button className='input-group'>Guardar</button>
            </div>
        </form>
    </Card>
  )
}

export default ComentarioForm

