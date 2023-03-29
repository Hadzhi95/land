import React from "react";
import styles from './Land7.scss';
import check from './check.svg';
import mobileCheck from './check-mobile.png'

function Land7() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.title}>
            Join the community
            of students to seek help
            and share experiences
          </div>
          <button className={styles.btn}>Join</button>
        </div>
        <div className={styles.col}>
          <div className={styles.row}>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> Practice-oriented lessons
            </div>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> Study at your own pace
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> Real cases to build a portfolio
            </div>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> 25 students in a batch
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_mobile}>
        <div className={styles.title_mobile}>
          Join the community
          of students to seek help
          and share experiences
        </div>
        <div className={styles.col_mobile}>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>Practice-oriented lessons</p>
          </div>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>Study at your own pace</p>
          </div>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>Real cases to build a portfolio</p>
          </div>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>25 students in a batch</p>
          </div>
        </div>
        <button className={styles.btn_mobile}>Join</button>
      </div>
    </>
  );
}

export default Land7;
