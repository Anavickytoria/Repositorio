
import Cartas from './cartas.jsx';

const info = [
    { 
        titulo: 'Atencion al cliente :',
        texto: 'Atender a los clientes y brindarles un buen servicio para dejarlos satisfechos.',
        link: 'Saber mas'
    },
    { 
        titulo: 'Produccion',
        texto: 'Producir al cliente lo qeu sea necesario dentro del rubro determinado',
        link: 'Saber mas'
    },
    { 
        titulo: 'Manejo de caja',
        texto: 'Responsabilidad de manejo del dinero,en forma de administrarlo,contarlo y recibirlo en tiempo y forma.',
        link: 'Saber mas'
    },
    { 
        titulo: 'Reposicion de mercaderia',
        texto: 'Manejo de reestock al momento en que los productos ya esten finalizados, como vidrieras, heladeras, estantes, etc..',
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
