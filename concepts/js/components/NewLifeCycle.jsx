

class NewLifeCycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color:"blue"}
  }

  // New Mounting 라이프 사이클
  // constructor -> getDerivedStateFromProps 
  // -> render -> componentDidMount
  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받아온 값을 state에 넣고 싶을 때
    console.log("New LifeCycle : getDerivedStateFromProps ", nextProps, prevState);
    if(nextProps.color !== prevState.color &&
      nextProps.color !== undefined) {
        // 새로운 props를 state에 반영
        console.log("color state에 반영");
        return {...nextProps}; // 변경된 state 리턴

      } 
      // 변경 사항이 없을 때
    return prevState;
  }

  shouldComponentUpdate(nextProps, nextState) {bj
    // component를 다시 rendering 해야 할 지 결정하는 단계
    console.log("Should Component Update : ",nextProps, nextState);
    return false; // return  값이 true면 다시 렌더링
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 컴포넌트 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환한다.
    // 이 값은 componentDidUpdate에서 받아올 수 있다.
    console.log("New Lifecycle : getSnapshoutBeforeUpdate calls");
    console.log(prevProps);
    console.log(prevState);

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // snapshout은 getSnapsoutBeforeUpdate에서 리턴한 값.
    console.log("New LifeCycle : componentDidUpdate calls");
    if(snapshot) {
      console.log("업데이트 되기 전에 snapshot", snapshot);
    }
  }

  // New Updating LifeCycle : getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapShoutBeforeUpdate -> componentDidUpdate

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    )
  }
}
