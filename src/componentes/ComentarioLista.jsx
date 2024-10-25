import { AnimatePresence, motion } from 'framer-motion';
import ComentarioItem from './ComentarioItem';
import {React, useContext} from 'react';
import ComentariosContext from '../contexto/ComentariosContext';

function Comentariolista() {
    const {comments}=useContext(ComentariosContext)
    
    if (comments.length === 0 || !comments) {
        return <p>No hay comentarios</p>;
    } else {
        return (
            <div className='comments'>
                <AnimatePresence>
                    <ul>
                        {comments.map(comentario => (
                            <motion.div
                                key={comentario.id}
                                initial={{ opacity: 0, y: -20, scale: 0.95 }} // Comienza más pequeño
                                animate={{ rotate:360, opacity: 1 }} // Escala a tamaño normal
                                exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }} // Escala hacia abajo al salir
                            >
                                <ComentarioItem
                                    key={comentario.id}
                                    comentario={comentario}
                                    
                                />
                            </motion.div>
                        ))}
                    </ul>
                </AnimatePresence>
            </div>
        );
    }
}

export default Comentariolista;
