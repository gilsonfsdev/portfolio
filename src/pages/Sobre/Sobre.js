import React from 'react';
import styles from './Sobre.module.css';
import { motion } from 'framer-motion';

// imagem
import FotoDePerfil from '../../images/AvatarFinal.png'

// components
import SobreLinks from '../../components/SobreLinks/SobreLinks';
import SobreDescricao from '../../components/SobreDescricao/SobreDescricao'


const Sobre = () => {
  return (
    <main className={styles.container} id="sobre">
      <div className={styles.div_grey}>
        <motion.div className={styles.grey_div_img}
          animate={{ y: [ -50, 0 ]}}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <img src={FotoDePerfil} alt='Avatar representando o criador do site trabalhand' />
        </motion.div>

        <motion.div className={styles.grey_div_sobre}
          animate={{ y: [ -50, 0 ]}}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <SobreDescricao />
          <SobreLinks />
        </motion.div>
      </div>
    </main>
  )
}

export default Sobre;