import React, { useEffect, useRef, useState, useCallback } from "react";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

// import 'intl-tel-input/build/css/intlTelInput.css';
// import IntlTelInput from 'intl-tel-input';
// import 'intl-tel-input/build/js/utils';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';

import styles from './Land4.scss';
import card from './Card.svg'


function Land4() {

  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');

  // useEffect(() => {
  //   const input = IntlTelInput(inputRef.current, {
  //     initialCountry: 'auto',
  //     geoIpLookup: function (success, failure) {
  //       fetch('//ipinfo.io/json?token=574821ec29cd20')
  //         .then((resp) => resp.json())
  //         .then((ipdata) => {
  //           success(ipdata.country);
  //         })
  //         .catch(() => {
  //           failure();
  //         });
  //     },
  //   });
  //   inputRef.current.addEventListener('change', () => {
  //     const phoneNumber = parsePhoneNumberFromString(input.getNumber(), input.getSelectedCountryData().iso2);
  //     if (phoneNumber) {
  //       const formattedNumber = `+${phoneNumber.countryCallingCode} (${phoneNumber.nationalNumber.slice(0, 3)}) ${phoneNumber.nationalNumber.slice(3, 6)} ${phoneNumber.nationalNumber.slice(6, 8)} ${phoneNumber.nationalNumber.slice(8)}`;
  //       setPhoneNumber(formattedNumber);
  //     } else {
  //       setPhoneNumber('');
  //     }
  //   });
  // }, []);




  return (
    <>
      <div className={styles.container}>
        <img src={card} className={styles.card} />
        <div className={styles.info}>
          <h1 className={styles.title}>Are you one<br/>of them?</h1>
          <p className={styles.apply}>Apply for a free career<br/>consultation now</p>
        </div>
        <div className={styles.form_input}>
          <div className={styles.col}>
            <PhoneInput className={styles.email} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
              onChange={value => setPhoneNumber(value)} />
            <input className={styles.email} placeholder="Name" type='text' />
          </div>
          <div className={styles.col}>
            <input className={styles.email} placeholder="Email" type='email' />
            <button className={styles.btn}>Get a call</button>
          </div>
          <div className={styles.check}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.checkbox__text}>By clicking the checkbox you agree to our privacy policy, terms of use and training agreement.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land4;
