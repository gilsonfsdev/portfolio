import React from 'react';
import styles from './SobreDescricao.module.css';

const SobreDescricao = () => {
  return (
    <div className={styles.div_sobre_descricao}>
      <p className={styles.sobre_sobre}>Sobre</p>
      <h2>Gilson Ferreira</h2>
      <p className={styles.sobre_subtitle}>Desenvolvedor Front-End</p>
      <p className={styles.sobre_description}>Meu nome é Gilson Ferreira, sou estudante de Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia. Estou em transição de carreira e atualmente procuro estágio, cargo como desenvolvedor júnior ou trainee como Front-End.</p>
      <a href='/' download className={styles.sobre_button_cv}>Download CV</a>
    </div>
  )
}

export default SobreDescricao