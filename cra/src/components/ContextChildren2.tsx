import React from "react";
import { Consumer } from "./ContextAPI";
// Provider로 받은 데이터 불러올 수 있다

class ContextChildren2 extends React.Component<any, any> {
  // 컨텍스트 이용하기 예제
  render() {
    return (
      <Consumer
        children={(contextValue) => (
          <>
            <h3>contextValue : {JSON.stringify(contextValue.value1)}</h3>
            <button
              onClick={() => {
                contextValue.setStateFunc({
                  // ContextAPI 인스턴스가 아닌 구조 분해되고
                  //setState가 탑재된 다른 객체가 오는 것이라 binding을 해야 함

                  value1: { name: "baka", age: 70, boogie: "hello" },
                });
              }}
            >
              ChangeValueof ContextAPI
            </button>
          </>
        )}
      />
    );
  }
}

export default ContextChildren2;
