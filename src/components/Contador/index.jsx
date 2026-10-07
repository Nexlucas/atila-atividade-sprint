import { useState } from 'react';

import './estilo.css';

export default function Contador() {

    const [ contador, setContador ] = useState(1);
    const [ passo, setPasso ] = useState(1);
    const [ ultimolote, setUltimolote ] = useState(0);
    function incrementar() {
        if(contador <= 49 && passo <= 50){
            setContador(valorAnterior => valorAnterior + passo);
            setUltimovalor(valorAnterior => valorAnterior + passo);
        }else{

        }
    }

    function decrementar() {
        if(contador >= 2 && passo >= 1){
            setContador(valorAnterior => valorAnterior - passo);
        }else{
            
        }
    }

    function resetar() {
        if(contador < 51 && contador > 0){
            setUltimolote(contador);
            setContador(1);

        }else{

        }
    }

    return (
        <div className="card-exemplo">

            <div className="card-header">
                <span className="badge">1. Estado Numérico</span>
                <h3>Contador de lotes</h3>
            </div>

            <div className="contador-display">
                <span className="numero-contador">{contador}</span>
            </div>

            <div className="passo-container">
                <label htmlFor="passo-input">
                    Passo do incremento:
                </label>

                <input id="passo-input" type="number" min="1" max="50" value={passo} onChange={(e) => setPasso(Number(e.target.value) || 1)}/>

            </div>

            <div className="botoes-grupo">

                <button className="btn btn-decrementar" onClick={decrementar}> - {passo}</button>

                <button className="btn btn-resetar" onClick={resetar}> Zerar </button>

                <button className="btn btn-incrementar" onClick={incrementar}> + {passo}</button>

            </div>

            <div className="explicacao-box">
                <p>
                    O ultimo lote regristrado foi de {ultimolote}.
                </p>
            </div>

        </div>
    );
}
