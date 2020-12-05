import React, { useState } from "react";

interface ContextType {
  text: string;
  setAlertText: Function;
  showAlert: boolean;
  setShowAlert: Function;
}

export const AlertContext = React.createContext<Partial<ContextType>>({});

const AlertProvider: React.FC = ({ children }) => {

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [text, setAlertText] = useState<string>('');

  const alertContextValue = {
    showAlert,
    setShowAlert,
    text,
    setAlertText
  };

  return (
    <AlertContext.Provider value={alertContextValue}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
