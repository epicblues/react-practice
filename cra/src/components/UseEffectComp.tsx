import React, { useEffect, FunctionComponent, useState } from "react";

const UseEffectComp: FunctionComponent<any> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("its mounted! or updated");
    console.log("count : ", count);
    return () => {
      console.log("componentwillunmount or will update");
      // state가 변화하기 '직전'의 상태를 조회할 수 있다.
      // 즉 아직 state의 값이 변화하지 않았다!!!!!!!!!!!
      console.log("count : ", count);
    };
  }, [count]); // 의존성 객체 : 이 객체가 update됐을 때 didupdate willupdate를 호출할 것인가
  return (
    <div>
      <h3>Effect</h3>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default UseEffectComp;
