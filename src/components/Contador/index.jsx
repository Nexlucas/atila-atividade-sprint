import { useState } from 'react';

import './estilo.css';

export default function Contador() {

    const [ contador, setContador ] = useState(0);
    const [ passo, setPasso ] = useState(1);
    const [ ultimolote, setUltimolote ] = useState(0);
    const [ ultimovalor, setUltimovalor ] = useState(0);

    function incrementar() {
        setContador(valorAnterior => valorAnterior + passo);
        setUltimovalor(valorAnterior => valorAnterior + passo)
    }

    function decrementar() {
        setContador(valorAnterior => valorAnterior - passo);
    }

    function resetar() {
        setContador(0);
        setUltimolote(ultimovalor);
        setUltimovalor(0);
    }

    return (
        <div className="card-exemplo">

            <div className="card-header">
                <span className="badge">1. Estado Numérico</span>
                <h3>Contador com Passo Customizado</h3>
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
