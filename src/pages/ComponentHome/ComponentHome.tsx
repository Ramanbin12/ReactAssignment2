import React from 'react'
import { ComponentContWatch, ComponentTrending, UpperNavbar } from '../../components/index'
const ComponentHome = () => {
  return (
    <>
    <div className='ml-[274px] bg-black h-full p-4'>
      <UpperNavbar/>
    <ComponentTrending/>
    <ComponentContWatch/>
    </div>
    </>
  )
}

export default ComponentHome
