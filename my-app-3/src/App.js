//import Contador from './components/Contador'
//import Jsx from './components/Jsx'
//import Lista from './components/Lista'
//import Formulario from './components/Formulario'
//import EjemploUno from './components/FormHook'
//import EjemploUno from './components/EjemploUno'
//import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {

  const sujeto = {
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
  }
  return (
    <div className="container mt-5">
      <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
