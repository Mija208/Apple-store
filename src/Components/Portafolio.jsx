import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Corazon from './Corazon'

const Portafolio = () => {
    const fotos = useContext(Context)
  return (
    <div className='portafolio grid columns-5 p-3'>
      
      {fotos.map(foto=>(
        <div className='foto' key={foto.id} style={{backgroundImage:`url(${foto.src})`}}>
        <Corazon filled={false}/>
      </div>
      ))}
    </div>
  )
}

export default Portafolio
