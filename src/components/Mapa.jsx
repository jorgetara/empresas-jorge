import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "leaflet/dist/leaflet.css"

function Mapa() {
  const [empresas, setEmpresas] = useState([])
    useEffect(() => {
      const cargarEmpresas = async () => {
        try {
          const respuesta = await fetch('/empresas.json')
          const data = await respuesta.json()
          setEmpresas(data)
          console.log(data)
        } catch (e) {
          console.error(`Se ha producido un error ${e}`)
        } 
      }
      cargarEmpresas();
    }, [])
  const style = {
    height: "500px"
  }
 const position = [40.4074, -3.6885]
  return (
    <>
      <div>
        <h2>Ubicacion de las Empresas</h2>
        <MapContainer
          style={style}
          center={position}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {empresas.map((item, index) => (
            <Marker key={index} position={item.latlng}>
              <Popup>
                {item.nombre} | {item.ciudad}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <Link to="/"><button>Volver al inicio</button></Link>

      </div>
    </>
  )
}
export default Mapa