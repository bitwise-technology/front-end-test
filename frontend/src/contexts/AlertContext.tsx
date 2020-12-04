import React, { useState } from "react";

interface ContextType {
  text: string;
  setText: Function;
  showAlert: boolean;
  setShowAlert: Function;
}

export const Context = React.createContext<Partial<ContextType>>({});

const AlertProvider: React.FC = ({ children }) => {

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const alertContextValue = {
    showAlert,
    setShowAlert,
    text,
    setText
  };

  return (
    <Context.Provider value={alertContextValue}>{children}</Context.Provider>
  );
};

export default AlertProvider;
