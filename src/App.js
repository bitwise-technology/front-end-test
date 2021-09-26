import React, { useState } from "react";
import { useQuery } from "react-query";
import useDebounce from "./hooks/useDebounce";
import { gql, GraphQLClient } from "graphql-request";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Dashborad/Dashoborad.jsx";

function App() {
  const [username, setUsername] = useState("");

  const endpoint = "https://api.github.com/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  function useInfo(userName) {
    return useQuery(["info", userName], async () => {
      const { repositoryOwner: data } = await graphQLClient.request(
        gql`
            query {
              repositoryOwner(login: ${JSON.stringify(userName)}) {
                ... on User {
                  name
                  avatarUrl
                  repositories(first: 100) {
                    repositoryCount: totalCount
                    list: nodes {
                      name
                      ... on Repository {
                        refs(first: 1, refPrefix: "refs/heads/") {
                          edges {
                            repo: node {
                              branch: name
                              target {
                                ... on Commit {
                                  commits: history(first: 1) {
                                    totalCommits: totalCount
                                    lastCommit: edges {
                                      node {
                                        hash: oid
                                        title: messageHeadline
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
                }
              }
            }
          `
      );

      if (data !== null) {
        return data;
      } else {
        throw new Error("user not found");
      }
    });
  }

  const debouncedSearchString = useDebounce(username, 1000);
  const { data, isLoading, error } = useInfo(debouncedSearchString);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home userName={username} updateUserName={setUsername} />}
      />
      <Route
        path="Dashboard"
        element={
          <Dashboard
            userName={username}
            data={data}
            isLoading={isLoading}
            updateUserName={setUsername}
            error={error}
          />
        }
      />
    </Routes>
  );
}

export default App;
