import React from 'react';
import { useQuery, gql } from '@apollo/client';

import classes from './User.module.css';

const GET_INFOS = gql` 
  query  User($login: String!){
    user(login: $login) {
      name,
      avatarUrl,
      repositories(last:20){
        totalCount,
        nodes{
          defaultBranchRef{
            target{
              ... on Commit{
                history(first: 1){
                  edges{
                    node{
                      ... on Commit{
                        repository{
                          name
                        }
                        history{
                          totalCount
                        },
                        message,
                        abbreviatedOid
                    }
                  }
                }
              }
            }
          }
          
        }
      } 	
  }
}

}
`;

const User = ({login}) => {
  const { loading, error, data } = useQuery(GET_INFOS, ({ variables: { login }}));

  if(loading) return <p>Loading</p>
  if(error) return <p>Error</p>;

  return (
    <div>
      <div className={classes.User}>
        <img className={classes.Avatar} src={data.user.avatarUrl} />
        <div className={classes.UserInfo}>
          <h2>{data.user.name}</h2>
          <div className={classes.TotalRepositories}>
            <span><strong>{data.user.repositories.totalCount}</strong></span>
            <span className={classes.Repository}>Repositórios</span>
          </div>
        </div>
        
      </div>
      <div className={classes.Table}> 
          <div className={classes.HeaderList}>
            <span>NOME DO REPOSITÓRIO</span>
            <span>QTD DE COMMIT</span>
            <span>MSG ULTIMO COMMIT</span>
            <span>HASH DO ULTIMO COMMIT</span>
          </div>
          {data ? data.user.repositories.nodes.map(repository => {
            return (
              <div className={classes.DataList} key={repository.defaultBranchRef.target.history.edges[0].node.abbreviatedOid}>
                <span>{repository.defaultBranchRef.target.history.edges[0].node.repository.name}</span>
                <span>{repository.defaultBranchRef.target.history.edges[0].node.history.totalCount}</span>
                <span>{repository.defaultBranchRef.target.history.edges[0].node.message}</span>
                <span>{repository.defaultBranchRef.target.history.edges[0].node.abbreviatedOid}</span>
              </div>
            )
          }): null}
      </div>
    </div>
  )
}


export default User ;