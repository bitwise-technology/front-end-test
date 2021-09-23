import React from 'react';
import * as Styled from './styles';
import FooterBg from '../../assets/FooterBg.svg';
import FooterLogo from '../../assets/FooterLogo.svg';
import SocialMediaIcons from '../SocialMediaIcons';

const Footer: React.FC = () => {

  function ScrollTop() {
    window.scrollTo(0, 0);
    document.getElementById("details")?.scroll({top:0, behavior:'smooth'});
  }

  return (
    <Styled.Container>
      <Styled.Image src={FooterBg} alt="" />

      <Styled.InfoContainer>
        <Styled.Logo src={FooterLogo} alt="" />

        <Styled.Text>
          Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre
          a sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.
        </Styled.Text>

        <Styled.ShortText>
          <Styled.TextWhite>
            BRASIL
          </Styled.TextWhite>
          R. Raphael Dias da Silva, 75
          3º andar • Sala 306 e 308
          Campolim • Sorocaba/SP
        </Styled.ShortText>

        <Styled.ShortText>
          <Styled.TextWhite>
            CANADÁ
          </Styled.TextWhite>
          830, Av. Ernest-Gagnon,
          Bureau 315, Sala 609
          Quebec
        </Styled.ShortText>
      </Styled.InfoContainer>

      <Styled.BackToTopContainer>
        <Styled.Text>
          Todos os direitos reservados-2020
        </Styled.Text>

        <SocialMediaIcons/>

        <Styled.BackToTopButton
          onClick={ScrollTop}
        >
          Voltar para o topo
        </Styled.BackToTopButton>
      </Styled.BackToTopContainer>
    </Styled.Container>
  );
}

export default Footer;