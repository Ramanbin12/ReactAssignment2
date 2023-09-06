import React,{useContext} from 'react'
import {menu } from "../../assets/index"
import {AppContext} from "../../components/index"
const ComponentMenu = () => {
  const {showNav,setShowNav} =  useContext(AppContext);
  const closeNav: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(showNav);
    setShowNav(!showNav);
  };
  return (
    <div className="lg:hidden">
      <button onClick={closeNav}>
        <img src={menu} alt="Menu" />
      </button>
    </div>
  )
}

export default ComponentMenu
