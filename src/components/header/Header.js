import React from "react";
import "./styled.css";
import Git from '../../image/git.svg'
import Logo from '../../image/Logo.svg'
import Polygon from '../../image/Polygon.svg'
import ImgApp from '../../image/img-app.png'
import Sociais from '../../image/Sociais.svg'

function Header() {
  return (
    <>
      <div className="logo">
          <img src={Logo} alt="Logo" />
        <h3>TECHNOLOGY</h3>
      </div>
      <div className="content">
        <p>
          Buscar um usuário no <b>Github</b> ficou muito <b>fácil!</b>
        </p>
      </div>
      <div className='search_case'>
          <input type="text" className='search' placeholder='Buscar usuário'>
          </input>
          <button className='git'>
              <img src={Git} alt="" />
          </button>
      </div>
      <div className='sociais'>
          <img src={Sociais} alt="Sociais" />
      </div>
      <div className="container">
          <img src={Polygon} alt="" />
        <div className="container__image" >
            <img src={ImgApp} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
