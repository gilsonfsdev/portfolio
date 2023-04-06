import React from 'react';
import styles from './QualificacoesCard.module.css'

const QualificacoesCard = ({  h4, p, time }) => {
  return (
    <article className={styles.qualificacao_graduacao}>
      <h4>{h4}</h4>
      <p>{p}</p>
    </article>
  )
}

export default QualificacoesCard