import React from 'react'

import Input from '../../Components/Input'
import SocialMedia from '../../Components/SocialMidia'

import Logo from '../img/Logo.png'
import Divisao from '../img/Polygon-1.png'
import LogoRoxo from '../img/LogoColor.png'

import * as W from './styled'

function Repositories() {
    return (
        <>
            <W.Container>
                <div>
                    <nav>
                        <W.LogoBitwise src={Logo} alt="logo da Bitwise"></W.LogoBitwise>
                        <Input />
                        <SocialMedia />
                    </nav>
                </div>
                <div>
                    <W.Avatar src="#"></W.Avatar>
                    <W.TitleName>Fernandinho Carrara</W.TitleName>
                    <W.DivNumber>
                        <W.ReposNumber>1000</W.ReposNumber>
                        <W.Subtitle>Repositórios</W.Subtitle>
                    </W.DivNumber>
                </div>
                <W.TableDiv>
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
                </W.TableDiv>
            </W.Container>
            <footer>
                <div>
                    <W.ImgFooter src={Divisao} alt="Linha de divisão"></W.ImgFooter>
                </div>
                <div>
                    <W.LogoPurple src={LogoRoxo} alt="Logo da Bitwise Roxo"></W.LogoPurple>
                    <W.Paragraph>Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.</W.Paragraph>
                    <div>
                        <h4>Brasil</h4>
                        <W.Paragraph>R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim • Sorocaba/SP</W.Paragraph>
                    </div>
                    <div>
                        <h4>Canadá</h4>
                        <p>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec</p>
                    </div>
                    <W.Line />
                    <p>Todos os direitos reservados - 2020</p>
                    <img></img>
                    <button>Voltar ao Topo</button>
                </div>
            </footer>
        </>
    )
}

export default Repositories