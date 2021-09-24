import React, { FunctionComponent, useState, useEffect } from "react";

const UseStateComp: FunctionComponent<{ contents: string }> = (props) => {
  let { contents } = props;
  const [count, setCount] = useState(0);
  // count 초기값은 0 getter
  // setCount는 setter

  useEffect(() => {
    console.log("imperative activated"); // componentDidMount, componentDidUpdate
    return () => {
      console.log("cleanup Activated"); // componentWillUnmount, componentWillUpdate
    };
  }, []);

  return (
    <div>
      <h2>{contents}</h2>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count+
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Count-
      </button>
    </div>
  );
};

export default UseStateComp;
