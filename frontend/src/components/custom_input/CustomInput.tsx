import React, { InputHTMLAttributes } from "react";

import { StyledInput } from "./CustomInputStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  userToFetchFromGithub: string;
  setUserToFetchFromGithub: Function;
  fetchUser?: Function;
}

const CustomInput: React.FC<InputProps> = ({
  userToFetchFromGithub,
  setUserToFetchFromGithub,
  fetchUser,
  ...otherProperties
},) => {
  const handleInputChange = ({
    target: input,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const user = input.value;

    setUserToFetchFromGithub(user);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      fetchUser && fetchUser(userToFetchFromGithub);
    }
  };

  return (
    <StyledInput
      {...otherProperties}
      autoComplete='off'
      value={userToFetchFromGithub}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    ></StyledInput>
  );
};

export default CustomInput;
