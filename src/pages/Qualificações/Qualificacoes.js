import React from 'react';
import styles from './Qualificacoes.module.css';

// ícones
import { IoSchool } from 'react-icons/io5';

// components
import QualificacoesCard from '../../components/QualificacoesCard/QualificacoesCard';
import Title from '../../components/Title/Title';

const Qualificacoes = () => {
  return (
    <section className={styles.container} id="qualificacoes">
        <Title title={'Qualificações'}/>
      <div className={styles.card_qualificacoes}>
        <div className={styles.card_qualificacoes_cursos}>
          <article className={styles.qualificacao_graduacao} animate={{ y: [ -500, 0 ]}} transition={{ ease: "easeOut", duration: 1.5 }}>
            <IoSchool alt='ícone do chapéu de formando' />
            <h4>Análise e Desenvolvimento de Sistemas - UNIMAR</h4>
            <p>Conclusão em 2024</p>
          </article>
          <article className={styles.qualificacao_graduacao}>
            <IoSchool alt='ícone do chapéu de formando' />
            <h4>Comunicação Social - Faculdade Maringá</h4>
            <p>Concluído em 2015</p>
          </article > 
          <QualificacoesCard h4={'Trilha Ignite (NodeJS) - RocketSeat'} p={'Conclusão em 11/2023'} /> 
          <QualificacoesCard h4={'Trilha Ignite (ReactJS) - RocketSeat'} p={'Conclusão em 08/2023'} /> 
          <QualificacoesCard h4={'Bootcamp Impulso Javascript - Digital Innovation One'} p={'Conclusão em 08/2022'} />
          <QualificacoesCard h4={'Programação em Javascript - Udemy'} p={'Conclusão em 02/2022'} />
        </div>            
      </div>
    </section>
  )
}

export default Qualificacoes