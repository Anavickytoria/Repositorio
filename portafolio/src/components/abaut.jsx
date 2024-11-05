import foto from '../assets/foto.jpg'
import Progreso from './progreso';

function About() {
    const info=[{
        componente:'Sobre mi',
        texto:'Tengo 18 años, soy una persona alegre que le gusta estar en contacto con las personas, me gusta cocinar, viajar y conocer lugares',
        html:'Cocina:',
        css:'Organizacion:',
        react:'Comunicacion:',
        javascript:'Manejo de aplicaciones:',
        dos:'Años de experiencia',
        diez:'Proyectos',
        diez2:'Opiniones positivas'
    }]
    return(
        <div className='about'>
            <h1>{info[0].componente}</h1>
            <div className='about-orden'>
                <img className='about-foto' src={foto}></img>
                <div className='about-text'>
                    <h5>{info[0].texto}</h5>
                    <br></br>
                    <h5>{info[0].html}</h5>  <Progreso variant="info" numero={70}></Progreso>
                    <h5>{info[0].css}</h5>  <Progreso variant="info" numero={60}></Progreso>
                    <h5>{info[0].react}</h5>  <Progreso variant="info" numero={65}></Progreso>
                    <h5>{info[0].javascript}</h5>  <Progreso variant="info" numero={50}></Progreso>
                    <div className='orden2'>
                        <div>
                            <h5>4</h5><h6>{info[0].dos}</h6>
                        </div>
                        <div>
                            <h5>7+</h5><h6>{info[0].diez}</h6>
                        </div>
                        <div>
                            <h5>10+</h5><h6>{info[0].diez2}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;