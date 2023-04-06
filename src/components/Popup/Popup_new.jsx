import React, { useState, useEffect, useRef } from 'react'
import styles from './Popup.scss'
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'

function Popup({ active, setIsPopup }) {
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef(null);

    const [phoneNumber, setPhoneNumber] = useState('+91');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setIsPopup(prev => !prev);
        }, 5000);
    }

    const closeModal = () => {
        setIsPopup(prev => !prev);
    }

    useEffect(() => {
        const checkIfClickOutside = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setIsPopup(false);
            }
        }
        document.addEventListener('click', checkIfClickOutside)
        return () => {
            document.removeEventListener('click', checkIfClickOutside)
        }
    }, [])

    return (
        <>
            {active &&
            showModal ?
                (
                    <div className={styles.overlay}> 
                    <div className={styles.success_modal}>
                    <h1 className={styles.success_title}>That's one small step for a man,</h1>
                    <h1 className={styles.success_title}>one giant step for your career!</h1>
                    <h1 className={styles.success_message}>Our career coaching team</h1>
                    <h1 className={styles.success_message}>will call you back shortly</h1>
                    
                    </div> 
                </div>
                ):
                (<div className={styles.overlay} >
                    <div className={styles.registration_form} ref={inputRef}>
                        <h1 className={styles.title}>Register for a career consultation</h1>
                        <form className={styles.inputs} onSubmit={handleFormSubmit}>
                            <div className={styles.first_inputs}>
                                <label>
                                    <input className={styles.tel} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" value={phoneNumber}
                                        onChange={e => setPhoneNumber(e.target.value)} />
                                    <span className={styles.icon_search}></span>
                                </label>
                                <input type="text" className={styles.name} placeholder='Name' />
                            </div>
                            <div className={styles.second_inputs}>
                                <input type="email" className={styles.email} placeholder='Email' />
                                <input type='submit' className={styles.btn} value="Submit" />
                            </div>
                            <div className={styles.check}>
                                <input className={styles.checkbox} type="checkbox" />
                                <span className={styles.checkbox__text}>By clicking the checkbox you agree to our privacy policy and training agreement.</span>
                            </div>
                        </form>
                    </div>
                </div>)
            
            }
        </>
    )
}

export default Popup