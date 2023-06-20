import React from 'react';
import styles from './SobreDescricao.module.css';

import { motion } from 'framer-motion';

const SobreDescricao = () => {
  return (
    <div className={styles.div_sobre_descricao}>
      <p className={styles.sobre_sobre}>Sobre</p>
      <motion.h2 animate={{ y: [ -50, 0 ]}} transition={{ duration: 1.5 }} >Gilson Ferreira</motion.h2>
      <motion.p className={styles.sobre_subtitle} animate={{ x: [ 100, 0 ]}} transition={{ duration: 1.2 }}>Desenvolvedor Front-End</motion.p>
      <motion.p className={styles.sobre_description} animate={{ x: [ 100, 0 ]}} transition={{ duration: 1.5 }}>Olá! Eu sou o Gilson, estudante de Análise e Desenvolvimento de Sistemas e sou apaixonado por tecnologia e audio visual.    Estou em transição de carreira e atualmente procuro estágio, cargo como desenvolvedor júnior ou trainee como Front-End.</motion.p>
      <a href='https://drive.google.com/file/d/1ybBYKqC708-k_cCC1aROByEoMiZ1Zqm0/view?usp=share_link' target='_blank' rel='noreferrer' className={styles.sobre_button_cv} animate={{ x: [ 100, 0 ]}} transition={{ duration: 1.5 }}>Download CV</a>
    </div>
  )
}

export default SobreDescricao