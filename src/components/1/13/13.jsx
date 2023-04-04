import React from "react";
import styles from './Land13.scss';
import arrows from './Arrows.svg';
import arrowsMobile from './arrows-mobile.png';
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import mobileImage1 from './image1-mobile.png';
import mobileImage2 from './image2-mobile.png';
import mobileImage3 from './image3-mobile.png';

function Land13() {
  return (
    <>
      <div className={styles.cont}>
        <img className={styles.arrows} src={arrows} alt="" />
        <div className={styles.container}>
          <div className={styles.title}>
            Career center
          </div>
          <div className={styles.info_box}>
            <div className={styles.info}>
              <p className={styles.info__paragraph}>Our goal is to make sure that all of our students secure a well-paid job in the digital marketing field.</p>
            </div>
            <div className={styles.info}>
              <p className={styles.info__paragraph}>Upon completing the course modules, you will have an opportunity to go through our Career center to receive guidance and support in your career endeavours.</p>
            </div>
            <div className={styles.info}>
              <p className={styles.info__paragraph} style={{padding:'0'}}>We have established partnerships with top career centers and employers which will be happy to entertain our graduates for their job openings.</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src={image1} className={styles.image1} />
              <img src={image1} className={styles.mobileImage1} />
              <div className={styles.theme}>
                Career coaching
              </div>
              <div className={styles.text}>
                We have a strong team of career coaches and recruiters to assist you land a job upon graduation
              </div>
            </div>
            <div className={styles.col}>
              <img src={image2} className={styles.image2} />
              <img src={image2} className={styles.mobileImage2} />
              <div className={styles.theme}>
                Resumes
              </div>
              <div className={styles.text}>
                Our career coaches will help you build an outshining resume which will show all your certification and make you stand out in the job market
              </div>
            </div>
            <div className={styles.col}>
              <img src={image3} className={styles.image3} />
              <img src={image3} className={styles.mobileImage3} />
              <div className={styles.theme}>
                Mock interviews
              </div>
              <div className={styles.text}>
                Our recruiters will conduct mock interviews with you and teach you how to catch the eye of future employers and get hired.
              </div>
            </div>
          </div>
        </div>
        <img className={styles.arrowsMobile} src={arrowsMobile} alt="" />
      </div>
      <div className={styles.line}></div>
    </>
  );
}

export default Land13;
