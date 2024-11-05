import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arezzo from '../assets/arezzo.jpg'

function Carta() {
  const info=[{
    titulo:'Arezzo',
    texto:'Reel publicitario sobre la empresa de embutidos y chazinados'
  }]
  return (
    <Card className='proyecto-card'>
      <Card.Img variant="top" src={arezzo} />
      <Card.Body>
        <Card.Title>{info[0].titulo}</Card.Title>
        <Card.Text>
          {info[0].texto}
        </Card.Text>
        <Button variant="dark" href='https://drive.google.com/file/d/1RQXN-ELnxzzdc6diAyfolEgcIlGsrTSc/view?usp=classroom_web&authuser=0'>visitar</Button>
      </Card.Body>
    </Card>
  );
}

function Proyectos() {
    return(
        <div className="servicios">
            <div className="proyectos">
                <h1>My projects</h1>
                <Carta></Carta>
            </div>
            <div className='fondo'></div>
        </div>
    )
}
export default Proyectos;