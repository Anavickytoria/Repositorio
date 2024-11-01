import foto from '../assets/foto.jpg'
import Progreso from './progreso';

function About() {
    const info=[{
        componente:'Sobre mi',
        texto:'Soy una chica de 17 años, a la que le gusta la política, los idiomas, el ámbito social y con un poco de interés por la programación.',
        html:'Conocimientos informaticos:',
        css:'Experiencia laboral:',
        react:'Comunicacion social:',
        javascript:'Manejo de ingles:',
        dos:'Años de experiencia',
        diez:'Proyectos',
        diez2:'Clientes felices'
    }]
    return(
        <div className='about'>
            <h1>{info[0].componente}</h1>
            <div className='about-orden'>
                <img className='about-foto' src={foto}></img>
                <div className='about-text'>
                    <h5>{info[0].texto}</h5>
                    <br></br>
                    <h5>{info[0].html}</h5>  <Progreso variant="info" numero={20}></Progreso>
                    <h5>{info[0].css}</h5>  <Progreso variant="info" numero={40}></Progreso>
                    <h5>{info[0].react}</h5>  <Progreso variant="info" numero={70}></Progreso>
                    <h5>{info[0].javascript}</h5>  <Progreso variant="info" numero={60}></Progreso>
                    <div className='orden2'>
                        <div>
                            <h5>2</h5><h6>{info[0].dos}</h6>
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