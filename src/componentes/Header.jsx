import React from 'react'

const Header = ({Autor,titulo,Ficha,Centro}) => {
    const headerStyles ={
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        color:'white',
        height:"100%"
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
            {titulo}
            <p style={{color: 'black'}}>Autor:{Autor}</p>
            <p style={{color: 'red'}}>Ficha:{Ficha}</p>
            <p style={{color: 'rgba(128, 0, 128)'}}>Ficha:{Centro}</p>
        </div>
    </header>
  )
}

export default Header
