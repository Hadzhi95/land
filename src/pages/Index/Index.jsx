import React, { useRef } from "react";
import styles from './Index.scss';
import Land1 from "../../components/1/1";
import Land2 from "../../components/2/2";
import Land3 from "../../components/3/3";
import Land4 from "../../components/4/4";
import Land5 from "../../components/5/5";
import Land6 from "../../components/6/6";
import Land7 from "../../components/7/7";
import Land8 from "../../components/8/8";
import Land9 from "../../components/9/9";
import Land10 from "../../components/10/10";
import Land11 from "../../components/11/11";
import Land12 from "../../components/12/12";
import Land13 from "../../components/13/13";
import Land14 from "../../components/14/14";
import Land15 from "../../components/15/15";
import Land16 from "../../components/16/16";
import Land17 from "../../components/17/17";
import Land18 from "../../components/18/18";
import Land19 from "../../components/19/19";
import Land20 from "../../components/20/20";

function Index() {
  const mentorsRef = useRef(null);
  return (
    <>
      <div className={styles.container}>
        <Land1 />
        <Land2 />
        <Land3 />
        <Land4 />
        <Land5 />
        <Land6 />
        <Land7 />
        <Land8 ref={mentorsRef} />
        <Land9 ref={mentorsRef} />
        <Land10 />
        <Land11 />
        <Land12 />
        <Land13 />
        <Land14 />
        <Land15 />
        <Land16 />
        <Land17 />
        <Land18 />
        <Land19 />
        <Land20 />
      </div>

    </>
  );
}

export default Index;
