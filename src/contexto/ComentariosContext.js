import { createContext, useEffect, useState } from "react";

const ComentariosContext = createContext();

export const ComentariosProvider = ({ children }) => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetchComentarios()
    },[])

    const fetchComentarios=async ()=>{
        const response = await fetch('http://localhost:5000/comentarios')
        const comentariosApi= await response.json()
        setComments(comentariosApi)
    }

    const borrarItem = (id) => {
        if (window.confirm("¿Está seguro de borrar el comentario?")) {
            setComments(comments.filter((c) => c.id !== id));
        }
    };

    return (
        <ComentariosContext.Provider value={{ comments, setComments, borrarItem }}>
            {children}
        </ComentariosContext.Provider>
    );
};

export default ComentariosContext;
