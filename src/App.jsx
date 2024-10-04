import React, { useState } from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';

function App() {
    //estado para los comentarios
    const[comments,setcomments]= useState(comentarios)

        const titulo = "App de Comentarios";
        const Autor = "Laura Albarracín"
        const Ficha = 2902093
        const Centro="CGMLTI"
        //variables
        const loading = false;
        const showComments = true;
        if(loading ===true) return (<h1>Cargando comentarios ...</h1>)
  return (
    <div className='container'>
        
        <Header titulo={titulo} Autor={Autor} Ficha={Ficha} Centro={Centro}/>
        
        <div>{titulo}</div>
        <p>Hecha por{Autor}</p> 


        { showComments &&
            (
                <div className='comments'>
                    <h3>Comentarios:{comentarios.length}</h3>
                    <ul>
                        {
                            comments.map(comentario => 
                                <ComentarioItem 
                                        key={comentario.id}
                                        comentario={comentario.comentario}
                                        calificacion={comentario.calificacion}
                                
                                />
                                        
                            )
                        }
                    </ul>
                </div>

            )
        }
        
    </div>
    
  )
}

export default App
