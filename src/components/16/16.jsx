import React from "react";
import styles from './Land16.scss';
// import image from './image.svg'
import image from './diplom-image.jpg'

import diplomMobile from './diplom-mobile1.png'

function Land16() {
  return (
    <>
      <div id="job_guarantee" className={styles.container}>
        <div className={styles.col}>
          <div className={styles.row1}>
            <h3 className={styles.title1}>
              <span className={styles.selection__title}>100% </span> Job guarantee
            </h3>
          </div>
          <div className={styles.row_mobile}>
            <h3 className={styles.title_mobile_text}><span className={styles.procent_mobile}>100%</span> Job guarantee</h3>
          </div>
          <div className={styles.row}>
            <div className={styles.info_box}>
              <div className={styles.info}>
                <p className={styles.info__text}>We are 100% sure that we provide our students with the most in-demand and handy skills based on the latest techniques and tools which makes us confident that every one of our graduates will enter a dream job in Digital Marketing. That’s why we offer you career assistance.</p>
              </div>
              <div className={styles.info}>
                <p className={styles.info__text}>Yet, it won't be achievable without your dedication and commitment.You will have to meet the following requirements in order to get a job with our help:</p>
              </div>
            </div>
            <div className={styles.image__wrapper}>
              <img src={image} alt="" className={styles.image}/>
            </div>
          </div>
          <img src={diplomMobile} className={styles.diplom_photo} alt="" />
          <div className={styles.btn_form}>
            <button className={styles.btn1}>
              Accomplish all projects and assignments on time
            </button>
            <button className={styles.btn2}>
              Follow the steps of the Career Center coaches
            </button>
            <button className={styles.btn3}>
              Attend interviews diligently
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land16;
