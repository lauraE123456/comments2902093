import React from 'react'

const Header = ({Autor,titulo,Ficha,Centro}) => {
    const headerStyles ={
        backgroundColor: 'blue',
        color:'white',
        height:"100%"
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
            {titulo}
            <p style={{color: 'black', backgroundColor:'brown'}}>Autor:{Autor}</p>
            <p style={{color: 'red', backgroundColor:'purple'}}>Ficha:{Ficha}</p>
            <p style={{color: 'purple', backgroundColor:'white'}}>Ficha:{Centro}</p>
        </div>
    </header>
  )
}

export default Header
