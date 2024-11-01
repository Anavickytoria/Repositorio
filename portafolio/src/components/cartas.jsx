import Card from 'react-bootstrap/Card';

function Cartas({titulo, texto, link}) {
  return (
    <Card className='carta'>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Card.Link href="#">{link}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cartas;