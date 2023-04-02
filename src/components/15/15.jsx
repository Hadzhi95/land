import React, { useEffect, useRef, useState } from "react";

import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

import styles from './Land15.scss';

// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';
// import 'intl-tel-input/build/js/utils';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';

function Land15() {

  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');

  // useEffect(() => {
  //   const input = intlTelInput(inputRef.current, {
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
              <PhoneInput className={styles.input} style={{
              background: 'rgb(86 81 81 / 5%)',
              border: 'none',
              outline: 'none'
            }} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
              onChange={value =>setPhoneNumber(value)} />
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
