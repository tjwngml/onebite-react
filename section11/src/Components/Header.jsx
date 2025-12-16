import { memo } from 'react';
import './Header.css';

function Header(){
  return(
    <div className="Header">
      <h3>오늘은😘 </h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

// const memoizedHeader = memo(Header)
// Header의 props가 변경되지 않았을 때는 리렌더링 하지 않음
// 최적화하여 memoizedHeader 로 반환

export default memo(Header);