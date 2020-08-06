/* Bibliotecas necessárias */
import axios from "axios";
import Show from "../components/Toast";
import {toast} from "react-toastify";

/* 
  Função para realização da requisição à API GRAPHQL do Github
  @param user = login do usuário pesquisado
  @return = objeto contendo informações do usuário e seus repositórios

*/

export const getUser = (user) => {

    return dispatch => { 

        /* Verifica se algum usuário foi informado */
        if(!user) toast(Show("Informe um nome de usuário!"));
        
        else {

          /* Iniciando loading */
          dispatch({type: "GETTING_USER"});

          /* Criando a query do Graphql */
          const query = `
          query{
              user(login: "${user}") {
                  avatarUrl
                  name
                  repositories(first:100) {
                      totalCount
                      nodes {
                          name
                          ref(qualifiedName: "master") {
                            target {
                              ... on Commit {
                                id
                                history {
                                  totalCount
                                  edges {
                                    cursor
                                    node {
                                      messageHeadline
                                      oid
                                      message
                                      author {
                                        name
                                        email
                                        date
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

          /* Iniciando a requisição utilizando o axios e enviando a query como parâmetro */
          axios.post("https://api.github.com/graphql", {query: query}, {

              /* Necessário utilizar um token válido do github para conseguir realizar a requisição */
              headers: { 'Authorization': `Bearer `}
          })
          .then(response => {
              
              /* Verificando se houve retorno */
              if(response.data.data.user){

                /* Verificando se o usuário possui repositórios */
                if(response.data.data.user.repositories.nodes.length == 0){
                  toast(Show("Esse usuário não possui nenhum repositório."));
                }

                /* Despachando o objeto requisitado */
                dispatch({type: "FINISH_WITH_USER", payload:response.data.data});

              }else{
                toast(Show("Nenhum usuário encontrado!"));
                dispatch({type: "FINISH_WITHOUT_USER"});
              }
          })
          .catch(err => {
            console.log(err);
            dispatch({type: "FINISH_WITHOUT_USER"});
          })
        }
    }
}