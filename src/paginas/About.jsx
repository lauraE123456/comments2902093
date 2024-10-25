import React from 'react'
import Card from '../componentes/Card'

const About = ({titulo,autor,ficha}) => {
  return (
    <Card>
        <div className='about'>
            <h1>Acerca de este proyecto</h1>
            <p><b>titulo:</b>{titulo}</p>
            <p><b>autor:</b>{autor}</p>
            <p><b>ficha:</b>{ficha}</p>
            <p><b>version:</b>1.0.0</p>
            <p>
                <a href="/">Volver a la pagina principal</a>
            </p>
        </div>
    </Card>
  )
}

export default About