import React from 'react';
import style from './MobileMenu.module.css';
import logo from './Logo.svg';
import instLogo from './instagram.svg';
import facebook from './facebook.svg';
import inLogo from './in.svg';
import whatsapp from './whatsapp.svg';
import { Link } from 'react-scroll'

const MobileMenu = ({ onclick }) => {
  return (
      <div className={style.menu}>
          <div className={style.menu_header}>
              <div className={style.logo}>
                  <img className={style.burger_megacampus_logo} src={logo} alt='' />
              </div >
              <div className={style.close}>
                <button onClick={() => onclick()} className={style.close__button}>
                    <svg className={style.close__icon} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 7.5L7.5 22.5" stroke="#4BDFDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 7.5L22.5 22.5" stroke="#4BDFDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>   
              </div>
          </div>
        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
          <Link activeClass="active" to="syllabus" spy={true} smooth={true} duration={500}><li className={style.navigation__item} >Syllabus</li></Link>
          <Link activeClass="active" to="mentors" spy={true} smooth={true} duration={500}><li className={style.navigation__item} >Mentors</li></Link>
          <Link activeClass="active" to="diploma" spy={true} smooth={true} duration={500}><li className={style.navigation__item} >Diploma</li></Link>
          <Link activeClass="active" to="job_guarantee" spy={true} smooth={true} duration={500}><li className={style.navigation__item} >Job Guarantee</li></Link>
          </ul>
        </nav>
        <div className={style.contacts}>
            <div className={style.contact__item}>
                <span>Student Support</span>
                  <a className={style.contact} href='mailto:info@megacampus.com' target='blank'>info@megacampus.com</a>
            </div>
            <div className={style.contact__item}>
                  <span>Learn more about the courses:</span>
                  <a className={style.contact} href='tel:+63 991 777-06-68' target='blank'>+63 991 777-06-68</a>
            </div>
        </div>
        <div className={style.social__wrapper}>
            <div className={style.social__block}>
              <a className={style.social__link} href="https://www.instagram.com/megacampus/" target="_blank"><img src={instLogo} /></a>
              <a className={style.social__link} href="https://www.linkedin.com/company/megacampus/"><img src={inLogo} /></a>
              <a className={style.social__link} href="https://ru-ru.facebook.com/megacampus.rus/"><img src={facebook} /></a>
              <a className={style.social__link} href="https://www.whatsapp.com/" target="_blank"><img src={whatsapp} /></a>
            </div>
        </div>
      </div>
  )
}

export default MobileMenu;
