import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiGithubLine } from 'react-icons/ri';
import ErrorText from '../Error';
import * as Styled from './styles';

interface InputProps {
  submit(value: string): void;
}

const InputBar: React.FC<InputProps> = ({ submit }) => {
  const [input, setInput] = useState<string>('');
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  function handleSubmit() {
    if(input.length <= 0) {
      return setIsEmptyInput(true);
    }
    
    submit(input);
  }

  return (
    <view>
      <Styled.InputContainer>
        <Styled.SearchButton
          onClick={handleSubmit}>
          <AiOutlineSearch size={'50%'} color={'#4F4F4F'} />
        </Styled.SearchButton>

        <Styled.Input
          onChange={event => [
            setInput(event.target.value),
            event.target.value.length > 0 && isEmptyInput === true
              ? setIsEmptyInput(false)
              : null
          ]}
          placeholder='Buscar usuário'
        />

        <Styled.GitHubButton
          onClick={handleSubmit}
        >
          <RiGithubLine size={'50%'} color='white' />
        </Styled.GitHubButton>
      </Styled.InputContainer>
      {
        isEmptyInput &&
        <ErrorText>*Campo vazio!</ErrorText>
      }
    </view>
  );
}

export default InputBar;