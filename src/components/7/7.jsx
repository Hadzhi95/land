import React, { useState, useRef, useEffect } from "react";
import styles from './Land7.scss';
import check from './check.svg';
import mobileCheck from './check-mobile.png'
import Popup from "../Popup/Popup_new";

function Land7() {
  const [isPopup, setIsPopup] = useState(false);
  const [active, setIsActive] = useState(false);
  
  const buttonRef = useRef(null);
  const buttonRefMob = useRef(null);
  const [buttonRect, setButtonRect] = useState(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
    }
  }, []);
  

  const handlePopupClick = () => {
    console.log(buttonRect?.top);
    setIsPopup(true);
    setIsActive(true);
  };
  return (
    <>
    
      <div className={styles.container}>
        <div>
          <div className={styles.title}>
            Join the community
            of students to seek help
            and share experiences
          </div>
          <button onClick={handlePopupClick} className={styles.btn} ref={buttonRef}>Join</button>
          {isPopup && (
              <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
            )}
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
        <button onClick={handlePopupClick} className={styles.btn_mobile} ref={buttonRefMob}>Join</button>
        {/* {isPopup && (
              <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
            )} */}
        
      </div>
    </>
  );
}

export default Land7;
