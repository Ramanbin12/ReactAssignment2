import React from 'react'
import {ComponentNav,ComponentTrending, ComponentWatchDesciption} from "../../components/index"
const ComponentTrendingMovies = () => {
  return (
    <>
    <div className='overflow-x-hidden w-[full] bg-black h-full p-4'>

    <ComponentNav/>
    <ComponentTrending />
    <ComponentWatchDesciption/>
  </div>
    </>
  )
}

export default ComponentTrendingMovies
