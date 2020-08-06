import styled from "styled-components";

export const View = styled.div``;

export const Nav = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const Container = styled.div`
    padding: 50px 150px;
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
`;

export const Logo = styled.img`
    width: 134px;
    height: 48px;
`;

export const Logo2 = styled.img`
    width: 98px;
    height: 36px;
`;

    
export const UserImg = styled.img`
    width: 120px;
    height: 120px;
    background-blend-mode: normal;
    filter: drop-shadow(0px 2px 4px rgba(84, 84, 89, 0.14));
    border-radius: 4px;
`;

export const ViewUserInfo = styled.div`
    margin-top: 50px;
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
`;

export const SearchText = styled.label`
    font-size: 2em;
    color: #5A3D5C;
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