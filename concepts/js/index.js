// // React 컴포넌트 만들기 : without JSX

// function HelloButton(props) {
//   return React.createElement(
//     "button",
//     {
//       // React Component 옵션 부여
//       onClick: (event) => alert(event.target.innerText),
//     },
//     props.message // children
//   );
// }

// // 컨테이너 찾기
// const container = document.getElementById("react-component");
// // 컨테이너에 리액트 컴포넌트 붙이기.
// ReactDOM.render(HelloButton({ message: "Click Me (React)" }), container);

// with JSX
// 함수형 컴포넌트
function HelloButton(props) {
  console.log("HelloButton props:", props);
  console.log("children:", props.children);
  const click = (e) => {
    console.log(e.target.value);
    alert(e.target.innerText);
    e.target.innerText = "this button is clicked!";
  };
  return (
    <div>
      <button onClick={click}>
        {props.message} {props.children}
      </button>
    </div>
  );
}

// 클래스형 컴포넌트
// 리액트의 컴포넌트 클래스를 상속 받아야 한다.
class HelloButtonClass extends React.Component {
  // constructor(props) {
  //   super(props); // props 멤버에 덮어씌위기
  //   console.log(props);
  // }

  click(e) {
    console.log(this);
    e.preventDefault();
    alert(e.target.innerText);
  }

  // 반드시 render 메서드를 Override(덮어씌우기) 해줘야 한다.
  render() {
    console.log(this.props);
    return (
      <button onClick={(e) => this.click(e)}>{this.props.children}</button>
    );
  }
}

const KmsWelcome = new Welcome({
  message: "hello world",
  children: "이것은 차일드 입니다.",
}).render();

ReactDOM.render(
  <div>
    <HelloButtonClass message={"React Function Button"}>
      im HelloButton's Children
    </HelloButtonClass>
    {new Welcome({
      message: "hello world",
      children: <p>이것은 children 입니다</p>,
    }).render()}
  </div>,
  document.getElementById("react-component")
);
