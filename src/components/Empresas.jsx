import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Empresas() {
 const [empresas, setEmpresas] = useState([])
  useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const respuesta = await fetch('http://localhost:5173/empresas.json')
        const data = await respuesta.json()
        setEmpresas(data)
        console.log(data)
      } catch (e) {
        console.error(`Se ha producido un error ${e}`)
      } 
    }
    cargarEmpresas();
  }, [])
  return (
    <>
      <h2>Estas son las empresas  </h2>
      <ul>
        {empresas.map((item,index)=>(
          <li key={index}>{item.nombre} | {item.ciudad}</li>
        ))}

      </ul>
      <Link to="/"><button>Volver al inicio</button></Link>
    </>
  )   
}
export default Empresas