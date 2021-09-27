import React from "react";
import Social from "../../Components/Social/Social";
import { AlertContainer, Alertdiv } from "./styled";

const Alert = () => {
  return (
    <AlertContainer>
      <Alertdiv>
        <h2>Usuário não encontrado</h2>

        <div className="social">
          <p>Enquanto isso, acompanhe a Bitwise nas redes sociais:</p>
          <Social primary={false} />
        </div>
      </Alertdiv>
    </AlertContainer>
  );
};

export default Alert;
