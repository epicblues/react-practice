import React, { Fragment } from 'react';


interface props {
  prop_str: string,
  prop_false: boolean,
  prop_true: boolean,
  prop_obj: {
    name: string,
    age: number
  },
  prop_num: number,
  prop_func: Function

}


const PropFunc: React.FunctionComponent<props> = (props: props) => {
  console.log("PropFunc : ", props);
  let { prop_str, prop_func, prop_false, prop_num, prop_obj, prop_true } = props;

  return (
    <Fragment>
      <h3>Props from Parent</h3>
      <ul>
        <li>string : {prop_str}</li>
        <li>number : {prop_num}</li>
        <li>bool false : {!prop_false ? "false" : "not false"}</li>
        <li>bool true : {prop_true ? "true" : "not true"}</li>
        <li>object : {JSON.stringify(prop_obj)}</li>
        {prop_func && <li><button onClick={() => { prop_func("function component message") }}>Click</button></li>}
      </ul>
    </Fragment>
  )

}

export default PropFunc