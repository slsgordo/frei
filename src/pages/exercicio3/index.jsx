import './index.scss';
import { Link } from 'react-router-dom'

export default function Exercício3() {
    return (
        <div className='pagina-ex3'>
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
                    <h2>Exercício 03 - Valor total por quantidade</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande</b>, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <div className='divisao'>
                                <h2>Quantidade pequeno</h2>
                                <input type="text" placeholder="0" />
                            </div>
                            <div className='divisao'>
                                <h2>Quantidade médio</h2>
                                <input type="text" placeholder="0" />
                            </div>
                            <div className='divisao'>
                                <h2>Quantidade grande</h2>
                                <input type="text" placeholder="0" />
                            </div>

                        </div>
                        <button>Executar</button>
                    </div>
                </div>
            </main>
        </div>
    )
}