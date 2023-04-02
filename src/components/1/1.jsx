import React, { useState, useEffect } from 'react';
import MobileMenu from "../MobileMenu/MobileMenu";
import { Link } from 'react-scroll'

import HighQuality from './HighQuality.jpg'
import styles from './Land1.scss';
import arrow from './Arrow.svg';
import arrowBlue from './arrow-blue.svg';
import arrowGreen from './arrow-green.svg';
import arrowPink from './arrow-pink.svg';
import backgroundTimer from './background-timer.svg';
import image from './image.svg';
import logo from './Logo.svg';
import arrBackGreen from './arrow-background-green.png';
import menu from './Меню.png';
import desktopBg from './desktop-bg.png';
import Popup from './Popup';




function Land1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });



  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlePopupClick = () => {
    setIsPopup(true);
  };


  useEffect(() => {
    const countdownDate = new Date("May 01, 2023 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className={styles.container}>

        <img className={styles.arrow} src={arrow} alt='' />
        <img className={styles.image} src={image} alt='' />

        {/* <div className={styles.arr_back}>
          <img className={styles.arr_back_green} src={arrBackGreen} alt='' />
          <img className={styles.arr_back_blue} src={arrBackGreen} alt='' />
          <img className={styles.arr_back_red} src={arrBackGreen} alt='' />
        </div> */}
        <header className={styles.header}>
          <img className={styles.arrowBlue} src={arrowBlue} alt='' />
          <img className={styles.arrowGreen} src={arrowGreen} alt='' />
          <img className={styles.arrowPink} src={arrowPink} alt='' />
          <Link activeClass="active" to="syllabus" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            SYLLABUS
          </Link>
          <Link activeClass="active" to="mentors" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            MENTORS
          </Link>
          <div >
            <img onClick={handleMenuClick} className={styles.header_megacampus_menu} src={menu} alt='' />
            {isMenuOpen && (
              <div className={styles.burger_menu}>
                <MobileMenu onclick={handleMenuClick} />
              </div>
            )}
          </div>
          <img className={styles.header_megacampus_btn} src={logo} alt='' />
          <Link activeClass="active" to="diploma" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            DIPLOMA
          </Link>
          <Link activeClass="active" to="job_guarantee" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            JOB GUARANTEE
          </Link>
        </header>
        <div className={styles.content}>
          <div className={styles.content_container}>
            <h1 className={styles.content_title}>
              Digital Marketing Diploma Course
            </h1>
            <div className={styles.content_info}>
              Enroll in the 6 months course,
              get up-to-date practical skills, and
              secure yourself an exciting high-paid job in trending field of Digital Marketing
            </div>
            {/* <img className={styles.arrowBlue} src={arrowBlue} alt='' />
            <img className={styles.arrowGreen} src={arrowGreen} alt='' />
            <img className={styles.arrowPink} src={arrowPink} alt='' /> */}
          </div>
          <div className={styles.content_timer_container}>
            <div className={styles.content_timer_title}>
              Admissions close in
            </div>
            <div className={styles.time}>
              {
                `${timeLeft.days > 9 ? timeLeft.days : '0' + timeLeft.days}:${timeLeft.hours > 9 ? timeLeft.hours : '0' + timeLeft.hours}:${timeLeft.minutes > 9 ? timeLeft.minutes : '0' + timeLeft.minutes}:${timeLeft.seconds > 9 ? timeLeft.seconds : '0' + timeLeft.seconds}`
              }
            </div>
            <div className={styles.dates}>
              <div className={styles.date}>
                DAYS
              </div>
              <div className={styles.date}>
                HOURS
              </div>
              <div className={styles.date}>
                MINUTES
              </div>
              <div className={styles.date}>
                SECONDS
              </div>
            </div>
            <div className={styles.end}>
              Apply for a free consultation from our career expert now
            </div>
            <button onClick={handlePopupClick} className={styles.submit_btn}>
              Submit
            </button>
            {isPopup && (
              <Popup setIsPopup={setIsPopup} />
            )}
          </div>
          <img src={backgroundTimer} className={styles.content_timer_backgraund} />
          <img src={desktopBg} className={styles.desktop_content_timer_backgraund} />
        </div>
      </div>

    </>
  );
}

export default Land1;
