import React, { useState } from 'react';
import ComentarioForm from './componentes/ComentarioForm';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import About from './paginas/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutIconLink from './componentes/AboutIconLink';
import HomeIconLink from './componentes/HomeIconLink'; // Ajusta la ruta si es necesario
import { ComentariosProvider } from './contexto/ComentariosContext';

function App() {
    //estado para los comentarios
    const[comments,setComments]= useState(comentarios)

    const borrarItem = (id) =>{
        if (
        window.confirm("Está seguro de borrar el comentario?")){
            //asignar nuevo estado a Comments:
            //aplicar filter, para quitar los comentarios cuyo id concuerde 
            // con el parametro
            setComments(comments.filter((c)=> c.id !==id))
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
        
        const addComentario=(newComentario)=>{
            //utilice el operacior spread
            //para añaddir el newComentario
            // a la lista de comentarios(state:comments)
            setComments(prevComments => [...prevComments, newComentario])
            // operador spread ...
        }
  return (
    <ComentariosProvider>
        <Router>
            <div className='container'>
                
                <Header titulo={titulo} Autor={Autor} Ficha={Ficha} Centro={Centro}/>
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <ComentarioForm handleAdd={addComentario}/>
                        <ComentarioStats comentarios={comments}/>
                        <ComentarioLista />
                        <AboutIconLink />
                        </>
                    }></Route>

                    <Route path='/about' element={
                        <>
                        <About titulo={titulo} autor={Autor} ficha={Ficha}
                        />
                        <HomeIconLink />
                        </>
                    }></Route>
                </Routes>


            </div>
        </Router>
   </ComentariosProvider>
    
  )
}

export default App
