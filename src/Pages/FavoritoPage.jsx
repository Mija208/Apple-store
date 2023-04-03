import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Corazon from '../Components/Corazon';

const Contact = () => {
  const {fotos, setFotos} = useContext (Context);

  const handleClick = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };
  return (
    <div>
       <div className="fotos">
                {fotos.map((foto) => (
                  foto.favorito &&
                    <div
                    
                        key={foto.id}
                        onClick={() => handleClick(foto.id)}
                    >
                        <img src={foto.src} alt={foto.alt} />
                        <div>
                            <Corazon filled={foto.favorito} />
                        </div>
                        <div>
                            <p>{foto.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

    
    </div>
  );
}

export default Contact
