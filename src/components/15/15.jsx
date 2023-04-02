import React, { useEffect, useRef, useState } from "react";

import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

import styles from './Land15.scss';

function Land15() {

  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');


  return (
    <>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.title}>
            Develop your skills for resume with Megacampus
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.form_input}>
            <div className={styles.colum}>
              {/* <input className={styles.input} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)} /> */}
              {/* <PhoneInput className={styles.input} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
              onChange={value =>setPhoneNumber(value)} /> */}

              <label>
                <input className={styles.tel} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)} />
                <span className={styles.icon_search}></span>
              </label>
              <input className={styles.input} placeholder="Name" />
            </div>
            <div className={styles.colum}>
              <input className={styles.email} placeholder="Email" />
              <button className={styles.btn}>Get a call</button>
            </div>
            <div className={styles.check}>
              <input className={styles.checkbox} type="checkbox" />
              <span className={styles.checkbox__text}>By clicking the checkbox you agree to our privacy policy, terms of use and training agreement.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land15;
