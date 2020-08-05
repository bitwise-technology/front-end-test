import axios from "axios";

export const getUser = (user) => {
    return dispatch => {
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
            headers: { 'Authorization': `Bearer b11f9ab05b45d2175d50f0c6852c36bb71cc63a4`}
        })
        .then(response => {
            dispatch({type: "FINISH_USER", payload:response.data.data})
        })
        .catch(err => console.log(err))
    }
}