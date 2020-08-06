/* Importação de bibliotecas utilizadas */
import styled from "styled-components";


/* 
  Arquivo de gerenciamento dos estilos da aplicação
  Utilizado a biblioteca styled-components
*/

export const View = styled.div``;

export const Nav = styled.div`
    padding: 50px 150px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 950px) {
        padding: 50px 100px;
    }
    @media(max-width: 830px) {
        padding: 50px 30px;
    }
    @media(max-width: 715px) {
        padding: 30px 5px;
    }

`;

export const ContainerRepositories = styled.div`
    background: #FFFFFF!important;
    border-radius: 6px!important;
    padding: 20px!important;
    margin-top: 40px;
    width: 100%;
    box-shadow: 0px 2px 38px rgba(84,84,89,0.14);
    label:nth-child(1) {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #3D5879;
        margin-bottom: 20px;
    }
`;
export const HeaderTable = styled.thead`
    margin-top: 50px;
    th {
        font-family: Roboto!important;
        font-style: normal!important;
        font-weight: bold;
        font-size: 15px!important;
        line-height: 18px!important;
        text-transform: uppercase;
        color: #657FA0;
    }
`;

export const BodyTable = styled.tbody`
    margin-top: 50px;
    tr {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
        color: #3D5879;
    }
`;

export const ViewCenter = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
export const ViewNumberRepositories = styled(ViewCenter)`
    background: #FFFFFF;
    box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
    border-radius: 4px;
    border-left: 5px solid #490248;
    padding: 0 10px;
    label:nth-child(1) {
        font-weight: bold;
        font-size: 20px;
        margin: 0;
    }
    label:nth-child(2) {
        font-family: Gotham;
        font-size: 16px;
        line-height: 13px;
        color: #878790;
        margin-top: 2px;
    }

`;
export const ViewSocial = styled(ViewCenter)`
    flex-direction: row;
    margin-top: 200px;
    @media(max-width: 360px) {
        margin-top: 100px;
    }
`;

export const ViewSocialToast = styled(ViewSocial)`
    margin:10px;
`;

export const LeftContent = styled.div`
    padding-left: 8%;
    padding-top: 5%;
    padding-top: 5%;
`;

export const Content = styled.div`
    height: 100%;
    margin:0; 
`;

export const ContentResult = styled.div`
    height: 100%;
    margin:0; 
    padding: 30px 150px;
`;

export const Container = styled.div`
    min-height: 100%;
    margin:0; 
    position:relative;
`;

export const ViewSearch = styled.div`
    margin-top: 10%;
`;

export const Polygon2 = styled.img`
    width: 100%;
    height: 70px;
    
`;

export const Polygon = styled.img`
    overflow: hidden;
    position: absolute;
    width: 785px;
    height: 647px;
    right: 0px;
    top: 0px;
    @media(max-width: 1100px) {
        width: 550px;
        height: 430px;
    }
    @media(max-width: 900px) {
        width: 400px;
        height: 300px;
    }
    @media(max-width: 780px) {
        width: 300px;
        height: 200px;
    }
    @media(max-width: 490px) {
        width: 250px;
        height: 150px;
    }
    @media(max-width: 360px) {
        width: 220px;
        height: 130px;
    }
`;

export const Computer = styled.img`
    overflow: hidden;
    position: absolute;
    width: 443px;
    height: 406px;
    right: 110px;
    top: 130px;
    @media(max-width: 1100px) {
        width: 300px;
        height: 260px;
    }
    @media(max-width: 900px) {
        width: 200px;
        height: 180px;
    }
    @media(max-width: 780px) {
        width: 150px;
        height: 130px;
        right: 30px;
        top: 60px;
    }
    @media(max-width: 490px) {
        width: 110px;
        height: 90px;
        right: 40px;
        top: 30px;
    }
    @media(max-width: 490px) {
        width: 100px;
        height: 80px;
        right: 40px;
        top: 30px;
    }
`;

