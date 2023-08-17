import styles from './index.module.css';

const CardProjetos = ({title, imagem, description, tecnologias, link, repositorio}) => {
  return(
    <div className={styles.container}>
      <h3>{title}</h3>

      <div className={styles.container_layout}>
        
        <div className={styles.layout_1}>
          <img src={imagem} alt={description}/>
        </div>
        
        <div className={styles.description}>
          <p>{description}</p>
          
          <div className={styles.tecnologias}>
            <span>{tecnologias[0]}</span>
            <span>{tecnologias[1]}</span>
            <span>{tecnologias[2]}</span>
          </div>
          
          <div className={styles.link}>
            <a href={link}>Ver site</a>
            <a href={repositorio}>Repositório</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CardProjetos