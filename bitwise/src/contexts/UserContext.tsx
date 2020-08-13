import React, { createContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext({});
export const UserProvider = ({ children }: { children: React.ReactElement }) => {
	const [user, setUser] = useLocalStorage('user', null);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
