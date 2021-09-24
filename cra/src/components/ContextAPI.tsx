import React, { Component } from "react";
import ContextChildren from "./ContextChildren";
// Provider, Consumer 생성
const { Provider, Consumer } = React.createContext<any>({});

export { Consumer }; // 다른 컴포넌트에서 사용하게

class ContextAPI extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value1: { name: "Using Context API", age: 24 },
    };
  }

  // context API 데이터 전송 예제
  render() {
    // Provider로 둘러 싼다.
    return (
      <>
        <Provider
          value={{
            ...this.state,
            setStateFunc: this.setState.bind(this),
          }}
        >
          <ContextChildren />
        </Provider>
      </>
    );
  }
}

export default ContextAPI;
