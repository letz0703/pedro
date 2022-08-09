import React, {useState, Link} from 'react';
import styles from './home.module.css';
//https://youtu.be/LlvBzyy-558?t=419
const Home = () => {
  const [menu, setMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.threeline}>
        <input
          type='checkbox'
          id='menuicon'
          onChange={(eve) => {
            setShowmenu(!showmenu);
          }}
        />
        <label htmlFor='menuicon' className={styles.menuicon}>
          <span className={styles.item}></span>
          <span className={styles.item}></span>
          <span className={styles.item}></span>
        </label>
      </div>
      {showmenu && (
        <div className={styles.intro}>
          <ul>
            <li>
              <h1>일본주문</h1>
              {/* <span>국내 최저가/ 배송비 전액무료 / 당일 발송</span> */}
            </li>
            <li>
              <h1>공동구매</h1>
              {/* <span>오프라인보다 저렴/수량 한정 / 당일 발송</span> */}
            </li>
            <li>
              <h1>부산 깡통시장 구매대행</h1>
              {/* <span>깡통시장 오프라인 가격 + 택배비</span> */}
            </li>
          </ul>
        </div>
      )}
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
