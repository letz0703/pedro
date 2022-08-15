import React from "react";
import styles from "./dambe.module.css";

const Dambe = () => {
  const myStyle = {
    backgroundColor: "blue"
  };
  return (
    <>
      <div className={styles.grid}>
        <h1>면세</h1>
        <p>ESSE, THIS</p>
      </div>
      <div className={styles.grid}>
        <h1>수출용</h1>
        <p>ESSE</p>
      </div>
      <div className={styles.grid}>
        <h1>해외산</h1>
        <p>맨체스터(영국), 아메리칸 레전드(러시아)</p>
      </div>
    </>
  );
};

export default Dambe;
