import React from "react";
import {useParams} from "react-router-dom";
import styles from "./jap.module.css";
import {useState, useContext} from "react";
import {AppContext} from "../../App";
import {useForm} from "react-hook-form";

const Jap = () => {
  // const {japitem} = useParams();
  const [input, setInput] = useState("");
  const {japitem, setJapitem} = useContext(AppContext);

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1>Order to Japan</h1>
          <input onChange={handleSubmit(onSubmit)} />
          <button
            onClick={() => {
              setJapitem(input);
            }}
          >
            상품추가
          </button>
        </div>
      </div>
    </>
  );
};

export default Jap;
