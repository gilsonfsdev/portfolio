import React from 'react';
import styles from './SobreDescricao.module.css';

import { motion } from 'framer-motion';

const SobreDescricao = () => {
  return (
    <div className={styles.div_sobre_descricao}>
      <p className={styles.sobre_sobre}>Sobre</p>
      <motion.h2 animate={{ y: [ -50, 0 ]}} transition={{ duration: 1.5 }} >Gilson Ferreira</motion.h2>
      <motion.p className={styles.sobre_subtitle} animate={{ x: [ 100, 0 ]}} transition={{ duration: 1.2 }}>Desenvolvedor Front-End</motion.p>
      <motion.p className={styles.sobre_description} animate={{ x: [ 100, 0 ]}} transition={{ duration: 1.5 }}>Estudante de Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia. Construo interfaces dinâmicas, responsivas e modernas utilizando as tecnologias mais atuais do mercado. Vamos trabalhar juntos?</motion.p>
      <a href='https://drive.google.com/file/d/1z6UfA6GQUBdPR3xm3uIYx-P0zV9KRxOR/view?usp=drive_link' target='_blank' rel='noreferrer' className={styles.sobre_button_cv} animate={{ x: [ 100, 0 ]}} transition={{ duration: 1.5 }}>Download CV</a>
    </div>
  )
}

export default SobreDescricao