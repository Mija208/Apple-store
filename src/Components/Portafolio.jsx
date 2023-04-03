import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Corazon from './Corazon'

const Portafolio = () => {
    const {fotos, setFotos} = useContext(Context)

    const handleClick = (id)=>{
     const fotoIndex = fotos.findIndex((f) =>f.id === id);
     console.log(fotoIndex)
     fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
     console.log(fotos[fotoIndex].favorito)
     setFotos([...fotos]);
    };
  return (
    <div className='portafolio grid-columns-5 p-3'>
      
      {fotos.map(foto=>(
        <div onClick={()=>handleClick(foto.id)} className='foto' key={foto.id} style={{backgroundImage:`url(${foto.src})`}}>
        <Corazon filled={foto.favorito}/>
      </div>
      ))}
    </div>
  )
}

export default Portafolio
