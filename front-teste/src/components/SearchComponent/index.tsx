import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { Container, SearchInput, SearchIcon, ContainerIconSearch } from './styles';

interface SearchComponentProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
  return (
    <Container>
      <SearchInput placeholder="Buscar usuário">
        <ContainerIconSearch>
          <SearchIcon size={22} />
        </ContainerIconSearch>
        <input placeholder="Buscar usuário" onChange={props.onChange} />
        <Link to="/search">
          <button type="button">
            <FiGithub style={{ color: '#ffff', width: '19.5px', height: '21.03px', cursor: 'pointer' }} />
          </button>
        </Link>
      </SearchInput>
    </Container>
  );
};

export default SearchComponent;
