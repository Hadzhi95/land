import React, { useEffect, useRef, useState, useCallback } from "react";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'


import styles from './Land4.scss';
import card from './Card.svg'
import india from './india.svg'
import Success from "./Success";
<<<<<<< HEAD
=======
import Popup from "../Popup/Popup_getcall";
import InputMask from 'react-input-mask'
>>>>>>> 0195e72b68f3451de06e9343e65c10e6ee5ac7d5


function Land4() {

  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');
<<<<<<< HEAD
  const [success, setSuccess] = useState(false)

  const handleSuccess = () => {
    setSuccess(true)
=======
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const buttonRef = useRef(null);
  const buttonRect = buttonRef.current && buttonRef.current.getBoundingClientRect();

  const [isPopup, setIsPopup] = useState(false);
  const [active, setIsActive] = useState(false);

  const handleSuccess = () => {
    if (phoneNumber.length > 10 && name.length > 2 && email.includes('@')) {
      setIsPopup(true);
      setIsActive(true);
    }
    else {
      e.preventDefault();
      console.log("error input");
    }
>>>>>>> 0195e72b68f3451de06e9343e65c10e6ee5ac7d5
  }

  return (
    <>

      <div className={styles.container}>
        {isPopup && (
          <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
        )}
        <img src={card} className={styles.card} />
        <div className={styles.info}>
          <h1 className={styles.title}>Are you one<br />of them?</h1>
          <p className={styles.apply}>Apply for a free career<br />consultation now</p>
        </div>
        <div className={styles.form_input}>
          <div className={styles.col}>
            {/* <PhoneInput className={styles.email} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
              onChange={value => setPhoneNumber(value)} /> */}
            <label>
              <InputMask mask="+\9\1 99 9999 9999" maskChar="" className={styles.tel} countries={['IN']} labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} />
              <span className={styles.icon_search}></span>
            </label>
            <input className={styles.email} value={name} onChange={e => setName(e.target.value)} placeholder="Name" type='text' />
          </div>
          <div className={styles.col}>
<<<<<<< HEAD
            <input className={styles.email} placeholder="Email" type='email' />
            <button onClick={handleSuccess} className={styles.btn}>Get a call</button>
            {success &&(
              <Success/>
            )}
=======
            <input className={styles.email} placeholder="Email" type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={handleSuccess} className={styles.btn} ref={buttonRef}>Get a call</button>

>>>>>>> 0195e72b68f3451de06e9343e65c10e6ee5ac7d5
          </div>
          <div className={styles.check}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.checkbox__text}>By clicking the checkbox you agree to our privacy policy and training agreement.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land4;
