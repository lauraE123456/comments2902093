import React from 'react';
import ComentarioForm from './componentes/ComentarioForm';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import Header from './componentes/Header';
import About from './paginas/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutIconLink from './componentes/AboutIconLink';
import HomeIconLink from './componentes/HomeIconLink'; // Ajusta la ruta si es necesario
import { ComentariosProvider } from './contexto/ComentariosContext';

function App() {
    //estado para los comentarios

        const titulo = "App de Comentarios";
        const Autor = "Laura Albarracín"
        const Ficha = 2902093
        const Centro="CGMLTI"
        //variables
        const loading = false;
        if(loading ===true) return (<h1>Cargando comentarios ...</h1>)
        
        
  return (
    <ComentariosProvider>
        <Router>
            <div className='container'>
                
                <Header titulo={titulo} Autor={Autor} Ficha={Ficha} Centro={Centro}/>
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <ComentarioStats />
                        <ComentarioForm />
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
