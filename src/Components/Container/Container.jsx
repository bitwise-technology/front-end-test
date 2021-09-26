import React from "react";
import ContainerSection from "./styled";

export const Container = ({ children}) => {
  return (
    <>
      <ContainerSection>{children}</ContainerSection>
    </>
  );
};

export default Container;
