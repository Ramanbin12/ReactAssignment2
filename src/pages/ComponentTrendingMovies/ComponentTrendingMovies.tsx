import React from 'react'
import {ComponentNav,ComponentTrending, ComponentWatchDesciption} from "../../components/index"
const ComponentTrendingMovies = () => {
  return (
    <>
    <div className='bg-black ml-[274px]  h-full p-4'>

    <ComponentNav/>
    <ComponentTrending />
    <ComponentWatchDesciption/>
  </div>
    </>
  )
}

export default ComponentTrendingMovies
