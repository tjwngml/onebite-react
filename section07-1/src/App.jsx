import { useEffect, useState } from "react";
import "./App.css";
import Controller from "./Components/Controller";
import Viewer from "./Components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  // 1. 마운트 : 탄생
  

  // 2. 업데이트 : 변화, 리렌더링
  // 3. 언마운트 : 죽음


  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );

}

export default App;