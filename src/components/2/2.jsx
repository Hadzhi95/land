import React from "react";
import styles from './Land2.scss';
import back from './back.svg'
import miniBack from './miniBack.svg'

function Land2() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.arrow} src={back} alt='' />
        <div className={styles.content}>
          <div className={styles.title}>
            Why digital marketing?
          </div>
          <div className={styles.content_container}>
            <img className={styles.miniBack} src={miniBack} />
            <div className={styles.block}>
              <div className={styles.info_container}>
                High demand
              </div>
              <div className={styles.info_text}>
                Due to the increasing popularity of online business and
                e-commerce platforms, companies are seeking skilled digital marketers to help them achieve their business goals.
                The industry is booming and keeps on growing every year.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.info_container}>
                Stable and high-paid job
              </div>
              <div className={styles.info_text}>
                Skilled digital marketers command high salaries, which increase as they gain experience.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.info_container}>
                Career growth
              </div>
              <div className={styles.info_text}>
                grow into senior level positions in marketing, research, and business analytics
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.info_container}>
                Flexibility
              </div>
              <div className={styles.info_text}>
                work from anywhere. Most DMs work remotely., which provides you with a lot of flexibility, whether you work from home, in office, or while travelling.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.info_container}>
                Universal application
              </div>
              <div className={styles.info_text}>
                digital marketers are sought-after in every field you can think of, from IT and finance to medicine and engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land2;
