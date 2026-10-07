import Contador from './components/Contador';
import './App.css';

export default function App(){
  return(
    <div className='app-container'>
      <header className='app-header'>
        <h1>Painel de Controle de Lotes Industriais</h1>
        <p> 
          <span className="badge"> Lotes</span>
        </p>
      </header>
      <main className='grid-exemplos'>
        <Contador/>
      </main>
      <footer className='app-footer'>

        <p></p>
        
      </footer>
    </div>
  );
}