import './Profileimagem.css';
import imagem from './img/ba.png';
import Profileimagem from './componentes/Profileimagem';
function App() {
  return (
    <div className="App">
     <h1> Teste </h1>
     <Profileimagem
     titulo="imagem teste"
     imagem ={imagem}
     alt="teste"
     />
    </div>
  );
}

export default App;
