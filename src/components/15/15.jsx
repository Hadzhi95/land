import React, { useEffect, useRef, useState } from "react";

import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

import styles from './Land15.scss';
import Popup from "../Popup/Popup_getcall";
import InputMask from 'react-input-mask'


function Land15() {

  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const buttonRef = useRef(null);
  const buttonRect = buttonRef.current && buttonRef.current.getBoundingClientRect();
  
  const [isPopup, setIsPopup] = useState(false);
  const [active, setIsActive] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSuccess = () => {
    if (phoneNumber.length > 10 && name.length > 2 && email.includes('@')) {
      setIsPopup(true);
      setIsActive(true);
    }
    else {
      e.preventDefault();
      console.log("error input");
    }
  }


  return (
    <>
      <div className={styles.container}>
      {isPopup && (
              <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
            )}
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
                <InputMask mask="+\9\1 99 9999 9999" maskChar="" className={styles.tel} countries={['IN']} labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)} />
                <span className={styles.icon_search}></span>
              </label>
              <input className={styles.input} placeholder="Name" value={name} onChange={e => setName(e.target.value)} type='text'/>
            </div>
            <div className={styles.colum}>
              <input className={styles.email} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              <button onClick={handleSuccess} className={styles.btn} ref={buttonRef}>Get a call</button>
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
