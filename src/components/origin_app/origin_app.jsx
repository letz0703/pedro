import React, {useState} from 'react';
//import styles from './origin_app.module.css'

const OriginApp = () => {
  const project = 'i.CANMART';
  const codes = ['1', '1815'];
  const isLoggedIn = true;
  const [inCode, setinCode] = useState('');
  return (
    <div>
      <header className='App-header'>
        <img src='./logo.svg' className='App-logo' alt='logo' />
        <p style={{color: isLoggedIn ? 'red' : 'green', backgroundColor: 'black', padding: '1rem'}}>{project} ٩(ˊᗜˋ *)و</p>
        {inCode === '' ? (
          <>
            <GetCode inCode={inCode} setinCode={setinCode} />
          </>
        ) : (
          <>
            <h1>
              안녕하세요.
              <br /> 깡통시장입니다~
            </h1>
            <div>
              <button>
                <h3>일본주문</h3>
              </button>
              <button>
                <h3>담배주문</h3>
              </button>
              <button>
                <h3>공동구매</h3>
              </button>
            </div>
          </>
        )}
        {/* <GetCode codes={codes} /> */}
      </header>
    </div>
  );
};

export default OriginApp;
// import styles from './get_code.module.css';
const GetCode = (props) => {
  return (
    <div>
      <input
        type='text'
        placeholder='enter code'
        className='input_code'
        onChange={(e) => {
          props.setinCode(e.target.value);
          props.isLoggedIn = true;
        }}
      />
    </div>
  );
};
