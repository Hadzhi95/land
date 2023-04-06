import React, { useState, useEffect, useRef } from 'react'
import styles from './Popup.scss'
// import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
// import en from 'react-phone-number-input/locale/en.json'
import InputMask from 'react-input-mask'

const Popup = React.memo(({ isPopup, setIsPopup }) => {
    console.log(isPopup);
    const [showModal, setShowModal] = useState(false);
    // const [showPopup, setShowPopup] = useState(true);
    // const inputRef = useRef(null);
    // const closeRef = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('');

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     setShowModal(true);
    //     setTimeout(() => {
    //         setShowModal(false);
    //     }, 5000);
    // }
    // const closeModal = () => {
    //     setIsPopup(prev => !prev);
    // }

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

    // return (
    //     <>

    //         {/* (<div onClick={closeModal} className={styles.overlay} > */}
    //         (<div onClick={closeModal} className={styles.overlay} >
    //             <div className={styles.registration_form}>
    //                 <h1 className={styles.title}>Register for a career consultation</h1>
    //                 <form className={styles.inputs} onSubmit={handleFormSubmit}>
    //                     <div className={styles.first_inputs}>
    //                         {/* <input type="tel" className={styles.tel} /> */}

    //                         {/* <PhoneInput className={styles.tel} style={{backgroundColor: 'white', padding: '10px'}} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
    //                             onChange={value => setPhoneNumber(value)} /> */}
    //                         <label>
    //                             <input className={styles.tel} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
    //                                 onChange={e => setPhoneNumber(e.target.value)} />
    //                             <span className={styles.icon_search}></span>
    //                         </label>
    //                         <input type="text" className={styles.name} placeholder='Name' />
    //                     </div>
    //                     <div className={styles.second_inputs}>
    //                         <input type="email" className={styles.email} placeholder='Email' />
    //                         <input type='submit' className={styles.btn} value="Submit" />
    //                     </div>
    //                     <div className={styles.check}>
    //                         <input className={styles.checkbox} type="checkbox" />
    //                         <span className={styles.checkbox__text}>By clicking the checkbox you agree to our privacy policy and training agreement.</span>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>)
    //     </>
    // )



    return (

        <div className={isPopup ? styles.modal : styles.modal_active} onClick={() => setIsPopup(true)} >
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <h1 className={styles.title}>Register for a career consultation</h1>
                <form className={styles.inputs}>
                    <div className={styles.first_inputs}>

                        {/* <label>
                            <input className={styles.tel} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)} />
                            <span className={styles.icon_search}></span>
                        </label> */}

                        <label>
                            <InputMask mask='+\9\1 99 9999 9999' maskChar=" " className={styles.tel} type="tel" value={phoneNumber}
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
        </div>
    )




})

export default Popup

