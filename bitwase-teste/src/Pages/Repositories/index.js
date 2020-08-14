import React from 'react'

import Input from '../../Components/Input'
import SocialMedia from '../../Components/SocialMidia'

import Logo from '../img/Logo.png'
import Divisao from '../img/Polygon.png'
import LogoRoxo from '../img/LogoColor.png'

function Repositories() {
    return(
        <>
            <div>
                <nav>
                    <img src={Logo} alt="logo da Bitwise"></img>
                    <Input />
                    <SocialMedia />
                </nav> 
            </div>
            <div>
                <img src="#"></img>
                <h1>name</h1>
                <div>
                    <h2>numero</h2>
                    <h3>Repositórios</h3>
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Nome do Repositório</th>
                        <th>Qtd de commit</th>
                        <th>Msg do último commit</th>
                        <th>Hash do último commit</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <footer>
                <div>
                    <img src= { Divisao } alt="Linha de divisão"></img>
                </div>
                <div>
                    <img src= { LogoRoxo } alt="Logo da Bitwise Roxo"></img>
                    <p>Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.</p>
                    <div>
                        <h4>Brasil</h4>
                        <p>R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim • Sorocaba/SP</p>
                    </div>
                    <div>
                       <h4>Canadá</h4> 
                       <p>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec</p>
                    </div>
                    <hr />
                    <p>Todos os direitos reservados - 2020</p>
                    <img></img>
                    <button>Voltar ao Topo</button>
                </div>
            </footer>
        </>    
    )
}

export default Repositories