import React, { useState, useEffect, useRef } from 'react'
import styles from './Popup.scss'
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

function Popup({ setIsPopup }) {
    const [showModal, setShowModal] = useState(false);
    // const [showPopup, setShowPopup] = useState(true);
    const inputRef = useRef(null);
    const closeRef = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('+91');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 5000);
    }
    const closeModal = () => {
        setIsPopup(prev => !prev);
    }

    // useEffect(() => {
    //     const checkIfClickOutside = (e) => {
    //         if (closeRef.current && !ref.current.contains(e.target)) {
    //             setIsPopup(prev => !prev);
    //         }
    //     }
    //     document.addEventListener('click', checkIfClickOutside)
    //     return () => {
    //         document.removeEventListener('click', checkIfClickOutside)

    //     }
    // }, [])

    // useEffect(() => {
    //     // если модальное окно исчезло, скрываем Popup компонент
    //     if (!showModal) {
    //         setShowPopup(false);
    //     }
    // }, [showModal]);

    return (
        <>
            {/* {showPopup &&  */}
            (<div onClick={closeModal} className={styles.overlay} >
                {/* {showModal && ( // показываем модальное окно, если флаг true
                    <div className={styles.modal}>
                        <div className={styles.modal__text}>
                            <p>That's one small step for a man, one giant step for your career!</p>
                            <p>Our career coaching team will call you back shortly</p>
                        </div>
                    </div>
                )} */}
                <div className={styles.registration_form}>
                    <h1 className={styles.title}>Register for a career consultation</h1>
                    <form className={styles.inputs} onSubmit={handleFormSubmit}>
                        <div className={styles.first_inputs}>
                            {/* <input type="tel" className={styles.tel} /> */}

                            <PhoneInput className={styles.tel} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                                onChange={value => setPhoneNumber(value)} />
                            <input type="text" className={styles.name} placeholder='Name' />
                        </div>
                        <div className={styles.second_inputs}>
                            <input type="email" className={styles.email} placeholder='Email' />
                            <input type='submit' className={styles.btn} value="Submit" />
                        </div>
                        <div className={styles.check}>
                            <input className={styles.checkbox} type="checkbox" />
                            <span className={styles.checkbox__text}>By clicking the checkbox you agree to our privacy policy, terms of use and training agreement.</span>
                        </div>
                    </form>
                </div>
            </div>)
            {/* } */}
        </>
    )
}

export default Popup

