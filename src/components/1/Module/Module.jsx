import React, { useState } from "react";
import styles from './Module.scss';

function Module({ number, name, elements = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={open ? {} : { height: '100%' }} className={styles.container}>


        {/* <div className={styles.content_container}>
          {elements.length ? (
            <div className={styles.plus} onClick={() => setOpen(!open)}>
              <div style={number % 2 ? { borderColor: '#701AC7' } : { borderColor: '#4BDFDF' }} className={styles.vector2}></div>
              <div style={number % 2 ? { borderColor: '#701AC7' } : { borderColor: '#4BDFDF' }} className={styles.vector1}></div>
            </div>
          ) : (<></>)}
          <div style={number % 2 ? { background: '#701AC7' } : { background: '#4BDFDF' }} className={styles.module}>
            Module {number}
          </div>
          <div className={styles.content}>
            {name}
          </div>
        </div> */}


        {/* ==> mobile */}


        {/* <div className={styles.content_container}>
          <div className={styles.cont}>
            {elements.length ? (
              <div className={styles.plus} onClick={() => setOpen(!open)}>
                <div style={number % 2 ? { borderColor: '#701AC7' } : { borderColor: '#4BDFDF' }} className={styles.vector2}></div>
                <div style={number % 2 ? { borderColor: '#701AC7' } : { borderColor: '#4BDFDF' }} className={styles.vector1}></div>
              </div>
            ) : (<></>)}
            <div style={number % 2 ? { background: '#701AC7' } : { background: '#4BDFDF' }} className={styles.module}>
              Module {number}
            </div>
          </div>

          <div className={styles.content}>
            {name}
          </div>
        </div> */}


        {/* full screen */}

        <div className={styles.content_container} onClick={() => setOpen(!open)}>
          <div className={styles.cont}>

            <div style={number % 2 ? { background: '#701AC7' } : { background: '#4BDFDF' }} className={styles.module}>
              Module {number}
            </div>

            <div className={styles.content}>
              {name}
            </div>

          </div>

          {elements.length ? (
            <div style={open ? { rotate: '45deg' }: {}} className={styles.plus}>
              <div style={number % 2 ? { borderColor: '#701AC7' } : { borderColor: '#4BDFDF' }} className={styles.vector2}></div>
              <div style={number % 2 ? { borderColor: '#701AC7' } : { borderColor: '#4BDFDF' }} className={styles.vector1}></div>
            </div>
          ) : (<></>)}



        </div>



        {open && (<>
          {elements.map((el) => (
            <div key={Math.random()} className={styles.elements_container}>
              <div className={styles.el_contain}>
                <div className={styles.elipse} style={open === number ? {rotate: '45deg' } : {}}></div>
                <div className={styles.element}>
                  {el}
                </div>
              </div>
              <div className={styles.line}></div>
            </div>
          ))}
        </>)}
      </div>
    </>
  );
}

export default Module;
