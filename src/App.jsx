import Contador from './components/Contador';
import './App.css';

export default function App(){
  return(
    <div className='app-container'>
      <header className='app-header'>
        <h1>Painel de Controle de Lotes Industriais</h1>
        <p> 
          Sistema simples de registro de <span className="badge">lotes</span> bem sucedidos
        </p>
      </header>
      <main className='grid-exemplos'>
        <Contador/>
      </main>
    </div>
  );
}