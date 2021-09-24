import React, { Fragment, FunctionComponent } from "react";
import UseStateComp from "./components/UseStateComp";

const App: FunctionComponent<{ hello: string }> = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h2 children="Function Component" />
      <UseStateComp contents="이것은 함수형 컴포넌트입니다" />
    </Fragment>
  );
};

export default App;
