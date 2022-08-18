import styled from 'styled-components'



export const FooterTop = styled.footer`

    background: #290E25;
    position: absolute;
    width: 1440px;
    height: 496px;
    left: 0px;
    top: 1440px;

    > img {

      position: absolute;
      width: 946px;
      height: 1px;
      left: 247px;
      top: 305px;

      background: #E9CDE4;
    }
    > p {
      position: absolute;
      width: 191px;
      height: 16px;
      left: 247px;
      top: 368px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;


      color: #E9CDE4;

    }

    > a {
    position: absolute;
    width: 96px;
    height: 16px;
    left: 1081px;
    top: 368px;


    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;


    color: #E9CDE4;
    }

    > span {
      /* position: absolute; */
      width: 94px;
      height: 20px;
      left: 698px;
      top: 367px;

  }

`;

export const PolygonFooter = styled.div`

  img {
    position: absolute;
    width: 1440px;
    height: 106px;
    left: 0px;
    top: 0px;
  }

`;




export const LogoFooter = styled.div`

  img {
    width: 98px;
    height: 36px;
    position: absolute;
    left: 247px;
    top: 191px;

  }
`;

export const TextFooter = styled.label`
    position: absolute;
    width: 304px;
    height: 64px;
    left: 418px;
    top: 177px;


/* Small body */
    color: #E9CDE4;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
`;


export const TextFooter2 = styled(TextFooter)`
    position: absolute;
    width: 169px;
    height: 64px;
    left: 833px;
    top: 177px;


    /* Small body */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */


    /* White */

    color: #F0F0F0;
`;
export const FooterBottom = styled.div`
    border-bottom: 0px;
`;

// export const SocialMediaFooter = styled.div`
//     position: absolute;
//     height: 24px;
//     left: 673px;
//     top: 620px;
//     border-radius: 0px;
//     color: #42163A;


// `;




