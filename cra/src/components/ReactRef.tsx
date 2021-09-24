import React, { Component, Fragment } from "react";

export default class ReactRef extends Component<any, any> {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    // 참조 객체 생성
  }
  refFocus = () => {
    //VJS로 DOM에 접근
    // document.getElementById("id").style.backgroundColor = "lightblue";
    // document.getElementById("id").focus();
    if (this.inputRef.current instanceof HTMLInputElement) {
      const input: HTMLInputElement = this.inputRef.current;
      input.style.backgroundColor = "lightgreen";
      input.focus();
    }
  };
  render() {
    return (
      <Fragment>
        <input type="text" id="id" ref={this.inputRef} />
        <button value="JS Focus" onClick={this.refFocus}>
          버튼
        </button>
      </Fragment>
    );
  }
}
