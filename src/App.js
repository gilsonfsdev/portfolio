import './App.css';

// componentes
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer'
import Tecnologias from './pages/Tecnologias/Tecnologias';
import Qualificacoes from './pages/Qualificações/Qualificacoes';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sobre />
      <Qualificacoes />
      <Tecnologias />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
