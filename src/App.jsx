import { Routes, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio'
import Empresas from './components/Empresas'
import Mapa from './components/Mapa'
import "./App.css"

function App() {

  return (
    <>
      <div>
        
      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio </Link></li>
          <li><Link to="/empresa">Empresas </Link></li>
          <li><Link to="/map">Mapa </Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/empresa" element={<Empresas />} />
        <Route path="/map" element={<Mapa />} />
      </Routes>
    </div>
    <footer>
        <p>&copy; 2025 Jorge Taravilla - Alcorcón 
          <a href="https://github.com/jorgetara"></a>
        </p>
      </footer>
    </>
  )
}

export default App
