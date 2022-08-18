import React from "react";
import {  FooterTop, LogoFooter, PolygonFooter, TextFooter, TextFooter2} from "../Footer/styles"
import  PolygonImg from "../../assets/images/polygonFooter.png";
import logoBitwise from "../../assets/images/logoFooter.png";
import retanguloFooter from "../../assets/images/retangulo.png";

const Footer: React.FC = () => {
  return (
    <FooterTop>
        <PolygonFooter>
          <img src={PolygonImg} alt="polygon" />
        </PolygonFooter>
            <LogoFooter>
              <img src={logoBitwise} alt="logo-bitwise" />
              <TextFooter>Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a sociedade, mudando o nosso dia a dia,
                facilitando atividades comuns e acelerando os negócios.</TextFooter>
            </LogoFooter>
            <TextFooter2>BRASIL <br/>R. Raphael Dias da Silva, 753º andar • Sala 306 e 308 Campolim • Sorocaba/SP</TextFooter2>
            <TextFooter2 style={{width:"151px", height:"64px", left:"1028px", top:"177px"}}>CANADÁ<br />830, Av. Ernest-Gagnon,
            Bureau 315, Sala 609 Quebec</TextFooter2>

        <img src={retanguloFooter} alt="retangulo" />
        <p>
          Todos os direitos reservados - 2020
        </p>
        <a href="/">
            VOLTAR AO TOPO
        </a>
    </FooterTop>
  );
};



export default Footer;
