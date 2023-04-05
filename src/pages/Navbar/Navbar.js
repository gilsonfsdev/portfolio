import { useState } from 'react';
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
          <a href='#sobre'><img src={logo} alt="logo da aplicação" /></a>
          <button onClick={handleActive} className={styles.button} >
            <MdMenu className={styles.menu_icon}/>
          </button>
          <ul className={styles.nav_list_desktop}>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#qualificacoes">Qualificações</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
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
