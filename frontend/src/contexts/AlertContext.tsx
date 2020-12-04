import React, { useState } from "react";

interface ContextType {
  showAlert: boolean;
  setShowAlert: Function;
}

export const Context = React.createContext<Partial<ContextType>>({});

const AlertProvider: React.FC = ({ children }) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const alertContextValue = {
    showAlert,
    setShowAlert,
  };

  return (
    <Context.Provider value={alertContextValue}>{children}</Context.Provider>
  );
};


export default AlertProvider