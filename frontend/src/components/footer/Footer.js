import React from 'react';

import bar from '../../assets/images/bar.svg';
import logo from '../../assets/images/logo2.svg';

import classes from './Footer.module.css';
import Medias from '../medias/Medias';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <img  src={bar}/>
      <div className={classes.Content}>
        <ul className={classes.List}> 
          <li><img src={logo}/></li>
          <li><span>Acreditamos no valor da tecnologia e no impacto positivo que a 
              transformação digital exerce sobre a sociedade, mudando o nosso dia 
              a dia, facilitando atividades comuns e acelerando os negócios.
              </span></li>
          <li><span>
              <p>BRASIL</p>
              R. Raphael Dias da Silva, 75
              3º andar • Sala 306 e 308
              Campolim • Sorocaba/SP
        </span></li>
          <li><span>
          <p>CANADÁ</p>
          830, Av. Ernest-Gagnon,
          Bureau 315, Sala 609
          Quebec
        </span></li>
        </ul>
        <div className={classes.Line}/>
        <div className={classes.Copyright}>
          <span>Todos os direitos reservados - 2020</span>
          <Medias />
          <span>VOLTAR AO TOPO</span>
        </div>        
      </div>
    </footer>
    
  )
}

export default Footer;