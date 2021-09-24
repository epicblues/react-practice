import React, { Component } from "react";

interface props {
  reactString: string;
}

export default class ReactState extends Component<
  props,
  { stateString: string; stateNumber: number }
> {
  constructor(props: props) {
    super(props);
    // state 선언
    this.state = {
      stateString: this.props.reactString,
      stateNumber: 0,
    };
  }

  stateChange = (flag: string) => {
    if (flag === "direct") {
      // this.state.stateString = "리액트 스테이트 직접 변경";
      // this.state.stateNumber += 1;
    } else if (flag === "setState") {
      this.setState({
        stateString: "setState로 변경",
        stateNumber: this.state.stateNumber + 1,
      });
    } else {
      this.forceUpdate(() => {
        // render 함수를 강제로 호출
        // setState외의 방식으로 state가 바뀌어도 render가 되지 않는 것을 보완?
      });
    }
  };
  render() {
    console.log("rendered");

    return (
      <div>
        <h2>State</h2>
        <ul>
          string : {this.state.stateString}
          <br />
          number : {this.state.stateNumber}
        </ul>
        <button
          onClick={(e) => {
            this.stateChange("direct");
          }}
        >
          State 직접 변경
        </button>
        <button
          onClick={(e) => {
            this.stateChange("setState");
          }}
        >
          SetState로 변경
        </button>
        <button
          onClick={(e) => {
            this.stateChange("forceupdate");
          }}
        >
          State 강제 업데이트
        </button>
      </div>
    );
  }
}
