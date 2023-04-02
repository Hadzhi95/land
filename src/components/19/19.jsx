import React, { useEffect, useRef, useState } from "react";

import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';
// import 'intl-tel-input/build/js/utils';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';
import styles from './Land19.scss';

function Land19() {
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
          <h3 className={styles.title}>
            Are you in yet?
          </h3>
          <div className={styles.title_mobile}>
            Are you one of them?
          </div>
          <div className={styles.info}>
            Apply for a free career consultation now
          </div>
        </div>
        <div>
          <div className={styles.form_input}>
            <div className={styles.colum}>

              
              {/* <input className={styles.input} placeholder="Number" type="tel" ref={inputRef} value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} /> */}
{/*     background: rgba(249,249,249,.01);
    border: none;
    outline: none; */}
              <PhoneInput className={styles.input} style={{
              background: 'background: #8a2aeb6e',
              border: 'none',
              outline: 'none'
            }} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                onChange={value => setPhoneNumber(value)} />
              <input className={styles.input} placeholder="Name" />
            </div>
            <div className={styles.colum}>
              <input className={styles.input} placeholder="Email" />
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

export default Land19;
