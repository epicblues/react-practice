import React, { Fragment, FunctionComponent, useState } from "react";
import UseEffectComp from "./components/UseEffectComp";
import UseStateComp from "./components/UseStateComp";

const App: FunctionComponent<{ hello: string }> = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <h2 children="Function Component" />
      <UseStateComp contents="이것은 함수형 컴포넌트입니다" />
      <br />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Show/Hide
      </button>
      {visible ? <UseEffectComp /> : null}
    </Fragment>
  );
};

export default App;
