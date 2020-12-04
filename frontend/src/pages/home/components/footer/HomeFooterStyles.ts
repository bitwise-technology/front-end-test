import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 219px;
  width: 90%;
  display: flex;
  justify-content: center;
  transform: translateY(-50px);

  & > :first-child {
    margin-right: 11px;
  }

  @media screen and (max-width: 1366px){
    transform: translateY(-100px);

    margin-top: 200px;
  } 
  

  @media screen and (max-width: 700px){
    margin-top: 150px;
  } 
`;
