import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {ComponentHome,ComponentComingSoon,ComponentTrending,ComponentFavourites} from '../pages/index'
const ComponentRoute = () => {
  return (
   <>
   <Routes>
    <Route path="/"  element={<ComponentHome/>}/>
    <Route path="favourites" element={<ComponentFavourites/>}/>
    <Route path="trending" element={<ComponentTrending/>}/>
    <Route path="comingsoon" element={<ComponentComingSoon/>}/>
   </Routes>
   </>
  )
}

export default ComponentRoute
