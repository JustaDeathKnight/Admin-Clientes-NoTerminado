import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const VerCliente = () => {
  
  const {id} = useParams()
  const [client, setClient] = useState({})
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {

        const respuesta = await fetch(`http://localhost:4001/clientes/${id}/`);

        const resultado = await respuesta.json();

        setClient(resultado);

      } catch (error) {

        consol.log(error)

      }
    }
    obtenerClienteAPI()
  }, [])

  return (
    <div>
      <p>no me andaaaaaaaaaaaaaaaa</p>
    </div>
  )
}

export default VerCliente