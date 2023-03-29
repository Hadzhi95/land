import React, { useRef } from "react";
import styles from './Land9.scss';
import image1 from './image1.svg';
import image92 from './image92.png';
import image93 from './image93.png';
import image94 from './image94.png';
import image95 from './image95.png';
import leftArrow from './LeftArrow.svg';
import rightArrow from './RightArrow.svg';

function Land9() {
  const ref = useRef();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mentors__wrapper}>
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
                  <img className={styles.swiper_images}  src={image1} />
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                  <img className={styles.swiper_images} src={image92} style={{ width: "600px", height: "662px", objectFit: "cover"}}/>
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                  <img className={styles.swiper_images} src={image93} style={{ width: "600px", height: "662px", objectFit: "cover" }}/>
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                  <img className={styles.swiper_images} src={image94} style={{ width: "600px", height: "662px", objectFit: "cover" }}/>
              </swiper-slide>
              <swiper-slide key={Math.random()}>
                  <img className={styles.swiper_images} src={image95} style={{ width: "600px", height: "662px", objectFit: "cover" }}/>
              </swiper-slide>
            </swiper-container>
          </div>
          <img onClick={() => ref.current.swiper.slideNext()} className={styles.arrow__right} src={rightArrow} />
        </div>
        <div className={styles.col}>
          <div className={styles.title}>
            Community support
          </div>
          <div className={styles.inform}>
            <div className={styles.info}>
              We have a proactive team of community managers to assist you with your queries and help you out any time.
            </div>
            <div className={styles.inf}>
              Our community experts will guarantee you end-to-end support and will make sure you don’t only study, but build a useful circle of colleagues and friends, which will pay you off in both studies and future work.
            </div>
          </div>
        </div>
        <div className={styles.row_mobile}>
          <img src={image1} className={styles.arrow} alt="" />
        </div>
      </div>
      <div className={styles.line}>
      </div>
      </div>
    </>
  );
}

export default Land9;
