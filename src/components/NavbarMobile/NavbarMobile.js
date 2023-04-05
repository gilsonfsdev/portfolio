import React from 'react';
import styles from './NavbarMobile.module.css';

const NavbarMobile = ({ handleActive}) => {
  return (
  <ul className={styles.nav_list_mobile}>
    <li><a onClick={handleActive} href="#sobre">Sobre</a></li>
    <li><a onClick={handleActive} href="#qualificacoes">Qualificações</a></li>
    <li><a onClick={handleActive} href="#tecnologias">Tecnologias</a></li>
    <li><a onClick={handleActive} href="#projetos">Projetos</a></li>
  </ul>
  )
}

export default NavbarMobile