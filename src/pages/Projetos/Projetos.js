import React from 'react';
import styles from './Projetos.module.css';
import { useRef } from 'react';

// imagens
import  ControleFinanceiro  from '../../images/ControleFinanceiro.jpg';
import bubblecoffee from '../../images/bubblecoffee.png';
import EmConstrucao from '../../images/EmConstrucao.png';

// ícones
import {AiOutlineBackward } from 'react-icons/ai'

// component
import Title from '../../components/Title/Title'

const Projetos = () => {
  const carousel = useRef(null); 

  const ArrayProjetos = [
      {
        id:1,
        id2: 11,
        title: "Bubble Coffee",
        imagem: bubblecoffee,
        description: "A Landing Page, com a temática de cafeteria, foi desenvolvida com o intuito de colocar em prática os conhecimentos em Next, Tailwind e design responsivo.",
        link: "https://coffeeshop-gilsonfsdev.vercel.app/",
        repositorio: 'https://github.com/gilsonfsdev/coffeeshop'
      },
      {
        id:2,
        id2: 22,
        title: "Controle Financeiro",
        imagem: ControleFinanceiro,
        description: "Aplicação para controle financeiro, na qual pude entender de forma prática as passagens de props, os hooks useState e useEffect, e a dinâmica do formulário. Para armazenamento utilizei a localStorage e para estilização optei pelo Styled Components. ",
        link: "https://app-financ-control.vercel.app/",
        repositorio:'https://github.com/gilsonfsdev/controle-financeiro'
      },
      {
        id:3,
        id2: 33,
        title: "Projeto 3",
        imagem: EmConstrucao,
        description: "Em construção ",
        link: "/",
        repositorio:'https://github.com/gilsonfsdev'
      },
      {
        id:4,
        id2: 44,
        title: "Projeto 4",
        imagem: EmConstrucao,
        description: "Em construção ",
        link: "/",
        repositorio:'https://github.com/gilsonfsdev'
      }
    ]

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= (carousel.current.offsetWidth );
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += (carousel.current.offsetWidth );
  }

  const handleLeftClickDesktop = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= (carousel.current.offsetWidth - 25 );
  }

  const handleRightClickDesktop = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += (carousel.current.offsetWidth - 25 );
  }


  return (
    <section className={styles.container} id="projetos">
      <div className={styles.container_title}>
        <Title title={'Projetos'}/>
        <div 
          className={styles.container_projetos}  
          ref= {carousel} 
        >

          {ArrayProjetos.map((projeto) => (
            <>
            <div 
              key={projeto.id} 
              className={styles.card_projetos}
            >
              <h1 className={styles.titleMobile}>{projeto.title}</h1>
              <div className={styles.div_imagem}>
                <img src={projeto.imagem} alt=''/>
              </div>
                <p>{projeto.description}</p>
                <div className={styles.div_buttons}>
                  <a href={projeto.link} target='_blank' rel='noreferrer' className={styles.button_projeto}>Acessar site</a>
                  <a href={projeto.repositorio} target='_blank' rel='noreferrer' className={styles.button_projeto}>Repositório</a>
                </div>
            </div>
            
            <div 
              key={projeto.id2} 
              className={styles.card_projetosDesktop}
            >
              <div className={styles.div_imagemDesktop}>
                <img src={projeto.imagem} alt=''/>
              </div>
              <div className={styles.card_AsideImagemDesktop}>
                <h1 className={styles.titleDesktop}>{projeto.title}</h1>

                  <p>{projeto.description}</p>
                  <div className={styles.div_buttons}>
                    <a href={projeto.link} target='_blank' rel='noreferrer' className={styles.button_projeto}>Acessar site</a>
                    <a href={projeto.repositorio} target='_blank' rel='noreferrer'className={styles.button_projeto}>Repositório</a>
                  </div>
              </div>
            </div>
            </>
          ))}

         </div>

         <div className={styles.buttonScroll}>
            <button onClick={handleLeftClick}><AiOutlineBackward /></button>
            <button onClick={handleRightClick}><AiOutlineBackward className={styles.right} /></button>            
         </div>
         <div className={styles.buttonScrollDesktop}>
            <button onClick={handleLeftClickDesktop}><AiOutlineBackward /></button>
            <button onClick={handleRightClickDesktop}><AiOutlineBackward className={styles.right} /></button>            
         </div>

      </div>
    </section>
  )
}

export default Projetos