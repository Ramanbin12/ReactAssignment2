import React from 'react'
import { ComponentContWatch, ComponentTrending, UpperNavbar } from '../../components/index'
const ComponentHome = () => {
  return (
    <>
    <div className='bg-black ml-[274px] h-full p-4'>
    <UpperNavbar/>
    <ComponentTrending/>
    <ComponentContWatch/>
    </div>
    </>
  )
}

export default ComponentHome
