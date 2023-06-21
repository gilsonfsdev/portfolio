import React from 'react';
import styles from './Projetos.module.css';
import { useRef } from 'react';

// imagens
import bubblecoffee from '../../images/bubblecoffee.png';
import Movies from '../../images/movies.png';
import todo from '../../images/to-do.png'
import timer from '../../images/timer.png'

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
        title: "To-Do",
        imagem: todo,
        description: "Aplicação desenvolvida em React, usando Vite, TypeScript e Styled-Components. Na aplicação existem as funcionalidade de criação de atividades, visualização, monitoramento de quantas foram concluídas e remoção.",
        link: "https://to-do-gilsonfsdev.vercel.app/",
        repositorio: 'https://github.com/gilsonfsdev/toDo'
      },
      {
        id:2,
        id2: 11,
        title: "Bubble Coffee",
        imagem: bubblecoffee,
        description: "A Landing Page, com a temática de cafeteria, foi desenvolvida com o intuito de colocar em prática os conhecimentos em Next, Tailwind e design responsivo.",
        link: "https://coffeeshop-gilsonfsdev.vercel.app/",
        repositorio: 'https://github.com/gilsonfsdev/coffeeshop'
      },
      {
        id:3,
        id2: 33,
        title: "Timer Activity",
        imagem: timer,
        description: "Página construida com ViteJs, Styled-components e TypeScript. A idéia do projeto é facilitar o controle de tarefas a serem realizadas em determinado tempo.",
        link: "https://timer-activity.vercel.app/",
        repositorio:'https://github.com/gilsonfsdev/timer-activity'
      },
      {
        id:4,
        id2: 44,
        title: "MoviesDB",
        imagem: Movies,
        description: "Aplicação feita em NextJS, construída com o intuíto de praticar a consulta a API externa e o manuseio dos dados que retornam.",
        link: "https://movies-gilsonfsdev.vercel.app/",
        repositorio:'https://github.com/gilsonfsdev/movies'
      },
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