import React, { useState } from 'react'
import Git from '../../assets/image/git.svg'
import './styled.css'

function Search() {
    const [usernameForSearch, setUsernameForSearch] = useState()

    console.log(usernameForSearch)

    return (
        <div className='search_case'>
          <input type="text" 
          className='search' 
          placeholder='Buscar usuário'
          onChange={(e) => setUsernameForSearch(e.target.value)}
          >
          </input>
          <a className='git' 
          href={`https://github.com/search?q=${usernameForSearch}+in%3Afullname&type=Users`}
          rel='noreferrer'
          target='_blank'
          >
              <img className='git_img' src={Git} alt="" />
          </a>
      </div>
    )
}

export default Search
