import React, { FunctionComponent, useRef } from "react";
import ReactRef from "./components/ReactRef";

const App: FunctionComponent<any> = () => {
  const h2Ref = useRef<any>();
  return (
    <div>
      <h2 ref={h2Ref}>Using Ref</h2>
      <ReactRef />
    </div>
  );
};

export default App;
