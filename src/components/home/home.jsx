import React, {useState, Link} from 'react';
import styles from './home.module.css';
import Hambuger from '../hambuger/hambuger';
import Intro from '../intro/intro';

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.threeline}>
        <Hambuger showmenu={showmenu} setShowmenu={setShowmenu} />
      </div>

      <div>{showmenu && <Intro />}</div>

      <div className={styles.japitem}>
        <h1> Oder To Japn</h1>
        <p>일본주문 / 선배송 후주문</p>
        일본에 주문하는 상품입니다.
        <br /> 먼저 상품을 보내드린 후 일본에 주문합니다.
        <br />
        해외 운임, 국내 배송비 모두 공짜 입니다.
        <br />
        저희 단골께만 소량 제공되는 특별가 수입대행 서비스 입니다.
        <br />
        <button>일본주문상세보기</button>
      </div>
      {/* <div className={styles.item}>일본주문</div>
      <div className={styles.item}>통관번호 필요 / 일주일간 해외주문 금지</div> */}
    </div>
  );
};

export default Home;
