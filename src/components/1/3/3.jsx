import React from "react";
import styles from './Land3.scss';
import img from './Card.svg';
import cards from './AnotherCards.svg'
import allNeeded from './allNeeded.svg'

function Land3() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={img} />
        <img src={cards} alt="cards" className={styles.cards} />
        <img src={allNeeded} alt="all needed" className={styles.all_needed} />

      </div>
    </>
  );
}

export default Land3;
