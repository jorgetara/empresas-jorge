import { Link } from "react-router-dom"

function Inicio() {
  return (
    <>
    <h2>Empresas Españolas</h2>
    <p>En España se pueden encontrar varias empresas que trabajan en el sector dedicado al software</p>
    <Link to="/empresa"><button>Mostrar delegaciones</button></Link>
    <p>Ver ubicaciones en el mapa</p>
    <Link to="/map"><button>ver localizacion</button></Link>
  
    </>
  )
}
export default Inicio