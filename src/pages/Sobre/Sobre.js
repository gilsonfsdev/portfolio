import React from 'react';
import styles from './Sobre.module.css';
import { motion } from 'framer-motion';

// imagem
import FotoDePerfil from '../../images/perfil2.png'

// components
import SobreLinks from '../../components/SobreLinks/SobreLinks';
import SobreDescricao from '../../components/SobreDescricao/SobreDescricao'


const Sobre = () => {
  return (
    <main className={styles.container} id="sobre">
      <div className={styles.div_grey}>
        <div className={styles.grey_div_img}>
          <img src={FotoDePerfil} alt='' />
        </div>
        <div className={styles.grey_div_sobre}>
          <SobreDescricao />
          <SobreLinks />
        </div>
      </div>
    </main>
  )
}

export default Sobre;