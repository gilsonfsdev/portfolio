import React from 'react';
import styles from './Projetos.module.css';

// imagens
import bubblecoffee from '../../images/bubblecoffee.png';
import todo from '../../images/to-do.png'
import timer from '../../images/timer.png'
import coffeeDelivery from '../../images/coffee-delivery.png'

// component
import Title from '../../components/Title/Title'
import CardProjetos from '../../components/CardProjetos/index'

const Projetos = () => {
  const ArrayProjetos = [
    {
      id:1,
      title: "Coffee Delivery",
      imagem: coffeeDelivery,
      tecnologias: ["TypeScript", "Styled-Components", "Vite"],
      description: "O site segue o fluxo de um pedido para delivery, oferecendo uma interface intuitiva para que o cliente possa escolher os produtos e informar o endereço e a forma de pagamento desejados.",
      link: "https://coffee-delivery-gilsonfsdev.vercel.app/",
      repositorio:'https://github.com/gilsonfsdev/coffee-delivery'
    },
      {
        id:2,
        title: "Bubble Coffee",
        imagem: bubblecoffee,
        tecnologias: ["JavaScript", "Tailwind", "Next"],
        description: "A Landing Page, com a temática de cafeteria, foi desenvolvida com o intuito de colocar em prática os conhecimentos em Next, Tailwind e design responsivo.",
        link: "https://coffeeshop-gilsonfsdev.vercel.app/",
        repositorio: 'https://github.com/gilsonfsdev/coffeeshop'
      },
      {
        id:3,
        title: "Timer Activity",
        imagem: timer,
        tecnologias: ["TypeScript", "Styled-Components", "Vite"],
        description: "Site para gestão de tempo dedicado a determinada tarefa. Além da função de criação de ciclo, é possível visualizar o histórico dos ciclos realizados.",
        link: "https://timer-activity.vercel.app/",
        repositorio:'https://github.com/gilsonfsdev/timer-activity'
      },
      {
        id:4,
        title: "To-Do",
        imagem: todo,
        tecnologias: ["TypeScript", "CSS-Modules", "Vite"],
        description: "Aplicação para gestão de atividades, uma ferramenta para auxiliar o workflow. Possui as funcionalidades de criação, visualização e exclusão.",
        link: "https://to-do-gilsonfsdev.vercel.app/",
        repositorio: 'https://github.com/gilsonfsdev/toDo'
      },

    ]

  return (
    <section className={styles.container} id="projetos">
      <div className={styles.box}>
        <Title title={'Projetos'}/>
        
        <div className={styles.container_projetos}>
          {ArrayProjetos.map((projeto) => {
            return (
              <CardProjetos 
                title={projeto.title} 
                imagem={projeto.imagem}
                description={projeto.description}
                tecnologias={projeto.tecnologias}
                link={projeto.link}
                repositorio={projeto.repositorio}
              />
            )
          })}
         </div>
      </div>
    </section>
  )
}

export default Projetos