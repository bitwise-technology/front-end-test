import React, { useState } from "react";

interface ContextType {
  text: string;
  setText: Function;
  showAlert: boolean;
  setShowAlert: Function;
}

export const AlertContext = React.createContext<Partial<ContextType>>({});

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
    <AlertContext.Provider value={alertContextValue}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
