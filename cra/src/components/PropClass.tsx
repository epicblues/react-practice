import React, { Component, EventHandler } from 'react'

interface props {
  prop_str: string,
  prop_false: boolean,
  prop_true: boolean,
  prop_obj: {
    name: string,
    age: number
  },
  prop_num: number,
  prop_func: Function,
  children: React.ReactElement

}


export default class PropClass extends Component<props, any> {
  constructor(props: props) {
    super(props);
    console.log("PropClass's Props : ", this.props);
  }
  render() {
    let { prop_str, prop_false, prop_true, prop_obj, prop_num, prop_func, children } = this.props; // destructuring
    return (
      <div>
        <h3>Props from Parent</h3>

        <ul>
          <li>string: {prop_str}</li>
          <li>number: {prop_num}</li>
          <li>bool true: {prop_true}</li>
          <li>bool false: {prop_false}</li>
          <li>obj: {JSON.stringify(prop_obj)}</li>
          <li>children: {this.props.children === undefined && '없음'}</li>
          {prop_func && <li>function <button onClick={() => { prop_func("message from prop class") }}>이벤트 버튼</button></li>}
        </ul>

        {children};

      </div>
    )
  }
}
