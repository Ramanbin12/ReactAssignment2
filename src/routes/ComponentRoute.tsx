import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {ComponentHome,ComponentComingSoon,ComponentTrendingMovies,ComponentFavourites} from '../pages/index'
const ComponentRoute = () => {
  return (
   <>
   <Routes>
    <Route path="/"  element={<ComponentHome/>}/>
    <Route path="favourites" element={<ComponentFavourites/>}/>
    <Route path="trending" element={<ComponentTrendingMovies/>}/>
    <Route path="comingsoon" element={<ComponentComingSoon/>}/>
   </Routes>
   </>
  )
}

export default ComponentRoute
