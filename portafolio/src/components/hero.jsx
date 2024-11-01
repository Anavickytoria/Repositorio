import video from '../assets/video.mp4';
import foto from "../assets/foto.jpg"

function Hero() {
    const info=[{
        Nombre:'Alma Sorbera',
        eslogan:'Me gustan los idiomas y la politica.',
    }]
    return(
        <>
            <video src={video} autoplay="true" muted="true" loop="true" ></video>
            <div className='orden'>
                <img className='foto' src={foto} alt="" />
                <h1 className='letras'>{info[0].Nombre}</h1>
                <h4>{info[0].eslogan}</h4>
            </div>
        </>
    )
}
export default Hero