import './App.css';
import React from 'react';
import {useState} from 'react';
import { ComponentNavbar } from './components/index';
import ComponentRoute from './routes/ComponentRoute';
import AppContext from './common/AppContext';
function App() {
  const[showNav,setShowNav]=useState(false);
  const[addFav,setAddFav]=useState(false);
  return (
    <div className="App">
      <div className="flex">
        <AppContext.Provider value={{showNav,setShowNav,addFav,setAddFav}}>
        <ComponentNavbar/>
        <ComponentRoute/>
        </AppContext.Provider>
      </div>
       
    </div>
  
  );
}

export default App;
