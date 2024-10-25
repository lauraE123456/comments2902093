import { createContext, useState } from "react";

const ComentariosContext = createContext();

export const ComentariosProvider = ({ children }) => {
    const [comments, setComments] = useState([
        {
            id: 1,
            comentario: "Este es un comentario",
            calificacion: 3
        },
    ]);

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
