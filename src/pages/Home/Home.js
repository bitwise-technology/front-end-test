import React from "react";
import "./styled.css";
// import Git from '../../assets/image/git.svg'
import Logo from '../../assets/image/Logo.svg'
import Polygon from '../../assets/image/Polygon.svg'
import ImgApp from '../../assets/image/img-app.png'
import Sociais from '../../assets/image/Sociais.svg'
import Search from "../../components/Search/search";

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
      <Search />
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
