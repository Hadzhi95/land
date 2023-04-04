import React, { useState } from "react";
import styles from './Land18.scss';
import image from './Arrows.svg';
import TextModule from "../TextModule/TextModule";

function Land18() {
  const [open, setOpen] = useState(-1);
  const names = [
    'Сan I enroll if I have no marketing experience?',
    'How many hours per week do I need to learn?',
    'Can I do this course while studying or being employed?',
    'What if I fail in a project or course assignments?'
  ];


  const content = ['Our course is beginner friendly. Our materials comprise all the necessary knowledge for both beginners and upskillers. So you can go through the course and start a career in dm even if you have no prior experience in marketing at all!',
    'The number of hours per week you will need to learn will depend on the specific module you are taking, as well as your individual learning style and pace. Some modules may require more time commitment than others, and some students may need more or less time to grasp the material. In general, though, most online courses recommend that students set aside 4-5 hours per week to complete readings, watch videos, complete assignments, and participate in discussions or group activities.',
    'We motivate our students to devote 4 – 6 hours per week to go through the curriculum and complete the given assignments without lagging behind the batchmates.It is the minimum time that one should put to complete their course in the span of 6 months to get certified and enjoy the benefits of our career center.',
    'Our course is designed for both self and tutored education.And you have access to all the modules with no time limit.Thus, every student has constant community and mentor support.So, your chances of failing are very low.Nonetheless, If you ever fail to keep pace you will have the opportunity to study course materials and submit the assignments later given full guidance and support.']

  return (
    <>
      <div className={styles.cont}>
        <img className={styles.image} src={image} />
        <div className={styles.container}>
          
          <h3 className={styles.faq}>
            FAQs
          </h3>
          {names?.map((el, i) => (
            <TextModule key={i} id={i} name={el} element={content[i]} open={open} setOpen={setOpen} />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Land18;

