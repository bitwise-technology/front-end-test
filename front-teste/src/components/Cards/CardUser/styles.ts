import styled from 'styled-components';

import userPhoto from '../../../assets/images/foto-user.png';

export const Container = styled.div`
  display: flex;
`;

export const UserPhoto = styled.img.attrs({
  src: userPhoto,
})``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 32px;
`;

export const UserName = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  font-family: 'Gotham-Bold';
  color: #373435;
`;
