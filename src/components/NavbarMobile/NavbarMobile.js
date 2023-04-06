import React from 'react';
import styles from './NavbarMobile.module.css';

import { motion } from 'framer-motion';

const NavbarMobile = ({ handleActive}) => {
  return (
  <motion.ul className={styles.nav_list_mobile} animate={{ x: [ 200, 0 ]}} transition={{ ease: "easeOut", duration: 0.5 }}>
    <li><a onClick={handleActive} href="#sobre">Sobre</a></li>
    <li><a onClick={handleActive} href="#qualificacoes">Qualificações</a></li>
    <li><a onClick={handleActive} href="#tecnologias">Tecnologias</a></li>
    <li><a onClick={handleActive} href="#projetos">Projetos</a></li>
  </motion.ul>
  )
}

export default NavbarMobile