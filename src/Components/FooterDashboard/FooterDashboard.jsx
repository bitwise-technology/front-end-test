import React from "react";
import Logo from "../Logo/Logo";
import logoSvg2 from "../../svg/Logo2.svg";
import { FooterDash, PreFooter } from "./styled";
import Social from "../Social/Social";

const FooterDashboard = () => {
  return (
    <>
      <PreFooter />
      <FooterDash>
        <footer>
          <div className="logoDescription">
            <Logo src={logoSvg2} />
            <p>
              Acreditamos no valor da tecnologia e no impacto positivo que a
              transformação digital exerce sobre a sociedade, mudando o nosso
              dia a dia, facilitando atividades comuns e acelerando os negócios.
            </p>
          </div>

          <div className="places">
            <div>
              <h2>BRASIL</h2>
              <p>
                R. Raphael Dias da Silva, 75 3° andar - sala 306 e 308 Campolim
                - Sorocaba/SP
              </p>
            </div>
            <div>
              <h2>CANADÁ</h2>
              <p>830, Av. Enerst-Gagnon, Bureau 315, sala 609 Quebec</p>
            </div>
          </div>
        </footer>
        <div className="border"></div>

        <div className="footerBottom">
          <p>Todos os direitos resevardos - 2020</p>
          <Social />
          <a href="/">Voltar ao topo</a>
        </div>
      </FooterDash>
    </>
  );
};

export default FooterDashboard;
