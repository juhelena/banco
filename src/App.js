import './App.css';
import Home from './components/Home';
import Servicos from './components/Servicos';
import Cartao from './components/Cartao';
import Conta from './components/Conta';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home />
      <Servicos /> 
      <Cartao /> 
      <Conta />
      <Footer />
    </>
  );
}

export default App;
