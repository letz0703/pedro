import React, {useState, Link} from "react";
import styles from "./home.module.css";
import Hambuger from "../hambuger/hambuger";
import Intro from "../intro/intro";
import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const {data, isLoading, isError, refetch} = useQuery(["cat"], async () => {
    const res = await Axios.get("https://catfact.ninja/fact");
    return res.data;
  });

  return (
    <div className={styles.container}>
      <div className={styles.threeline}>
        <Hambuger showmenu={showmenu} setShowmenu={setShowmenu} />
      </div>

      <div>
        {showmenu && (
          <>
            <span>{data?.fact}</span>
            <Intro />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