export const Logo = styled.img`
    width: 134px;
    height: 48px;
    @media(max-width: 360px) {
        width: 100px;
        height: 40px;
    }
`;

export const LogoResult = styled(Logo)`
    @media(max-width: 470px) {
        width: 100px;
        height: 36px;
    }
    @media(max-width: 420px) {
        width: 65px;
        height: 30px;
    }
`;

export const Logo2 = styled.img`
    width: 98px;
    height: 36px;
    @media(max-width: 420px) {
        width: 70px;
        height: 30px;
    }
`;

    
export const UserImg = styled.img`
    width: 120px;
    height: 120px;
    background-blend-mode: normal;
    filter: drop-shadow(0px 2px 4px rgba(84, 84, 89, 0.14));
    border-radius: 4px;
`;

export const ViewUserInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items:center;
`;

export const UserName = styled.label`
    font-family: Gotham;
    font-style: normal;
    font-weight: bold;
    color: #657FA0;
    font-size: 22.2751px;
    line-height: 175%;
`;

export const SearchText = styled.label`
    font-size: 2em;
    color: #5A3D5C;
    @media(max-width: 650px) {
        font-size:1.6em;
    }
    @media(max-width: 580px) {
        font-size:1.3em;
    }
    @media(max-width: 435px) {
        font-size:1.1em;
    }
    @media(max-width: 360px) {
        font-size:1.1em;
        margin-top: 80px;
    }
`;

export const SearchInput = styled.div`
    margin-top: 30px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF!important;
    border-radius: 4px;
    box-shadow: 0px 2px 3px 1px #b7b7b7;
    width: 400px;
    height: 36px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    input:focus {
        outline: none;
    };
    input{
        border: 0px;
        height: 100%;
        width: 100%;
        margin-left: 14px;
        color: #4F4F4F;
    };
    @media(max-width: 580px) {
        width: 280px;
    }
    @media(max-width: 435px) {
        width: 230px;
    }
    @media(max-width: 360px) {
        font-size:1.1em;
        margin-top: 16px;
    }
`;

export const SearchInputResult = styled(SearchInput)`
    @media(max-width: 665px) {
        width: 250px;
    }
    @media(max-width: 515px) {
        width: 200px;
    }
    @media(max-width: 420px) {
        width: 180px;
        height: 30px;
    }
`;

export const GitButton = styled.button`
    background: ${props => props.loading === "true" ? "#4F4F4F" : "#5A3D5C"};
    height: 100%;
    border: 0px;
    width: 40px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    justify-content: center;
    align-items: center;
    display: flex;
    &:active {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

export const Footer = styled.footer`
    background: #382039;
    bottom: 0;
`;

export const FooterTop = styled.div`
    padding: 50px 10%;
    flex-direction: row;
    display:flex;
    justify-content: space-between;
    div {padding: 0 30px;}
    padding-bottom: 30px;
    border-bottom: 3px solid #A51C92;

    @media(max-width: 870px) {
        padding: 50px 10px;
        div {padding 0 24px;}
    }
    @media(max-width: 620px) {
        padding: 50px 4px;
        div {padding 0 10px;}
    }
    @media(max-width: 400px) {
        padding: 50px 0px;
        div {padding 0 0px;}
    }

`;

export const FooterBottom = styled(FooterTop)`
    div {padding: 0 30px;}
    border-bottom: 0px;
    margin-top: 50px;

`;

export const TextFooter = styled.label`
    font-family: Gotham;
    font-style: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ca5abb;
    letter-spacing: 1px;
    margin: 0;
`;

export const Top = styled.a`
    font-family: Gotham;
    font-style: normal;
    font-size: 12px;
    line-height: 20px;
    color: #ca5abb!important;
    letter-spacing: 1px;
    margin: 0;
    cursor: pointer;
`;

export const TextFooter2 = styled(TextFooter)`
    font-weight: bold;
    color: white;
`;

export const Bold = styled.b``;