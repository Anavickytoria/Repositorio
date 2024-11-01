import Button from 'react-bootstrap/Button';
import { FaInstagram } from "react-icons/fa";
import hydro from '../assets/bichito.gif';
function Contacto() {
    const info=[{
        texto:'Estoy disponible a cualquier tipo de oportunidades!',
        email:'almasorbera11@gmail.com',
        numero:'3541521902',
        ubicación:'Carlos Paz, Cordoba, Argentina'
      }]
    return(
        <div className="contacto"> 
           
            <div className="orden3">
                <div className="info">
                    <h2>Comuniquemonos</h2>
                    <br></br>
                    <p>{info[0].texto}</p>
                    <p>{info[0].email}</p>
                    <p>{info[0].numero}</p>
                    <p>{info[0].ubicación}</p>
                </div>
                <div className="formulario">
                    <label>Tu nombre:</label>
                    <input></input>
                    <label>Email:</label>
                    <input></input>
                    <label>Mensaje:</label>
                    <input></input>
                    <br></br>
                    <Button className='boton' variant="dark" >Enviar!</Button>
                </div>
            </div>
            <div className='linea'></div>
            <div>
            <img className='foton' src={hydro}></img>
            <a href='https://www.instagram.com/arezzopascanas/?hl=es' className='ig'><FaInstagram /></a>
            <img className='foton'src={hydro}></img>
            </div>
        </div>
    )
}
export default Contacto;