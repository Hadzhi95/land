import React, { useState } from "react";
import Module from "../Module/Module";
import styles from './Land6.scss';

import arrowBlue from '../1/arrow-blue.svg';
import arrowGreen from '../1/arrow-green.svg';
import arrowPink from '../1/arrow-pink.svg';
import { useEffect } from "react";
import { useSpring, animated } from 'react-spring';

const Animation = () => {

  const [arrow1Props, setArrow1Props] = useSpring(() => ({
    from: {
      opacity: 0,
      left: -50
    },
    to: {
      opacity: 1,
      left: 0
    },
    config: {
      duration: 500
    }
  }));

  const [arrow2Props, setArrow2Props] = useSpring(() => ({
    from: {
      opacity: 0,
      left: -50
    },
    to: {
      opacity: 1,
      left: 250
    },
    config: {
      duration: 500
    }
  }));

  const [arrow3Props, setArrow3Props] = useSpring(() => ({
    from: {
      opacity: 0,
      left: -50
    },
    to: {
      opacity: 1,
      left: 600
    },
    config: {
      duration: 500
    }
  }));

  return (
    <div className="animation">
      
      <animated.img
        className={styles.arrow}
        src={arrowBlue}
        style={arrow1Props}
      />
      <animated.img
        className={styles.arrow}
        src={arrowGreen}
        style={arrow2Props}
      />
      <animated.img
        className={styles.arrow}
        src={arrowPink}
        style={arrow3Props}
      />
    </div>
  );
};

function Land6() {
  const [more, setMore] = useState(true);
  const [animate, setAnimate] = useState(false);

  // const elements = ['Classic marketing',
  //   'Digital marketer portrait. What and how?',
  //   'Market statistics and analytics. Target audience',
  //   ' Communication tools'];

  const modules = [['Introduction into Digital Marketing',
    ['Classic marketing',
      'Digital marketer portrait. What and how?',
      'Market statistics and analytics. Target audience',
      ' Communication tools']
  ],
  ['The logic of work-setting. Marketing research',
    ['Brand goal-setting', 'Doing brand audit : Market research, rival and target audience analysis',
      'Writing marketing brief']
  ],
  ['Web-design and website building', ['Website prorotyping',
    'Unique selling proposition and mock-up design',
    'Making a website']
  ],
  ['Marketing creatives',
    ['Creative structure',
      'Designing creatives',
      'Creative implementation']
  ],
  ['Search engine strategy',
    ['Search engine optimisation',
      'SEM',
      'Contextual advertising',
      'SEM analytics',
      'Search engine analytics']
  ],
  ['SMM strategy',
    ['Community management in SMM',
      'Creating media content',
      'Targeted advertising',
      'SMM analytics']
  ],
  ['Email marketing',
    ['Types of email marketing',
      'Building email list',
      'Setting email campaigns',
      'Email marketing analytics']
  ],
  ['Messenger marketing',
    ['Facebook messenger ',
      'Whatsapp messenger',
      'Telegram messenger',
      'Building chatbots']
  ],
  ['Market-place strategies',
    ['Intro to market places',
      'Product analysis. Selecting niche and knowing what to sell',
      'Promotion strategy',
      'Building new brand strategy']
  ],
  ['Copywriting',
    ['Introduction to copywriting',
      'Writing content that sells',
      'SMM copywriting',
      'Copywriting for landing pages']
  ],
  ['Shaping digital strategy',
    ['Sales funnel:other lead generation tools',
      'CRM marketing',
      'Media planning']
  ],
  ['Web analytics',
    ['Reviewing web metrics',
      'Google analytics',
      'Similar web',
      'Semrush']
  ],
  ['ORM strategy and influence marketing',
    ['ORM and crowd-marketing',
      'Influence marketing',
      'SERM and search analytics']
  ]
  ];

  useEffect(()=>{
    setAnimate(true);
  }, [])

  return (
    <>
      <div id='syllabus' className={styles.container}>
      {animate && <Animation />}

        <div className={styles.title}>
          What is in the course for you
        </div>
        <div className={styles.cont}>
          {!more ? modules?.slice(0,4).map((el, i) => (
            <Module key={i} number={i + 1} name={el[0]} elements={el[1]} />
            )) : modules?.map((el, i) => (
              <Module key={i}  number={i + 1} name={el[0]} elements={el[1]} />
              ))}
              {/* <img src={greenarrow} alt="" />
              <img src="" alt="" />
              <img src="" alt="" /> */}



          {/* {modules?.map((el, i) => (
            <Module number={i} name={el[0]} elements={el[1]} />
          ))} */}
          <div className={styles.career_container}>
            {/* <div className={styles.plus}>
              <div className={styles.vector2}></div>
              <div className={styles.vector1}></div>
            </div> */}
            <div className={styles.career}>
              Career center
            </div>
          </div>

        </div>
        {/* {!more ? <button className={styles.btn_mobile_show} onClick={() => setMore(!more)}>Watch more</button> : <button className={styles.btn_mobile_hide} onClick={() => setMore(!more)}>Hide</button>} */}
        {/* <button className={styles.btn_mobile} onClick={() => setMore(!more)}>Watch more</button> */}
      </div>
    </>
  );
}

export default Land6;
