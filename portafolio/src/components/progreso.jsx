import ProgressBar from 'react-bootstrap/ProgressBar';

function Progreso({numero}) {
  return <ProgressBar now={numero} />;
}

export default Progreso;