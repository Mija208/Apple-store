import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import FavoritoPage from './Pages/FavoritoPage'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { Context } from './context/Context'
import './App.css'

const App = () => {
  const [fotos, setFotos] = useState([]);

  const url = '/src/data/data.json';

  const getPhotos = async()=>{
    const res = await fetch(url);
    let {photos} = await res.json();
      
    photos = photos.map(photo=>({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      faavorito: false 
    }));
    setFotos(photos);
  };

  useEffect( ()=>{
    getPhotos()
  },[])

  return (
    <div>
      <Context.Provider value={{fotos, setFotos}}>

      <BrowserRouter>
      
      <Navbar/>
      <FavoritoPage/>
       
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='favoritos' element= {<FavoritoPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
       </Context.Provider>
    </div>
  )
}

export default App
