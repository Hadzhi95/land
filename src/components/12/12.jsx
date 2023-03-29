import React from "react";
import styles from './Land12.scss';
import macBook from './macBook.png';
import macBookMobile from './macBook-mobile.png';

function Land12() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.col2}>
            <div className={styles.title}>
              Who are we?
            </div>
            <div className={styles.info_box}>
              <div className={styles.info}>
                <strong>Megacampus</strong> is an educational universe.
              </div>
              <div className={styles.info}>
                We are a modern social educational platform where everyone can share skills and knowledge with the world.
              </div>
              <div className={styles.info}>
                Being a part of Synergy corporation,
                we give our students the most in-demand
                and modern skills to stand out and make
                it in today’s world
              </div>
            </div>
            <div className={styles.col1}>
              <div className={styles.numbers}>
                200,000 +
              </div>
              <div className={styles.comment}>
                Students
              </div>
            </div>
            <div className={styles.row__container}>
              <div className={styles.col1}>
                <div className={styles.numbers}>
                  1000 +
                </div>
                <div className={styles.comment}>
                  Educational programmes
                </div>
              </div>
              <div className={styles.col1}>
                <div className={styles.numbers}>
                  500 +
                </div>
                <div className={styles.comment}>
                  Forums and conferences
                </div>
              </div>
            </div>
            <img className={styles.macBookMobile} src={macBookMobile} />

            <div className={styles.mission}>
              Our mission
            </div>
            <div className={styles.mark}>
              “
            </div>
          </div>
          <img className={styles.img} src={macBook} />
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_container}>
            Is to reframe standard DM education and provide students with state-of-the-art skills and expertise to help them secure a high-paid and scopeful career
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Land12;
