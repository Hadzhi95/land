import React, { useRef } from "react";
import styles from './Land14.scss';
import image1 from './image1.svg'
import image142 from './image142.png'
import image143 from './image143.png'
import image144 from './image144.png'
import image145 from './image145.png'
import leftArrow from './LeftArrow.svg';
import rightArrow from './RightArrow.svg';
import dots from './dots.svg';
import pepsico1 from './6_2.png';
import cisco1 from './5_2.png';
import x51 from './4_2.png';
import four1 from './3_2.png';
import sber1 from './2_2.png';
import hilton1 from './1_2.png';
import pepsico from './6.png';
import cisco from './5.png';
import x5 from './4.png';
import four from './3.png';
import sber from './2.png';
import hilton from './1.png';

import pepsicoMobile from './pepsico-mobile.png';
import ciscoMobile from './cisco-mobile.png';
import x5Mobile from './x5group-mobile.png';
import fourMobile from './four-seasons-mobile.png';
import sberMobile from './sber-mobile.png';
import hiltonMobile from './hilton-mobile.png';
import diplomMobile from './diplom-mobile.png';

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

function Land14() {
  const ref = useRef();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          Our graduates are employed in
        </div>
        <div className={styles.row}>
          <img onClick={() => ref.current.swiper.slidePrev()} className={styles.arrow__left} src={leftArrow} />
          <div className={styles.swiper}>
            <swiper-container
              slides-per-view='1'
              speed="500"
              ref={ref}
              navigation="true"
            >
              <swiper-slide key={Math.random()}>
                <img className={styles.image} src={image1} />
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                <img className={styles.image} src={image142} style={{ width: "1070px", height: "713px" }} />
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                <img className={styles.image} src={image143} style={{ width: "1070px", height: "713px" }} />
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                <img className={styles.image} src={image144} style={{ width: "1070px", height: "713px" }} />
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                <img className={styles.image} src={image145} style={{ width: "1070px", height: "713px" }} />
              </swiper-slide>
            </swiper-container>
          </div>
          <img onClick={() => ref.current.swiper.slideNext()} className={styles.arrow__right} src={rightArrow} />
        </div>
        <img src={diplomMobile} className={styles.diplomMobile} />
        <div className={styles.col}>
          <div className={styles.row1}>
            <img className={styles.inv} src={sber} alt="" />
            {/* <img className={styles.inv1} src={sber1} alt="" /> */}
            <img className={styles.invent} src={hilton} alt="" />
            <img className={styles.inv} src={four} alt="" />

            <img className={styles.sberMobile} src={sberMobile} alt="" />
            <img className={styles.hiltonMobile} src={hilton} alt="" style={{ width: "250px" }} />
            <img className={styles.fourMobile} src={fourMobile} alt="" />
          </div>
          <div className={styles.row1}>
            <img className={styles.inv} src={x5} alt="" />
            <img className={styles.invent} src={cisco} alt="" />
            <img className={styles.inv} src={pepsico} alt="" />

            <img className={styles.x5Mobile} src={x5Mobile} alt="" />
            <img className={styles.ciscoMobile} src={ciscoMobile} alt="" />
            <img className={styles.pepsicoMobile} src={pepsicoMobile} alt="" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Land14;
