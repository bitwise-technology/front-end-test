import React, { createContext, useState } from 'react';

export const UserContext = createContext({});
export const UserProvider = ({ children }: { children: React.ReactElement }) => {
	const [user, setUser] = useState({});

	return <UserContext.Provider value={{ user, setUser }}></UserContext.Provider>;
};
