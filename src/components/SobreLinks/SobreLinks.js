import React from 'react';
import styles from './SobreLinks.module.css';

// react-icons
import {CiLinkedin} from 'react-icons/ci';
import {FiGithub} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {FaWhatsapp} from 'react-icons/fa'

const SobreLinks = () => {
  return (
    <div className={styles.div_sobre_links}>
      <a href='https://www.linkedin.com/in/gilsonfs93/' target='_blank' rel='noreferrer'className={styles.sobre_link}>
        <CiLinkedin alt='Atalho para o Linkedin' />
      </a>
      <a href='https://github.com/gilsonfsdev' target='_blank' rel='noreferrer'className={styles.sobre_link}>
        <FiGithub alt='Atalho para o Github' />
      </a>
      <a href='https://www.instagram.com/gilsoonfs/' target='_blank' rel='noreferrer'className={styles.sobre_link}>
        <BsInstagram alt='Atalho para o Instagram' />
      </a>
      <article className={styles.sobre_link}>
        <a className={styles.whats} href='https://wa.me/5544998505620' target='_blank' rel='noreferrer'>
          <FaWhatsapp alt='Atalho para o WhatsApp' />
        </a>
      </article>
    </div>
  )
}

export default SobreLinks