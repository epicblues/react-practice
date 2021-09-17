class Welcome extends React.Component {

  // 생성자
  constructor(props) {
    super(props); // 부모 생성자 호출

    // STATE : 객체 내부에서 정의되고 사용되는 데이터
    // 내부에서 변경 가능하다

    this.state = {
      color : 'yellow',
      ['name'] : 'body'
    }
    console.log("Welcome State : ", this.state);
    // state 조회 : this.state로 접근
    // state 변경 : this.setState() 함수로 변경

    console.log("Welcome Props : ",props);
    console.log("Welcome 생성자 호출!");
    
  }

  render() {
    // JSX를 리턴한다
    console.log("render props : ", this.props);

    // 컴포넌트에 style 부여하기
    const style = {
      backgroundColor: "bl" + "ack",
      color:this.state.color
    }

    return(
      <div style={style}>
        <h3>{this.props.message}</h3>
        {this.props.children}
      </div>
    )
  }
}




