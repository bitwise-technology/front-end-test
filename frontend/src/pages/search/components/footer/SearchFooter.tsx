import React from "react";

import { ReactComponent as BitwiseLogo } from "../../../../assets/bitwise_logo_2.svg";
import SocialMedia from "../../../../components/social_media/SocialMedia";

import {
  StyledFooter,
  BitwiseInfo,
  BitwiseMotto,
  BitwiseLocation,
  StyledHorizontalLineContainer,
  CopyrightGroup,
  CopyrightText,
  BackToTopText,
  IconsContainer,
} from "./SearchFooterStyles";


const SearchFooter = () => {
  return (
    <StyledFooter>
      <BitwiseInfo>
        <BitwiseLogo />
        <BitwiseMotto>
          Acreditamos no valor da tecnologia e no impacto positivo que a
          transformação digital exerce sobre a sociedade, mudando o nosso dia a
          dia, facilitando atividades comuns e acelerando os negócios.
        </BitwiseMotto>

        <BitwiseLocation>
          BRASIL
          <br />
          R. Raphael Dias da Silva, 75
          <br />
          3º andar • Sala 306 e 308
          <br />
          Campolim • Sorocaba/SP
          <br />
        </BitwiseLocation>

        <BitwiseLocation>
          CANADÁ
          <br />
          830, Av. Ernest-Gagnon,
          <br />
          Bureau 315, Sala 609
          <br />
          Quebec
          <br />
        </BitwiseLocation>
      </BitwiseInfo>

      <StyledHorizontalLineContainer />

      <CopyrightGroup>
        <CopyrightText>Todos os direitos reservados - 2020</CopyrightText>
        <IconsContainer>
          <SocialMedia />
        </IconsContainer>
        <BackToTopText>VOLTAR AO TOPO</BackToTopText>
      </CopyrightGroup>
    </StyledFooter>
  );
};

export default SearchFooter;
