import React from "react";
import styles from './Land5.scss';
import jobs from './jobs.svg'
import jobs2 from './jobs2.svg'
import arrow from './arrow.svg'

function Land5() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          Digital marketing demand in India
        </div>
        <div className={styles.content}>
          <div className={styles.stat}>
            <div className={styles.first}>
              Freshers world
            </div>
            <div className={styles.jobs1}>
              <img src={jobs} className={styles.job1_img}/> 19235 jobs
            </div>
            <div className={styles.figure1}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.second}>
              Foundit
            </div>
            <div className={styles.jobs2}>
              <img src={jobs2} className={styles.job2_img}/> 26934 jobs
            </div>
            <div className={styles.figure2}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.first}>
              Linkedin
            </div>
            <div className={styles.jobs1}>
              <img src={jobs} className={styles.job3_img}/> 34526 jobs
            </div>
            <div className={styles.figure3}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.second}>
              NAUKRI
            </div>
            <div className={styles.jobs2}>
              <img src={jobs2} className={styles.job4_img}/> 202442 jobs
            </div>
            <div className={styles.figure4}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <span>as of March 2023</span>
        </div>
      </div>
      <div className={styles.end}></div>
    </>
  );
}

export default Land5;
