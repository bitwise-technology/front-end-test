/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styled.css";

import FooterLogo from "../../assets/image/LogoFooter.svg";
import Sociais from "../../assets/image/Sociais.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="separator" />
      <div className="contant">
        <div className="section">
          <img src={FooterLogo} alt="" />
          <p>
            Acreditamos no valor da tecnologia e no impacto positivo que a
            transformação digital exerce sobre a sociedade, mudando o nosso dia
            a dia, facilitando atividades comuns e acelerando os negócios.
          </p>

          <div className="localization">
            <h2>BRASIL</h2>
            <p>
              R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim •
              Sorocaba/SP
            </p>
          </div>

          <div className="localization">
            <h2>CANADÁ</h2>
            <p>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec </p>
          </div>
        </div>
        <div className="line" />
        <div className="rodape">
          <p>Todos os direitos reservados - 2020</p>
          <img src={Sociais} alt="" />
          <a href="#">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
