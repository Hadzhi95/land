import React from "react";
import styles from './Land11.scss';
import back from './back.svg'
import getDiplom from './getDiplom.svg'

function Land11() {
  return (
    <>
      <div id="diploma" className={styles.cont}>
        {/* <img className={styles.img} src={back} /> */}
        <img className={styles.getDiplom} src={getDiplom} />
        <div className={styles.container}>
          <div className={styles.title}>
            Get certified by Synergy university Dubai
            and Megacampus
          </div>
          <div className={styles.info_block}>
            <div className={styles.info}>
              We provide you with both the official Dubai synergy diploma and Megacampus certificate that will make you more attractive to potential employers and become your advantage in getting a promotion or salary increase in your current job.
            </div>
            <div className={styles.info}>
              It will increase your credibility and enhance your professional reputation.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land11;
