import React, { useState } from 'react';
import ComentarioForm from './componentes/ComentarioForm';
import Comentariolista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import Header from './componentes/Header';
import comentarios from './data/Comentarios';

function App() {
    //estado para los comentarios
    const[comments,setcomments]= useState(comentarios)

    const borrarItem = (id) =>{
        if (
        window.confirm("Está seguro de borrar el comentario?")){
            //asignar nuevo estado a Comments:
            //aplicar filter, para quitar los comentarios cuyo id concuerde 
            // con el parametro
            setcomments(comments.filter((c)=> c.id !==id))
        }
    }

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
        
        <Header
            titulo={titulo} Autor={Autor} Ficha={Ficha} Centro={Centro}/>
        <ComentarioForm />
        <ComentarioStats
        comentarios={comments}
        />
        <Comentariolista 
        comments={comments}
        handleDelete={borrarItem}/>

    </div>
    
  )
}

export default App
