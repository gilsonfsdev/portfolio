import { useState } from 'react';
import { motion } from 'framer-motion';

import logo from '../../images/favicon-32x32.png'

// css
import styles from './Navbar.module.css';

// ícone
import { MdMenu } from 'react-icons/md';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';

const Navbar = () => {
  const [active, setActive] = useState(false)
  
  const handleActive = () =>{
    setActive(!active)
  }

  return (
    <header>
      <div className={styles.container}>
        <nav>
          <motion.a href='/'
            animate={{ x: [ -100, 0 ]}}
            transition= {{
              type:'just',
              duration: 1.5
            }}
          ><img src={logo} alt="logo da aplicação" /></motion.a>
          <button onClick={handleActive} className={styles.button} >
            <MdMenu className={styles.menu_icon}/>
          </button>
          <ul className={styles.nav_list_desktop}>
            <motion.li 
              animate={{ x: [ 150, 0 ]}}
              transition= {{
                type:'just',
                duration: 0.6
              }}
            ><a href="#sobre">Sobre</a></motion.li>
            <motion.li
              animate={{ x: [ 150, 0 ]}}
              transition= {{
                type:'just',
                duration: 0.9
              }}
            ><a href="#qualificacoes">Qualificações</a></motion.li>
            <motion.li
              animate={{ x: [ 150, 0 ]}}
              transition= {{
                type:'just',
                duration: 1.2
              }}
            ><a href="#tecnologias">Tecnologias</a></motion.li>
            <motion.li
              animate={{ x: [ 150, 0 ]}}
              transition= {{
                type:'just',
                duration: 1.5
              }}
            ><a href="#projetos">Projetos</a></motion.li>
          </ul>
          {active && (
            <NavbarMobile handleActive={handleActive}/>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
