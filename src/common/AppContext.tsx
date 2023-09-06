import React,{createContext} from 'react'
import { contextType } from '../utilities/type'

const AppContext = createContext<contextType>({
    showNav:false,
    setShowNav:()=>{},
    addFav:false,
    setAddFav:()=>{}
}) 

export default AppContext