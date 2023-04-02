import React, { useState } from "react";
import styles from './Land5.scss';
import jobs from './jobs.svg'
import jobs2 from './jobs2.svg'
import arrow from './arrow.svg'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

function Land5() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleVisibility2 = (isVisible) => {
    setIsVisible2(isVisible);
  };

  const handleVisibility = (visible) => {
    setIsVisible(visible);
  };

  const handleVisibility3 = (isVisible) => {
    setIsVisible3(isVisible);
  };

  const handleVisibility4 = (isVisible) => {
    setIsVisible4(isVisible);
  };

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
              <img src={jobs} className={styles.job1_img} />
              <VisibilitySensor onChange={handleVisibility}>
                <CountUp end={isVisible ? 19235 : 0} duration={2} separator="" />
              </VisibilitySensor>
              jobs
            </div>
            <div className={`${styles.figure1} ${isVisible ? styles["figure1--animate"] : ""
              }`}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.second}>
              Foundit
            </div>
            <div className={styles.jobs2}>
              <img src={jobs2} className={styles.job2_img} />
              <VisibilitySensor onChange={handleVisibility2}>
                <CountUp end={isVisible ? 26934 : 0} duration={2} separator="" />
              </VisibilitySensor>
              {/* <CountUp end={26934} duration={2} separator="" /> */}
              jobs
            </div>
            {/* <div className={styles.figure2} style={{ height: isVisible2 ? '433px' : '0' }}> */}

            <div className={`${styles.figure2} ${isVisible ? styles["figure2--animate"] : ""
              }`}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.first}>
              Linkedin
            </div>
            <div className={styles.jobs1}>
              <img src={jobs} className={styles.job3_img} />
              <VisibilitySensor onChange={handleVisibility3}>
                <CountUp end={isVisible ? 34526 : 0} duration={2} separator="" />
              </VisibilitySensor>
              {/* <CountUp end={34526} duration={2} separator="" /> */}
              jobs
            </div>
            <div className={`${styles.figure3} ${isVisible ? styles["figure3--animate"] : ""
              }`}>
              <img src={arrow} className={styles.arrow} />
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.second}>
              NAUKRI
            </div>
            <div className={styles.jobs2}>
              <img src={jobs2} className={styles.job4_img} />
              <VisibilitySensor onChange={handleVisibility4}>
                <CountUp end={isVisible ? 202442 : 0} duration={2} separator="" />
              </VisibilitySensor>
              {/* <CountUp end={202442} duration={2} separator="" /> */}
              jobs
            </div>
            <div className={`${styles.figure4} ${isVisible ? styles["figure4--animate"] : ""
              }`}>
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
