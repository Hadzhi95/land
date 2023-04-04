import React from "react";
import styles from './TextModule.scss';
import cross from './cross.svg';
import plusMobile from './plus-mobile.png';

function TextModule({ id = 0, name = '', element = '', open = 0, setOpen }) {
  return (
    <>
      <div className={styles.module} onClick={() => open === id ? setOpen(-1) : setOpen(id)}>
      <div className={styles.info}>
          <img style={open === id ? { rotate: '45deg' } : {}} className={styles.cross} src={cross} alt="" />
          <div className={styles.text}>
            {name}
          </div>
      </div>


        <div className={styles.mobile_info}>
          <img onClick={() => open === id ? setOpen(-1) : setOpen(id)} style={open === id ? {rotate: '45deg' } : {}} className={styles.plus_mobile} src={plusMobile} alt="" />
          <div className={styles.text_mobile}>
            {name}
          </div>
        </div>
        {open === id ? (
          <div className={styles.content}>
            {element}
          </div>
        ) : (<></>)}
      </div>
    </>
  );
}

export default TextModule;
