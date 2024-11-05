import video from '../assets/video.mp4';
import foto2 from "../assets/foto2.jpg"

function Hero() {
    const info=[{
        Nombre:'Ana Martinez',
        eslogan:'Me gusta la cocina y el poder viajar.',
    }]
    return(
        <>
            <video src={video} autoplay="true" muted="true" loop="true" ></video>
            <div className='orden'>
                <img className='foto' src={foto2} alt="" />
                <h1 className='letras'>{info[0].Nombre}</h1>
                <h4>{info[0].eslogan}</h4>
            </div>
        </>
    )
}
export default Hero