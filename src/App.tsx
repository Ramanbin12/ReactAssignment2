import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ComponentNavbar } from './components/index';
import ComponentRoute from "./routes/ComponentRoute"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ComponentNavbar />
        <ComponentRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
