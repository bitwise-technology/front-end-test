import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USER_INFO } from "../graphql/queries";

export const UserContext = React.createContext<ContextType>({});

export interface Repositories {
  totalCount: number;
  edges: [
    {
      node: {
        name: string;
        ref: {
          target: {
            history: {
              totalCount: number;
              nodes: [
                {
                  message: string;
                  abbreviatedOid: string;
                }
              ];
            };
          };
        };
      };
    }
  ];
}

export interface User {
  name: string;
  avatarUrl: string;
  repositories: Repositories;
}

export interface ContextType {
  user?: User;
  wasUserFetchedSuccesfully?: boolean;
  fetchUser?: (user: string) => void;
}

const UserProvider: React.FC = ({ children }) => {
  const [getUserInfo, { data, error }] = useLazyQuery(GET_USER_INFO);

  const fetchUser = (user: string) => {
    getUserInfo({
      variables: {
        user: user,
      },
    });
  };

  const [providerObject, setNewProviderObject] = useState<ContextType>({
    user: undefined,
    wasUserFetchedSuccesfully: false,
    fetchUser
  });

  useEffect(() => {
    if (data) {
      setNewProviderObject((oldProviderObject) => ({
        ...oldProviderObject,
        user: data.user,
        wasUserFetchedSuccesfully: true,
      }));
    }
  }, [data, setNewProviderObject]);

  useEffect(() => {
    if (error) {
      setNewProviderObject((oldProviderObject) => ({
        ...oldProviderObject,
        wasUserFetchedSuccesfully: false,
      }));
    }
  }, [error, setNewProviderObject]);

  return (
    <UserContext.Provider value={providerObject}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
