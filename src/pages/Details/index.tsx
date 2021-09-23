import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import InputBar from '../../components/InputBar';
import Logo from '../../components/Logo';
import Repo from '../../components/Repo';
import { GetUser } from '../../services/graphQL';
import { User } from '../../services/models';
import Footer from '../../components/Footer';
import * as Styled from './styles';

function Details() {
  const location:any = useLocation();
  const [input, setInput] = useState<string>('');
  const firstUpdate = useRef(true);
  const [user, setUser] = useState<User>(location.state.user);
  const [getUser, { error, data}] = useLazyQuery(GetUser, {
    variables: {
      login: input
    },
    onCompleted() {
      if(data.user) {
        setUser(data.user);
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
    <Styled.Container>
      <Styled.Header>
        <Logo/>
        <view style={{minWidth: '50%'}}>
          <InputBar submit={handleSubmit} />
          {error &&
            <p>{error.message}</p>
          }
        </view>
      </Styled.Header>
      
      <Styled.ProfileContainer>
        <Styled.ProfileImage src={user.avatarUrl} alt="" />
        
        <Styled.NameLabel>
          {user.name}
        </Styled.NameLabel>

        <Styled.RepoCountContainer>
          {user.repositories.totalCount}<br/>
          Repositórios
        </Styled.RepoCountContainer>
      </Styled.ProfileContainer>

      <Styled.ReposContainer>
        <Styled.Infos>
        <Styled.InfosLabel>NOME DO REPOSITÓRIO</Styled.InfosLabel>
        <Styled.InfosLabel>QTD DE COMMIT</Styled.InfosLabel>
        <Styled.InfosLabel>MSG ULTIMO COMMIT</Styled.InfosLabel>
        <Styled.InfosLabel>HASH DO ULTIMO COMMIT</Styled.InfosLabel>
        </Styled.Infos>

        {
          user.repositories.nodes.map((element, index) => {
            return (
              <Repo
                key={index}
                name={element.name}
                qtd_commit={element.defaultBranchRef.target.history.totalCount}
                msg={element.defaultBranchRef.target.history.nodes[0].message}
                hash={element.defaultBranchRef.target.history.nodes[0].abbreviatedOid}
              />
            );
          })
        }
      </Styled.ReposContainer>
      
      <Footer/>
    </Styled.Container>
  );  
}

export default Details;
