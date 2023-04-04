import React from "react";
import styles from './Land20.scss';
import logo from './logo.svg';
import inst from './inst.svg';
import whatsapp from './whatsapp.svg';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import { Link } from "react-router-dom";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

function Land20() {
  return (
    <>
      <footer className={styles.main_cont}>
        <div className={styles.container}>
          <img className={styles.image} src={logo} alt="" />


          <div className={styles.contacts}>Get in touch with us:</div>
          <div className={styles.row}>

            <div className={styles.contact_block}>

              <div className={styles.contact_email_info}>Student Support:</div>
              <div className={styles.contact_email}>info@megacampus.com</div>

            </div>

            <div className={styles.contact_block2}>

              <div className={styles.contact_number_info}>Learn more about the courses:</div>
              <div className={styles.contact_number}>+63 991 777-06-68</div>

            </div>



            <div className={styles.policy}>
              <Link className={styles.policy__link} to='/privacy'  style={{ textDecoration: 'none' }}>

                Privacy Policy

              </Link>
            </div>

            <div>
              <div className={styles.policy}>
                <Link className={styles.policy__link} to='/agreement'  style={{ textDecoration: 'none' }}>
                  Training agreement
                </Link>
              </div>
             
            </div>
          </div>
          <div className={styles.messangers_icons}>
            <a target='_blank' href="https://www.instagram.com/megacampus/"><img className={styles.icons} src={inst} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/company/megacampus/"><img className={styles.icons} src={linkedin} alt="" /></a>
            <a target='_blank' href="https://ru-ru.facebook.com/megacampus.rus/"><img className={styles.icons} src={facebook} alt="" /></a>
            <a target='_blank' href="https://www.whatsapp.com/"><img className={styles.icons} src={whatsapp} alt="" /></a>
          </div>
        </div>
        <div className={styles.row_main}>
          <div className={styles.contacts_main}>Get in touch<br/>with us:</div>

          <div className={styles.contact_block_main}>

            <div className={styles.contact_info_main}>Student Support:</div>
            <div className={styles.contact_email_main}>info@megacampus.com</div>

          </div>

          <div className={styles.contact_block2_main}>

            <div className={styles.contact_info_main}>Learn more about the courses:</div>
            <div className={styles.contact_number_main}>+63 991 777-06-68</div>

          </div>
          <div className={styles.messangers}>
            <a target='_blank' href="https://www.instagram.com/megacampus/"><img className={styles.image} src={inst} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/company/megacampus/"><img className={styles.image} src={linkedin} alt="" /></a>
            <a target='_blank' href="https://ru-ru.facebook.com/megacampus.rus/"><img className={styles.image} src={facebook} alt="" /></a>
            <a target='_blank' href="https://www.whatsapp.com/"><img className={styles.image} src={whatsapp} alt="" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Land20;
