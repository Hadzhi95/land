import React, { useState, useEffect, useRef } from 'react'
import styles from './Popup.scss'

function Popup({ active, setIsPopup, y }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const checkIfClickOutside = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setIsPopup(false);
            }
        }
        console.log("y", y);
        document.addEventListener('click', checkIfClickOutside)
        return () => {
            document.removeEventListener('click', checkIfClickOutside)
        }
    }, [])

    return (
        <>
            {active && (
                <div className={styles.overlay} style={y === 0 ? {top: `${y}mm !important`, transform: `translate(0%, 0%)`} : {top: `${y}mm !important`, transform: `translate(0%, 0%)`}}
                > 
                    <div className={styles.success_modal} ref={inputRef}>
                        <h1 className={styles.success_title}>That's one small step for a man,</h1>
                        <h1 className={styles.success_title}>one giant step for your career!</h1>
                        <h1 className={styles.success_message}>Our career coaching team</h1>
                        <h1 className={styles.success_message}>will call you back shortly</h1>
                    </div> 
                </div>
            )
            }
        </>
    )
}

export default Popup