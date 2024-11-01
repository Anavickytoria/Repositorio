
import Cartas from './cartas.jsx';

const info = [
    { 
        titulo: 'Atencion al cliente :',
        texto: 'Ofrezco mis capacidades y aptitudes para la atencion al cliente, utilizando mi capacidad para la comunicacion y el destacamiento en la sociabilizacion.',
        link: 'Leer mas'
    },
    { 
        titulo: 'Habla de idiomas',
        texto: 'Un nivel basico e inicial en el ingles permite la comunicacion internacional y facilita el uso de herramientas en el ambito de lo social.',
        link: 'Leer mas'
    },
    { 
        titulo: 'Manejo de redes',
        texto: 'Utilizacion de redes sociales de manera mas representativa para los diseños web y artisticos propuestos.',
        link: 'Leer mas'
    },
    { 
        titulo: 'Control de herramientos como Word,Excel,PowerPoint',
        texto: 'Manejo basico en aplicaciones de organizacion y eventos.',
        link: 'Leer mas'
    },
    
];

function Servicios() {
    return (
        <div className="servicios">
            <div className='movida'>
                <h1>Mis servicios:</h1>
                <div className='cartas'>
                    {info.map((item, index) => (
                        <Cartas 
                            key={index} 
                            titulo={item.titulo} 
                            texto={item.texto} 
                            link={item.link} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Servicios;
