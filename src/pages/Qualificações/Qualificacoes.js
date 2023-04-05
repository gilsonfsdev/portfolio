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
          <article className={styles.qualificacao_graduacao}>
            <IoSchool alt='ícone do chapéu de formando' />
            <h4>Análise e Desenvolvimento de Sistemas - UNIMAR</h4>
            <p>Ínicio em 01/2022</p>
            <p>Conclusão em 06/2024</p>
          </article>
          <article className={styles.qualificacao_graduacao}>
            <IoSchool alt='ícone do chapéu de formando' />
            <h4>Comunicação Social - Faculdade Maringá</h4>
            <p>Ínicio em 01/2012</p>
            <p>Conclusão em 12/2015</p>
          </article > 
          <QualificacoesCard h4={'React - Do Zero a maestria'} p={'Conclusão em 02/2023'}/>
          <QualificacoesCard h4={'Bootcamp Impulso Javascript - Digital Innovation One'} p={'Conclusão em 08/2022'}/>
          <QualificacoesCard h4={'Programação em Javascript - Udemy'} p={'Conclusão em 02/2022'}/>
          <QualificacoesCard h4={'Web Design HTML5 + CSS3 + JS - Udemy'} p={'Conclusão em 10/2021'}/> 
        </div>            
      </div>
    </section>
  )
}

export default Qualificacoes