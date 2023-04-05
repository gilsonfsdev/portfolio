import React from 'react';
import styles from './Title.module.css';

const Title = ({  title }) => {
  return (
    <div className={styles.container_title}>
      <h2><span>&#60;</span>{title}<span> /></span></h2>
    </div>
  )
}

export default Title