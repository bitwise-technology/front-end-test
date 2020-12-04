import React, { useState } from "react";

export const Context = React.createContext<ContextType>({user: undefined, setUser: undefined});

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
  setUser?: (user: User) => void;
}

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const userObject = {
    user,
    setUser,
  };

  return <Context.Provider value={userObject}>{children}</Context.Provider>;
};

export default UserProvider;
