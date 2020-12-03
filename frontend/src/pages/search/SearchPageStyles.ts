import styled from "styled-components";

import { ReactComponent as ThreeDots } from "../../assets/three_dots_icon.svg";


export const PageContainer = styled.div`
  background: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);
`;

export const RepositoriesInfoContainer = styled.div`
  margin-left: 150px;
  margin-right: 191px;
  margin-top: 37px;
  width: 1102px;
  max-height: 347px;
  background-color: #fff;
`;

export const RepositoriesActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 17px 32px;

`;

export const RepositoriesTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: #3d5879;
`;

export const StyledThreeDots = styled(ThreeDots)`
  margin-right: 6px;
`;
