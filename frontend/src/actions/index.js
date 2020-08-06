import axios from "axios";
import msg from "../components/Toast";
import {toast} from "react-toastify";

export const getUser = (user) => {
    return dispatch => { 

        if(!user) toast(msg("Informe um nome de usuário!"));
        
        else {

          dispatch({type: "GETTING_USER"});

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
          axios.post("https://api.github.com/graphql", {query: query}, {
              headers: { 'Authorization': `Bearer ecaa60b47a98fb92f66c31dce067dd1f7fb5aa58`}
          })
          .then(response => {
              if(response.data.data.user){
                
                if(response.data.data.user.repositories.nodes.length == 0){
                  toast(msg("Esse usuário não possui nenhum repositório."))
                }

                dispatch({type: "FINISH_WITH_USER", payload:response.data.data})

              }else{
                toast(msg("Nenhum usuário encontrado!"));
                dispatch({type: "FINISH_WITHOUT_USER"})
              }
          })
          .catch(err => console.log(err))
        }
    }
}