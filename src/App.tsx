import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {useState} from "react"
import { ComponentNavbar } from './components/index';
import ComponentRoute from "./routes/ComponentRoute";
import AppContext from './components/AppContext/AppContext';
function App() {
  const[showNav,setShowNav]=useState(false)
  const[addFav,setAddFav]=useState(false)
  return (
    <div className="App">
      <div className="flex">
        <AppContext.Provider value={{showNav,setShowNav,addFav,setAddFav}}>
        <ComponentNavbar />
        <ComponentRoute />
        </AppContext.Provider>
      </div>
       
    </div>
  );
}

export default App;
