import styled from "styled-components";

export const View = styled.div``;

export const ViewCenter = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const ViewSocial = styled(ViewCenter)`
    flex-direction: row;
    margin-top: 200px;
`;

export const LeftContent = styled.div`
    padding-left: 8%;
    margin-top: 5%;
`;

export const Content = styled.div`
`;

export const ViewSearch = styled.div`
    margin-top: 10%;
`;

export const Polygon = styled.img`
    position: absolute;
    width: 785px;
    height: 647px;
    right: 0px;
    top: 0px;
`;

export const Logo = styled.img`
    width: 134px;
    height: 48px;
`;

export const Computer = styled.img`
    position: absolute;
    width: 443px;
    height: 406px;
    right: 110px;
    top: 130px;
    background: url(../images/polygon.png);
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
    width: 420px;
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
    background: #5A3D5C;
    height: 100%;
    border: 0px;
    width: 40px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
`;

export const Bold = styled.b``;