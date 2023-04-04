import React, { useEffect, useRef, forwardRef } from "react";
import styles from './Land8.scss';
import image1 from './image1.svg';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import leftArrow from './LeftArrow.svg';
import rightArrow from './RightArrow.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Land8() {
  const [swiper, setSwiper] = React.useState(null);
  const slidePrev = () => {
    swiper.slidePrev();
  };
  const slideNext = () => {
    swiper.slideNext();
  };
  return (
    <>
      <div id='mentors' className={styles.container}>
        <div className={styles.col}>
          <div className={styles.title}>
            Mentors
          </div>
          <div className={styles.inform}>
            <div className={styles.info}>
              Our course is not a dull watch-and-read combination material.
            </div>
            <div className={styles.inf}>
              Throughout the whole journey, you will be guided by mentors from USA, Russia, and India who proved to be the best experts in the industry.
            </div>
            <div className={styles.info}>
              They will teach you, help you with your homework, and advise you so as to ensure you get the maximum knowledge and develop expertise in Digital marketing quickly.
            </div>
          </div>
        </div>
        <div className={styles.row_mobile}>
          <img src={image1} className={styles.arrow} alt="" />
        </div>
        <div className={styles.row}>
          <img onClick={() => slidePrev()} className={styles.arrow} src={leftArrow} />
          <div className={styles.swiper}>
          <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={(s) => {
                console.log("initialize swiper", s);
                setSwiper(s);
              }}
              loop
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
               }}
            >
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiper_images} src={image1} />
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiper_images} src={image2} style={{ width: "922px", height: "662px", objectFit: "cover" }}/>
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiper_images} src={image3} style={{ width: "922px", height: "662px", objectFit: "cover" }}/>
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiper_images} src={image4} style={{ width: "922px", height: "662px", objectFit: "cover" }}/>
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.swiper_images} src={image5} style={{ width: "922px", height: "662px", objectFit: "cover" }}/>
              </SwiperSlide>
            </Swiper>
          </div>
          <img onClick={() => slideNext()} className={styles.arrow} src={rightArrow} />
        </div>
      </div>
    </>
  );
}

export default Land8;
