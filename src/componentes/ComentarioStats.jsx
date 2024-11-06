import {React, useContext, useState} from 'react';
import ComentariosContext from '../contexto/ComentariosContext';


const ComentarioStats = () => {
    const {comments} =useContext(ComentariosContext)
    const comentarios = comments

    // Asegurarse de que 'comentarios' sea un arreglo
const comentariosArray = comentarios || []; // Usar un arreglo vacío si 'comentarios' es undefined

    const totalComentarios = comentariosArray.length;
    
    const promedio = totalComentarios > 0 
        ? comentariosArray.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios 
        : 0;
    return (
        <div>
            <h4>Total Comentarios: {totalComentarios}</h4>
            <h4>Promedio de Calificación: {promedio.toFixed(2)}</h4>
        </div>
    );
};

export default ComentarioStats;
