import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import landing_image from '../../assets/Landing_Image.svg';
import InputBar from '../../components/InputBar';
import { useHistory } from "react-router-dom";
import { useLazyQuery } from '@apollo/client';
import { GetUser } from '../../services/graphQL';
import Logo from '../../components/Logo';
import ErrorText from '../../components/Error';
import SocialMediaIcons from '../../components/SocialMediaIcons';

function Landing() {
  const [input, setInput] = useState<string>('');
  const firstUpdate = useRef(true);
  const history = useHistory();
  const [getUser, { error, data}] = useLazyQuery(GetUser, {
    variables: {
      login: input
    },
    onCompleted() {
      if(data.user) {
        history.push(`/Details/`, data)
      }
    }
  });

  function handleSubmit(value: string) {
    setInput(value);
  }

  useEffect(() => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    getUser();
    console.log(input);
  }, [input]);

  return (
    <Styled.Container id="landing-page">
      <Styled.ContentContainer>
        <Logo/>

        <Styled.Description>
          Buscar um usuário no <Styled.Bold>Github</Styled.Bold>
          <br />
          ficou muito <Styled.Bold>fácil!</Styled.Bold>
        </Styled.Description>

        <view style={{minWidth: '100%'}}>
          <InputBar submit={handleSubmit} />
          {error &&
            <ErrorText>{error.message}</ErrorText>
          }
        </view>

      </Styled.ContentContainer>

      <Styled.ImageContainer>
        <Styled.LandingImage src={landing_image} alt="" />
      </Styled.ImageContainer>

      <Styled.Footer>
        <SocialMediaIcons/>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Landing;