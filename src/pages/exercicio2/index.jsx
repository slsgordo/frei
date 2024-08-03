import './index.scss';
import { Link } from 'react-router-dom'

export default function Exercício2() {
    return (
        <div className='pagina-ex2'>
            <header>
                <div>
                    <img src="/assets/images/Frei-Logo.png" alt="" />
                    <h1>React FreiS</h1>
                </div>

                <div>
                    <Link to='/Home'>Inicio</Link>
                    <Link to='/Sobre'>Sobre</Link>
                </div>
            </header>
            <main>
                <div className='title'>
                    <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                    <h2>Exercício 02 - Converter Kg/gramas</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Valor em gramas</h2>
                            <input type="text" placeholder="0" />
                        </div>
                        <button>Executar</button>
                    </div>

                </div>
            </main>
        </div>
    )
}