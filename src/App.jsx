import Contador from './components/Contador';
import './App.css';

export default function App(){
  return(
    <div className='app-container'>
      <header className='app-header'>
        <h1>Explorador de Estados do React</h1>
        <p>Aprenda ma prática os 4 principais padrões de uso do hook
          <span>useState</span>
        </p>
      </header>
      <main className='grid-exemplos'>
        <Contador/>
      </main>
      <footer className='app-footer'>

        <p>Demonstrando o uso do React Hook useState</p>
        
      </footer>
    </div>
  );
}