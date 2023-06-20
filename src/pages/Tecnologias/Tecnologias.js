import React from 'react';
import styles from './Tecnologias.module.css'

// ícones
import { FaHtml5, FaReact } from 'react-icons/fa';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { SiStyledcomponents, SiTailwindcss } from 'react-icons/si'
import {TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb'

// component
import Title from '../../components/Title/Title';

const Tecnologias = () => {
  return (
    <section className={styles.container} id="tecnologias">
        <Title title={'Tecnologias'}/>
      <div className={styles.card_tecnologias}>
        <div className={styles.tecnologia}>
          <FaHtml5 alt='ícone do HTML' />
          <p>HTML</p>
        </div>
        <div className={styles.tecnologia}>
          <DiCss3 alt='ícone do CSS' />
          <p>CSS</p>
        </div >        
        <div className={styles.tecnologia}>
          <DiJavascript1 alt='ícone do JavaScript' />
          <p>Javascript</p>
        </div> 
        <div className={styles.tecnologia}>
          <TbBrandTypescript alt='ícone do TypeScript' />
          <p>TypeScript</p>
        </div>  
        <div className={styles.tecnologia}>
          <SiTailwindcss alt='ícone do Tailwind' />
          <p>Tailwind CSS</p>
        </div>        
        <div className={styles.tecnologia}>
          <SiStyledcomponents alt='ícone do Styled-components' />
          <p>styled-components</p>
        </div>        
        <div className={styles.tecnologia}>
          <FaReact alt='ícone do ReactJS' />
          <p>ReactJS</p>
        </div>   
        <div className={styles.tecnologia}>
          <TbBrandNextjs alt='ícone do Next.js' />
          <p>Next.js</p>
        </div>          
      </div>
    </section>
  )
}

export default Tecnologias